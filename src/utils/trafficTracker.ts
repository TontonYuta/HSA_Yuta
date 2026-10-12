/**
 * Traffic Tracking Utility for HSA Yuta System
 * Automatically tracks page visits, daily views, and simulated live online presence.
 * Syncs asynchronously with the Google Apps Script webhook.
 */

export interface TrafficStats {
  totalVisits: number;
  todayVisits: number;
  activeOnline: number;
  lastUpdated: string;
}

const STORAGE_KEY = 'hsa_traffic_stats_v1';
const SESSION_KEY = 'hsa_session_pinged_v1';
const BASELINE_TOTAL_VISITS = 1420; // Platform baseline visits
const BASELINE_TODAY_VISITS = 68;

function getTodayKey(): string {
  const now = new Date();
  return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;
}

// Compute a natural live-online number based on hour of day
function calculateLiveOnline(): number {
  const hour = new Date().getHours();
  // Peak study hours: 19h - 23h (evening) and 8h - 11h (morning)
  let base = 12;
  if (hour >= 19 && hour <= 23) {
    base = 22;
  } else if (hour >= 14 && hour < 19) {
    base = 16;
  } else if (hour >= 7 && hour < 12) {
    base = 18;
  } else if (hour >= 0 && hour < 5) {
    base = 5;
  }
  // Subtle pseudo-random jitter [-2, +3] based on minutes
  const minute = new Date().getMinutes();
  const jitter = (minute % 6) - 2;
  return Math.max(3, base + jitter);
}

export function getStoredTrafficStats(): TrafficStats {
  const todayKey = getTodayKey();
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      // Check if date changed
      if (parsed.currentDate !== todayKey) {
        parsed.currentDate = todayKey;
        parsed.todayVisits = Math.max(1, Math.floor(Math.random() * 8) + 1);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(parsed));
      }
      return {
        totalVisits: parsed.totalVisits || BASELINE_TOTAL_VISITS,
        todayVisits: parsed.todayVisits || BASELINE_TODAY_VISITS,
        activeOnline: calculateLiveOnline(),
        lastUpdated: new Date().toLocaleTimeString('vi-VN'),
      };
    }
  } catch {
    // ignore json error
  }

  // Initialize fresh record
  const initial = {
    totalVisits: BASELINE_TOTAL_VISITS + 1,
    todayVisits: BASELINE_TODAY_VISITS + 1,
    currentDate: todayKey,
  };
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(initial));
  } catch {}

  return {
    totalVisits: initial.totalVisits,
    todayVisits: initial.todayVisits,
    activeOnline: calculateLiveOnline(),
    lastUpdated: new Date().toLocaleTimeString('vi-VN'),
  };
}

export function recordPageVisit(webhookUrl?: string): TrafficStats {
  const todayKey = getTodayKey();
  let stats = getStoredTrafficStats();

  const isSessionTracked = sessionStorage.getItem(SESSION_KEY);
  if (!isSessionTracked) {
    // First page load in this browser session -> Increment stats
    sessionStorage.setItem(SESSION_KEY, 'true');
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      const data = raw ? JSON.parse(raw) : {};
      const newTotal = (data.totalVisits || BASELINE_TOTAL_VISITS) + 1;
      const newToday = (data.currentDate === todayKey ? (data.todayVisits || 0) : 0) + 1;

      const updated = {
        totalVisits: newTotal,
        todayVisits: newToday,
        currentDate: todayKey,
      };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));

      stats = {
        totalVisits: newTotal,
        todayVisits: newToday,
        activeOnline: calculateLiveOnline(),
        lastUpdated: new Date().toLocaleTimeString('vi-VN'),
      };
    } catch {}

    // Dispatch async ping to Google Apps Script Webhook
    const targetUrl = webhookUrl?.trim() || localStorage.getItem('hsa_webhook_url')?.trim();
    if (targetUrl) {
      try {
        fetch(targetUrl, {
          method: 'POST',
          mode: 'no-cors',
          headers: { 'Content-Type': 'text/plain' },
          body: JSON.stringify({
            type: 'TRAFFIC_PING',
            timestamp: new Date().toISOString(),
            screen: typeof window !== 'undefined' ? `${window.innerWidth}x${window.innerHeight}` : 'unknown',
            referrer: typeof document !== 'undefined' ? (document.referrer || 'direct') : 'direct',
            totalVisits: stats.totalVisits,
            todayVisits: stats.todayVisits,
          }),
        }).catch(() => {});
      } catch {}
    }
  }

  return stats;
}
