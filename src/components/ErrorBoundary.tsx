import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RotateCcw, Home } from 'lucide-react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Unhandled React Error in HSA app:', error, errorInfo);
  }

  private handleReset = () => {
    this.setState({ hasError: false, error: null });
    window.location.href = '/';
  };

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-slate-50 dark:bg-[#09090b] text-slate-900 dark:text-zinc-100 flex items-center justify-center p-4">
          <div className="max-w-md w-full bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-2xl p-6 shadow-xl text-center space-y-4">
            <div className="w-12 h-12 rounded-full bg-rose-100 dark:bg-rose-950/60 text-rose-600 dark:text-rose-400 flex items-center justify-center mx-auto">
              <AlertTriangle className="w-6 h-6" />
            </div>
            
            <h1 className="text-lg font-bold text-slate-900 dark:text-zinc-100">
              Đã xảy ra sự cố hiển thị
            </h1>
            
            <p className="text-xs text-slate-600 dark:text-zinc-400 leading-relaxed">
              Ứng dụng vừa ghi nhận lỗi giao diện. Bạn có thể nhấn nút bên dưới để tải lại và quay về trang chủ phòng thi an toàn.
            </p>

            {this.state.error && (
              <div className="p-3 bg-slate-100 dark:bg-zinc-950 rounded-xl text-left font-mono text-[11px] text-rose-600 dark:text-rose-400 overflow-x-auto max-h-24">
                {this.state.error.message}
              </div>
            )}

            <div className="pt-2 flex items-center justify-center gap-2">
              <button
                type="button"
                onClick={this.handleReset}
                className="w-full py-2.5 px-4 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-semibold text-xs transition inline-flex items-center justify-center gap-1.5 cursor-pointer shadow-sm"
              >
                <Home className="w-3.5 h-3.5" />
                <span>Quay về trang chủ</span>
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
