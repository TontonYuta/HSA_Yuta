/**
 * Security & Anti-Cheat Utilities for HSA Webtest
 * - Input Sanitization & Validation (XSS Prevention)
 * - Anti-Tampering Checksum for Saved Exam States
 * - Request Throttling / Rate Limiting for Webhooks
 * - URL & Domain Validation
 */

/**
 * Strips dangerous HTML tags, attributes, and script injection payloads.
 */
export function sanitizeInput(input: string, maxLength = 100): string {
  if (!input || typeof input !== 'string') return '';

  let sanitized = input
    // Trim whitespace
    .trim()
    // Remove control characters
    .replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/g, '')
    // Strip HTML script/iframe/object/embed/style/link tags and events
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
    .replace(/<iframe\b[^<]*(?:(?!<\/iframe>)<[^<]*)*<\/iframe>/gi, '')
    .replace(/<[^>]*>?/gm, '') // Strip remaining HTML tags
    .replace(/javascript:/gi, '')
    .replace(/vbscript:/gi, '')
    .replace(/data:/gi, '')
    .replace(/on\w+\s*=/gi, ''); // Strip onload=, onerror=, etc.

  // Escape HTML entities to prevent injection
  sanitized = sanitized
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');

  // Truncate to maximum allowed length
  if (sanitized.length > maxLength) {
    sanitized = sanitized.slice(0, maxLength);
  }

  return sanitized;
}

/**
 * Validates student name for reasonable length and character safety.
 */
export function validateStudentName(rawName: string): {
  isValid: boolean;
  error?: string;
  cleanName: string;
} {
  const trimmed = (rawName || '').trim();
  if (!trimmed || trimmed.length < 2) {
    return {
      isValid: false,
      error: 'Vui lòng nhập họ và tên của bạn (tối thiểu 2 ký tự)',
      cleanName: '',
    };
  }

  if (trimmed.length > 60) {
    return {
      isValid: false,
      error: 'Họ và tên không được vượt quá 60 ký tự',
      cleanName: trimmed.slice(0, 60),
    };
  }

  // Prevent script/HTML injection patterns
  if (/[<>{}[\]\\]/.test(trimmed) || /javascript:/i.test(trimmed)) {
    return {
      isValid: false,
      error: 'Họ và tên chứa ký tự không hợp lệ hoặc nguy hiểm',
      cleanName: sanitizeInput(trimmed, 60),
    };
  }

  return {
    isValid: true,
    cleanName: sanitizeInput(trimmed, 60),
  };
}

/**
 * Validates email with standard RFC 5322 regex.
 */
export function validateEmail(email: string): boolean {
  if (!email || typeof email !== 'string') return false;
  const trimmed = email.trim();
  if (trimmed.length > 100) return false;
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;
  return emailRegex.test(trimmed);
}

/**
 * Validates that a webhook URL is an HTTPS URL from Google Apps Script or a secure origin.
 */
export function isAllowedWebhookUrl(url: string): boolean {
  if (!url || typeof url !== 'string') return false;
  const trimmed = url.trim();
  if (!trimmed.startsWith('https://')) return false;

  try {
    const parsed = new URL(trimmed);
    // Allow Google Apps Script domains or valid HTTPS URLs
    return parsed.protocol === 'https:' && parsed.hostname.length > 3;
  } catch {
    return false;
  }
}

/**
 * Fast deterministic FNV-1a 64-bit checksum for state integrity verification.
 * Used to detect client-side tampering with exam scores or elapsed time.
 */
export function generateTamperProofHash(data: unknown): string {
  try {
    const jsonStr = JSON.stringify(data);
    let h1 = 0xdeadbeef;
    let h2 = 0x41c64e6d;

    for (let i = 0; i < jsonStr.length; i++) {
      const ch = jsonStr.charCodeAt(i);
      h1 = Math.imul(h1 ^ ch, 2654435761);
      h2 = Math.imul(h2 ^ ch, 1597334677);
    }

    h1 = Math.imul(h1 ^ (h1 >>> 16), 2246822507) ^ Math.imul(h2 ^ (h2 >>> 13), 3266489909);
    h2 = Math.imul(h2 ^ (h2 >>> 16), 2246822507) ^ Math.imul(h1 ^ (h1 >>> 13), 3266489909);

    const hash = 4294967296 * (2097151 & h2) + (h1 >>> 0);
    return hash.toString(36);
  } catch {
    return 'tamper_fallback_hash';
  }
}

/**
 * Rate Limiter for Webhook submissions to prevent accidental or malicious spamming.
 * Enforces a cooldown between exam/topic submissions.
 */
const lastSubmissionTimestamps = new Map<string, number>();

export function checkSubmissionCooldown(
  key = 'default_submission',
  cooldownSeconds = 15
): { canSubmit: boolean; waitSeconds: number } {
  const now = Date.now();
  const lastTime = lastSubmissionTimestamps.get(key) || 0;
  const elapsedSeconds = Math.floor((now - lastTime) / 1000);

  if (elapsedSeconds < cooldownSeconds) {
    return {
      canSubmit: false,
      waitSeconds: cooldownSeconds - elapsedSeconds,
    };
  }

  return { canSubmit: true, waitSeconds: 0 };
}

export function recordSubmissionTime(key = 'default_submission'): void {
  lastSubmissionTimestamps.set(key, Date.now());
}
