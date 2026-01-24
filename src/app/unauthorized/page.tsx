"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export const dynamic = "force-dynamic";

export default function UnauthorizedPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-cyan-900 flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-500 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10">
          {/* Error Icon */}
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-32 h-32 bg-gradient-to-br from-amber-500/20 to-orange-600/20 backdrop-blur-sm border-2 border-amber-400/30 rounded-full mb-6">
              <svg
                className="w-16 h-16 text-amber-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
            </div>
          </div>

          {/* Error Code */}
          <h1 className="text-8xl md:text-9xl font-extrabold mb-4">
            <span className="bg-gradient-to-r from-amber-300 via-orange-300 to-amber-400 bg-clip-text text-transparent">
              403
            </span>
          </h1>

          {/* Error Message */}
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Akses Ditolak
          </h2>
          <p className="text-lg text-slate-300 mb-8 max-w-lg mx-auto leading-relaxed">
            Anda tidak memiliki izin untuk mengakses halaman ini. Silakan login
            terlebih dahulu atau hubungi administrator jika Anda merasa ini
            adalah kesalahan.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="group px-8 py-4 bg-gradient-to-r from-amber-600 to-orange-600 text-white rounded-full font-bold text-lg hover:from-amber-500 hover:to-orange-500 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 inline-flex items-center justify-center gap-2"
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
              Beranda
            </Link>
            <button
              onClick={() => router.back()}
              className="px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white rounded-full font-bold text-lg hover:bg-white/20 transition-all duration-300 hover:scale-105"
            >
              Kembali
            </button>
          </div>

          {/* Quick Links */}
          <div className="mt-12 pt-8 border-t border-white/10">
            <p className="text-slate-400 mb-4">
              Atau kembali ke halaman utama:
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link
                href="/"
                className="px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/20 rounded-lg text-slate-300 hover:text-white transition-colors"
              >
                Beranda
              </Link>
              <Link
                href="/daftar"
                className="px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/20 rounded-lg text-slate-300 hover:text-white transition-colors"
              >
                Pendaftaran
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
