"use client";

import Link from "next/link";

export default function LombaGameDevPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-cyan-900 text-white pt-32 pb-20 px-4">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-orange-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-500 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-orange-500/10 border border-orange-500/20 rounded-full text-orange-300 text-sm font-semibold backdrop-blur-sm">
              Kategori Mahasiswa
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-orange-300 via-red-300 to-orange-400 bg-clip-text text-transparent">
              Game Development
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-4 text-slate-200 font-medium">
            Game Edukatif Kebudayaan Nusantara
          </p>
          <p className="text-base md:text-lg mb-10 max-w-3xl text-slate-300 leading-relaxed">
            Ciptakan game yang memperkenalkan budaya Indonesia kepada pemain
            dengan cara yang menyenangkan, interaktif, dan edukatif.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/daftar"
              className="group px-8 py-4 bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-full font-bold text-lg hover:from-orange-500 hover:to-red-500 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 inline-flex items-center justify-center gap-2"
            >
              Daftar Sekarang
              <svg
                className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </Link>
            <button
              onClick={() => window.history.back()}
              className="px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white rounded-full font-bold text-lg hover:bg-white/20 transition-all duration-300 hover:scale-105"
            >
              Kembali
            </button>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-slate-50 to-transparent"></div>
      </section>

      {/* Info Cards */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 hover:shadow-md transition">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">Tim</h3>
                  <p className="text-slate-600">1-5 orang</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 hover:shadow-md transition">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">Biaya</h3>
                  <p className="text-slate-600">Rp 100.000</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 hover:shadow-md transition">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-xl flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">Hadiah</h3>
                  <p className="text-slate-600">Rp 7,5 Juta</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ketentuan */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-slate-900">
              Ketentuan Lomba
            </h2>
            <p className="text-lg text-slate-600">
              Syarat dan aturan yang wajib diikuti peserta
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center font-bold">
                1
              </div>
              <div>
                <h3 className="font-bold text-slate-900 mb-2">
                  Peserta Mahasiswa
                </h3>
                <p className="text-slate-600">
                  Peserta adalah mahasiswa aktif dari universitas/perguruan
                  tinggi manapun
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center font-bold">
                2
              </div>
              <div>
                <h3 className="font-bold text-slate-900 mb-2">Ukuran Tim</h3>
                <p className="text-slate-600">
                  Setiap tim terdiri dari 1-5 orang (1 ketua dan maksimal 4
                  anggota)
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center font-bold">
                3
              </div>
              <div>
                <h3 className="font-bold text-slate-900 mb-2">
                  Tema Kebudayaan
                </h3>
                <p className="text-slate-600">
                  Game harus mengangkat tema budaya Indonesia (tarian, musik,
                  cerita rakyat, dll)
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center font-bold">
                4
              </div>
              <div>
                <h3 className="font-bold text-slate-900 mb-2">
                  Kebebasan Platform
                </h3>
                <p className="text-slate-600">
                  Bebas memilih platform (PC, Mobile, Web) dan game engine
                  apapun
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center font-bold">
                5
              </div>
              <div>
                <h3 className="font-bold text-slate-900 mb-2">Orisinalitas</h3>
                <p className="text-slate-600">
                  Game harus orisinal dan belum pernah dipublikasikan atau
                  dilombakan
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center font-bold">
                6
              </div>
              <div>
                <h3 className="font-bold text-slate-900 mb-2">
                  Submisi Lengkap
                </h3>
                <p className="text-slate-600">
                  Berupa build game, gameplay video, dan design document
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Kriteria Penilaian */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-slate-900">
              Kriteria Penilaian
            </h2>
            <p className="text-lg text-slate-600">
              Aspek yang dinilai oleh juri
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 hover:shadow-md transition">
              <div className="text-4xl font-extrabold text-orange-600 mb-3">
                30%
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Gameplay
              </h3>
              <p className="text-slate-600">
                Fun to play dan game mechanics yang baik
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 hover:shadow-md transition">
              <div className="text-4xl font-extrabold text-red-600 mb-3">
                25%
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Konten Edukatif
              </h3>
              <p className="text-slate-600">
                Efektif menyampaikan nilai budaya
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 hover:shadow-md transition">
              <div className="text-4xl font-extrabold text-amber-600 mb-3">
                25%
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Visual & Audio
              </h3>
              <p className="text-slate-600">Kualitas grafis dan sound design</p>
            </div>
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 hover:shadow-md transition">
              <div className="text-4xl font-extrabold text-yellow-600 mb-3">
                20%
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Kreativitas
              </h3>
              <p className="text-slate-600">Inovasi dan keunikan konsep game</p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-slate-900">
              Timeline Lomba
            </h2>
            <p className="text-lg text-slate-600">
              Jadwal penting yang perlu diperhatikan
            </p>
          </div>
          <div className="space-y-6">
            <div className="flex items-start gap-6 group">
              <div className="flex-shrink-0 relative">
                <div className="w-5 h-5 rounded-full bg-gradient-to-br from-cyan-500 to-teal-600 shadow-lg group-hover:scale-125 transition-transform"></div>
                <div className="absolute top-5 left-1/2 transform -translate-x-1/2 w-0.5 h-20 bg-gradient-to-b from-cyan-300 to-transparent"></div>
              </div>
              <div className="flex-1">
                <div className="inline-block px-3 py-1 bg-cyan-100 text-cyan-700 rounded-lg text-sm font-bold mb-2">
                  6 Maret
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  Pendaftaran
                </h3>
                <p className="text-slate-600">Open Registration & Promotion</p>
              </div>
            </div>
            <div className="flex items-start gap-6 group">
              <div className="flex-shrink-0 relative">
                <div className="w-5 h-5 rounded-full bg-gradient-to-br from-cyan-500 to-teal-600 shadow-lg group-hover:scale-125 transition-transform"></div>
                <div className="absolute top-5 left-1/2 transform -translate-x-1/2 w-0.5 h-20 bg-gradient-to-b from-cyan-300 to-transparent"></div>
              </div>
              <div className="flex-1">
                <div className="inline-block px-3 py-1 bg-cyan-100 text-cyan-700 rounded-lg text-sm font-bold mb-2">
                  4 April
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  Technical Meeting
                </h3>
                <p className="text-slate-600">Hybrid Technical Meeting</p>
              </div>
            </div>
            <div className="flex items-start gap-6 group">
              <div className="flex-shrink-0 relative">
                <div className="w-5 h-5 rounded-full bg-gradient-to-br from-teal-500 to-green-600 shadow-lg group-hover:scale-125 transition-transform"></div>
                <div className="absolute top-5 left-1/2 transform -translate-x-1/2 w-0.5 h-20 bg-gradient-to-b from-teal-300 to-transparent"></div>
              </div>
              <div className="flex-1">
                <div className="inline-block px-3 py-1 bg-teal-100 text-teal-700 rounded-lg text-sm font-bold mb-2">
                  13 April
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  Seleksi 1
                </h3>
                <p className="text-slate-600">Pengerjaan dan submit proposal</p>
              </div>
            </div>
            <div className="flex items-start gap-6 group">
              <div className="flex-shrink-0 relative">
                <div className="w-5 h-5 rounded-full bg-gradient-to-br from-teal-500 to-green-600 shadow-lg group-hover:scale-125 transition-transform"></div>
                <div className="absolute top-5 left-1/2 transform -translate-x-1/2 w-0.5 h-20 bg-gradient-to-b from-teal-300 to-transparent"></div>
              </div>
              <div className="flex-1">
                <div className="inline-block px-3 py-1 bg-teal-100 text-teal-700 rounded-lg text-sm font-bold mb-2">
                  20 April
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  Seleksi 2 - Semi Finalist
                </h3>
                <p className="text-slate-600">
                  Pengerjaan mobile app integrated with AI
                </p>
              </div>
            </div>
            <div className="flex items-start gap-6 group">
              <div className="flex-shrink-0 relative">
                <div className="w-5 h-5 rounded-full bg-gradient-to-br from-orange-500 to-red-600 shadow-lg group-hover:scale-125 transition-transform"></div>
                <div className="absolute top-5 left-1/2 transform -translate-x-1/2 w-0.5 h-20 bg-gradient-to-b from-orange-300 to-transparent"></div>
              </div>
              <div className="flex-1">
                <div className="inline-block px-3 py-1 bg-orange-100 text-orange-700 rounded-lg text-sm font-bold mb-2">
                  4 Mei
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  Seleksi 3 - Finalist
                </h3>
                <p className="text-slate-600">Pitching ke juri</p>
              </div>
            </div>
            <div className="flex items-start gap-6 group">
              <div className="flex-shrink-0">
                <div className="w-5 h-5 rounded-full bg-gradient-to-br from-orange-500 to-red-600 shadow-lg group-hover:scale-125 transition-transform"></div>
              </div>
              <div className="flex-1">
                <div className="inline-block px-3 py-1 bg-orange-100 text-orange-700 rounded-lg text-sm font-bold mb-2">
                  11 Mei
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  Hari H - Presentasi Proyek
                </h3>
                <p className="text-slate-600">
                  Acara offline di TUSR UBM Ancol
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-gradient-to-br from-slate-900 via-slate-800 to-cyan-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
            Siap Berkompetisi?
          </h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Daftarkan tim Anda sekarang dan ciptakan game edukatif terbaik
            tentang budaya Indonesia!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/daftar"
              className="group px-8 py-4 bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-full font-bold text-lg hover:from-orange-500 hover:to-red-500 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 inline-flex items-center justify-center gap-2"
            >
              Daftar Sekarang
              <svg
                className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </Link>
            <button
              onClick={() => window.history.back()}
              className="px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white rounded-full font-bold text-lg hover:bg-white/20 transition-all duration-300 hover:scale-105"
            >
              Kembali
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
