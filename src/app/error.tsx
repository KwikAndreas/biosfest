"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log error ke console atau error reporting service
    console.error("Application Error:", error);
  }, [error]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-cyan-900 flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-500 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10">
          {/* Error Icon */}
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-32 h-32 bg-gradient-to-br from-red-500/20 to-orange-600/20 backdrop-blur-sm border-2 border-red-400/30 rounded-full mb-6 animate-pulse">
              <svg
                className="w-16 h-16 text-red-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
            </div>
          </div>

          {/* Error Code */}
          <h1 className="text-7xl md:text-9xl font-extrabold mb-4">
            <span className="bg-gradient-to-r from-red-300 via-orange-300 to-red-400 bg-clip-text text-transparent">
              Oops!
            </span>
          </h1>

          {/* Error Message */}
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Terjadi Kesalahan
          </h2>
          <p className="text-lg text-slate-300 mb-2 max-w-lg mx-auto leading-relaxed">
            Maaf, terjadi kesalahan yang tidak terduga. Tim kami telah
            diberitahu dan sedang memperbaikinya.
          </p>
          {error.digest && (
            <p className="text-sm text-slate-400 mb-8 font-mono">
              Error ID: {error.digest}
            </p>
          )}

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button
              onClick={reset}
              className="group px-8 py-4 bg-gradient-to-r from-red-600 to-orange-600 text-white rounded-full font-bold text-lg hover:from-red-500 hover:to-orange-500 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 inline-flex items-center justify-center gap-2"
            >
              <svg
                className="w-5 h-5 group-hover:rotate-180 transition-transform duration-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                />
              </svg>
              Coba Lagi
            </button>
            <Link
              href="/"
              className="px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white rounded-full font-bold text-lg hover:bg-white/20 transition-all duration-300 hover:scale-105 inline-flex items-center justify-center gap-2"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
              Kembali ke Beranda
            </Link>
          </div>

          {/* Additional Info */}
          <div className="mt-12 pt-8 border-t border-white/10">
            <p className="text-slate-400 text-sm mb-4">
              Jika masalah terus berlanjut, silakan hubungi tim support
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link
                href="/"
                className="px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/20 rounded-lg text-slate-300 hover:text-white transition-colors text-sm"
              >
                Beranda
              </Link>
              <button
                onClick={() => window.location.reload()}
                className="px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/20 rounded-lg text-slate-300 hover:text-white transition-colors text-sm"
              >
                Refresh Halaman
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
