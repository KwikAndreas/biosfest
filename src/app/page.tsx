import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-cyan-900 text-white pt-32 pb-24 px-4">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-500 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center">
            <div className="inline-block mb-4">
              <span className="px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-300 text-sm font-semibold backdrop-blur-sm">
                Seminar & Kompetisi Nasional 2026
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">
              <span className="bg-gradient-to-r from-cyan-300 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
                BIOSFEST 2026
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-4 text-slate-200 font-medium">
              Seminar dan Lomba Nasional Teknologi Informasi
            </p>
            <p className="text-base md:text-lg mb-10 max-w-2xl mx-auto text-slate-300 leading-relaxed">
              Bergabunglah dalam kompetisi teknologi terbesar tahun ini!
              Tunjukkan kreativitas dan inovasimu dalam UI/UX Design dan
              Pemrograman Game.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/daftar"
                className="group px-8 py-4 bg-gradient-to-r from-cyan-600 to-teal-600 text-white rounded-full font-bold text-lg hover:from-cyan-500 hover:to-teal-500 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 inline-flex items-center justify-center gap-2"
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
              <Link
                href="/login"
                className="px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white rounded-full font-bold text-lg hover:bg-white/20 transition-all duration-300 hover:scale-105"
              >
                Login Peserta
              </Link>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-slate-50 to-transparent"></div>
      </section>

      {/* Info Section */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group text-center p-8 bg-white rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-300 border border-slate-100 hover:border-cyan-200 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">
                Periode Lomba
              </h3>
              <p className="text-slate-600 font-semibold text-lg">
                6 Maret - 11 Mei 2026
              </p>
            </div>

            <div className="group text-center p-8 bg-white rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-300 border border-slate-100 hover:border-orange-200 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">
                Tim Maksimal
              </h3>
              <p className="text-slate-600 font-semibold text-lg">
                5 orang per tim
              </p>
            </div>

            <div className="group text-center p-8 bg-white rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-300 border border-slate-100 hover:border-teal-200 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">
                Lokasi Final
              </h3>
              <p className="text-slate-600 font-semibold text-lg">
                TUSR UBM Ancol, Jakarta
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Competition Categories */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-slate-900">
              Kategori Lomba
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Pilih kategori yang sesuai dengan keahlian dan minatmu
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="group relative bg-gradient-to-br from-cyan-50 via-white to-teal-50 rounded-3xl shadow-md hover:shadow-2xl transition-all duration-300 p-8 border-2 border-cyan-100 hover:border-cyan-300 overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-200/20 rounded-full blur-3xl group-hover:w-40 group-hover:h-40 transition-all duration-500"></div>
              <div className="relative z-10">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-cyan-500 to-teal-600 rounded-2xl mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <svg
                    className="w-7 h-7 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                    />
                  </svg>
                </div>
                <div className="mb-2">
                  <span className="inline-block px-3 py-1 bg-cyan-100 text-cyan-700 rounded-full text-sm font-semibold mb-3">
                    SMA/SMK
                  </span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-slate-900">
                  UI/UX Design
                </h3>
                <p className="text-slate-700 mb-6 leading-relaxed">
                  Buat desain user interface dan user experience menggunakan
                  Figma. Tunjukkan kreativitasmu dalam merancang aplikasi yang
                  user-friendly dan menarik!
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg
                      className="w-5 h-5 text-teal-600 mr-3 mt-0.5 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-slate-700 font-medium">
                      Untuk siswa SMA/SMK aktif
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-5 h-5 text-teal-600 mr-3 mt-0.5 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-slate-700 font-medium">
                      Tool: Figma
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-orange-50 via-white to-red-50 rounded-3xl shadow-md hover:shadow-2xl transition-all duration-300 p-8 border-2 border-orange-100 hover:border-orange-300 overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-orange-200/20 rounded-full blur-3xl group-hover:w-40 group-hover:h-40 transition-all duration-500"></div>
              <div className="relative z-10">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <svg
                    className="w-7 h-7 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
                    />
                  </svg>
                </div>
                <div className="mb-2">
                  <span className="inline-block px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-semibold mb-3">
                    Mahasiswa
                  </span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-slate-900">
                  Pemrograman Game
                </h3>
                <p className="text-slate-700 mb-6 leading-relaxed">
                  Kembangkan game inovatif dengan teknologi pilihanmu. Bebas
                  menggunakan game engine dan tech stack apapun!
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg
                      className="w-5 h-5 text-red-600 mr-3 mt-0.5 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-slate-700 font-medium">
                      Untuk Mahasiswa aktif
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-5 h-5 text-red-600 mr-3 mt-0.5 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-slate-700 font-medium">
                      Bebas memilih game engine & tech stack
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-purple-50 via-white to-indigo-50 rounded-3xl shadow-md hover:shadow-2xl transition-all duration-300 p-8 border-2 border-purple-100 hover:border-purple-300 overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-200/20 rounded-full blur-3xl group-hover:w-40 group-hover:h-40 transition-all duration-500"></div>
              <div className="relative z-10">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <svg
                    className="w-7 h-7 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                    />
                  </svg>
                </div>
                <div className="mb-2">
                  <span className="inline-block px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold mb-3">
                    Mahasiswa
                  </span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-slate-900">
                  Pemrograman Web
                </h3>
                <p className="text-slate-700 mb-6 leading-relaxed">
                  Kembangkan website interaktif dan responsif dengan teknologi
                  web modern. Tunjukkan kemampuanmu dalam front-end dan back-end
                  development!
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg
                      className="w-5 h-5 text-purple-600 mr-3 mt-0.5 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-slate-700 font-medium">
                      Untuk Mahasiswa aktif
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-5 h-5 text-purple-600 mr-3 mt-0.5 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-slate-700 font-medium">
                      Bebas memilih framework & tech stack
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-slate-900">
              Timeline Lomba
            </h2>
            <p className="text-lg text-slate-600">
              Catat jadwal penting kompetisi
            </p>
          </div>
          <div className="space-y-6">
            <div className="flex items-start group">
              <div className="flex-shrink-0 w-36 text-right pr-8">
                <div className="inline-block px-3 py-1 bg-cyan-100 text-cyan-700 rounded-lg text-sm font-bold">
                  6 Maret
                </div>
              </div>
              <div className="flex-shrink-0 relative">
                <div className="w-5 h-5 rounded-full bg-gradient-to-br from-cyan-500 to-teal-600 shadow-lg group-hover:scale-125 transition-transform duration-300"></div>
                <div className="absolute top-5 left-1/2 transform -translate-x-1/2 w-0.5 h-20 bg-gradient-to-b from-cyan-300 to-transparent"></div>
              </div>
              <div className="flex-1 pl-8 pb-8">
                <h3 className="text-xl font-bold mb-2 text-slate-900">
                  Pendaftaran
                </h3>
                <p className="text-slate-600">Open Registration & Promotion</p>
              </div>
            </div>

            <div className="flex items-start group">
              <div className="flex-shrink-0 w-36 text-right pr-8">
                <div className="inline-block px-3 py-1 bg-cyan-100 text-cyan-700 rounded-lg text-sm font-bold">
                  4 April
                </div>
              </div>
              <div className="flex-shrink-0 relative">
                <div className="w-5 h-5 rounded-full bg-gradient-to-br from-cyan-500 to-teal-600 shadow-lg group-hover:scale-125 transition-transform duration-300"></div>
                <div className="absolute top-5 left-1/2 transform -translate-x-1/2 w-0.5 h-20 bg-gradient-to-b from-cyan-300 to-transparent"></div>
              </div>
              <div className="flex-1 pl-8 pb-8">
                <h3 className="text-xl font-bold mb-2 text-slate-900">
                  Technical Meeting
                </h3>
                <p className="text-slate-600">Hybrid Technical Meeting</p>
              </div>
            </div>

            <div className="flex items-start group">
              <div className="flex-shrink-0 w-36 text-right pr-8">
                <div className="inline-block px-3 py-1 bg-teal-100 text-teal-700 rounded-lg text-sm font-bold">
                  13 April
                </div>
              </div>
              <div className="flex-shrink-0 relative">
                <div className="w-5 h-5 rounded-full bg-gradient-to-br from-teal-500 to-green-600 shadow-lg group-hover:scale-125 transition-transform duration-300"></div>
                <div className="absolute top-5 left-1/2 transform -translate-x-1/2 w-0.5 h-20 bg-gradient-to-b from-teal-300 to-transparent"></div>
              </div>
              <div className="flex-1 pl-8 pb-8">
                <h3 className="text-xl font-bold mb-2 text-slate-900">
                  Seleksi 1
                </h3>
                <p className="text-slate-600">Pengerjaan dan submit proposal</p>
              </div>
            </div>

            <div className="flex items-start group">
              <div className="flex-shrink-0 w-36 text-right pr-8">
                <div className="inline-block px-3 py-1 bg-teal-100 text-teal-700 rounded-lg text-sm font-bold">
                  20 April
                </div>
              </div>
              <div className="flex-shrink-0 relative">
                <div className="w-5 h-5 rounded-full bg-gradient-to-br from-teal-500 to-green-600 shadow-lg group-hover:scale-125 transition-transform duration-300"></div>
                <div className="absolute top-5 left-1/2 transform -translate-x-1/2 w-0.5 h-20 bg-gradient-to-b from-teal-300 to-transparent"></div>
              </div>
              <div className="flex-1 pl-8 pb-8">
                <h3 className="text-xl font-bold mb-2 text-slate-900">
                  Seleksi 2 - Semi Finalist
                </h3>
                <p className="text-slate-600">
                  Pengerjaan mobile app integrated with AI
                </p>
              </div>
            </div>

            <div className="flex items-start group">
              <div className="flex-shrink-0 w-36 text-right pr-8">
                <div className="inline-block px-3 py-1 bg-orange-100 text-orange-700 rounded-lg text-sm font-bold">
                  4 Mei
                </div>
              </div>
              <div className="flex-shrink-0 relative">
                <div className="w-5 h-5 rounded-full bg-gradient-to-br from-orange-500 to-red-600 shadow-lg group-hover:scale-125 transition-transform duration-300"></div>
                <div className="absolute top-5 left-1/2 transform -translate-x-1/2 w-0.5 h-20 bg-gradient-to-b from-orange-300 to-transparent"></div>
              </div>
              <div className="flex-1 pl-8 pb-8">
                <h3 className="text-xl font-bold mb-2 text-slate-900">
                  Seleksi 3 - Finalist
                </h3>
                <p className="text-slate-600">Presentasi / pitching ke juri</p>
              </div>
            </div>

            <div className="flex items-start group">
              <div className="flex-shrink-0 w-36 text-right pr-8">
                <div className="inline-block px-3 py-1 bg-orange-100 text-orange-700 rounded-lg text-sm font-bold">
                  11 Mei
                </div>
              </div>
              <div className="flex-shrink-0">
                <div className="w-5 h-5 rounded-full bg-gradient-to-br from-orange-500 to-red-600 shadow-lg group-hover:scale-125 transition-transform duration-300"></div>
              </div>
              <div className="flex-1 pl-8">
                <h3 className="text-xl font-bold mb-2 text-slate-900">
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

      {/* CTA Section */}
      <section className="relative py-24 px-4 overflow-hidden bg-gradient-to-br from-slate-900 via-cyan-900 to-teal-900 text-white">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-cyan-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-72 h-72 bg-teal-500 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
            Siap Berpartisipasi?
          </h2>
          <p className="text-xl mb-10 text-slate-200 leading-relaxed">
            Daftarkan timmu sekarang dan jadilah bagian dari BIOSFEST 2026!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/daftar"
              className="group px-8 py-4 bg-gradient-to-r from-cyan-600 to-teal-600 text-white rounded-full font-bold text-lg hover:from-cyan-500 hover:to-teal-500 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 inline-flex items-center justify-center gap-2"
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
            <a
              href="#"
              className="px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white rounded-full font-bold text-lg hover:bg-white/20 transition-all duration-300 hover:scale-105"
            >
              Lihat Guidebook
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
