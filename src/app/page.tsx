import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-linear-to-br from-blue-600 via-blue-700 to-indigo-900 text-white pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              BIOSFEST 2025
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Seminar dan Lomba Nasional Teknologi Informasi
            </p>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Bergabunglah dalam kompetisi teknologi terbesar tahun ini!
              Tunjukkan kreativitas dan inovasimu dalam UI/UX Design dan Web
              Development.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/daftar"
                className="px-8 py-4 bg-white text-blue-600 rounded-full font-bold text-lg hover:bg-gray-100 transition"
              >
                Daftar Sekarang
              </Link>
              <Link
                href="/login"
                className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-bold text-lg hover:bg-white/10 transition"
              >
                Login Peserta
              </Link>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-linear-to-t from-white to-transparent"></div>
      </section>

      {/* Info Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
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
              <h3 className="text-xl font-bold mb-2 text-gray-900">
                Periode Lomba
              </h3>
              <p className="text-gray-700 font-medium">6 Maret - 11 Mei 2025</p>
            </div>

            <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
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
              <h3 className="text-xl font-bold mb-2 text-gray-900">
                Tim Maksimal
              </h3>
              <p className="text-gray-700 font-medium">5 orang per tim</p>
            </div>

            <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
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
              <h3 className="text-xl font-bold mb-2 text-gray-900">
                Lokasi Final
              </h3>
              <p className="text-gray-700 font-medium">
                TUSR UBM Ancol, Jakarta
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Competition Categories */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            Kategori Lomba
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-linear-to-br from-blue-50 to-blue-100 rounded-2xl shadow-lg p-8 border-2 border-blue-200">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
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
                    d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                SMA/SMK - UI/UX Design
              </h3>
              <p className="text-gray-800 mb-4 font-medium">
                Buat desain user interface dan user experience menggunakan
                Figma. Tunjukkan kreativitasmu dalam merancang aplikasi yang
                user-friendly dan menarik!
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-green-500 mr-2 mt-0.5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Tool: Figma
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-green-500 mr-2 mt-0.5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Untuk siswa SMA/SMK aktif
                </li>
              </ul>
            </div>

            <div className="bg-linear-to-br from-purple-50 to-purple-100 rounded-2xl shadow-lg p-8 border-2 border-purple-200">
              <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
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
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                Mahasiswa - Web Development
              </h3>
              <p className="text-gray-800 mb-4 font-medium">
                Kembangkan aplikasi web inovatif dengan teknologi pilihanmu.
                Bebas menggunakan framework dan tech stack apapun!
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-green-500 mr-2 mt-0.5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Bebas memilih tech stack
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-green-500 mr-2 mt-0.5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Untuk mahasiswa aktif
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            Timeline Lomba
          </h2>
          <div className="space-y-8">
            <div className="flex items-start">
              <div className="flex-shrink-0 w-32 text-right pr-8">
                <div className="text-sm font-semibold text-gray-700">
                  6 Maret
                </div>
              </div>
              <div className="flex-shrink-0 w-4 h-4 rounded-full bg-blue-600 mt-1 relative">
                <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-0.5 h-20 bg-blue-300"></div>
              </div>
              <div className="flex-1 pl-8 pb-8">
                <h3 className="text-xl font-bold mb-1 text-gray-900">
                  Pendaftaran
                </h3>
                <p className="text-gray-700">Open Registration & Promotion</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 w-32 text-right pr-8">
                <div className="text-sm font-semibold text-gray-700">
                  4 April
                </div>
              </div>
              <div className="flex-shrink-0 w-4 h-4 rounded-full bg-blue-600 mt-1 relative">
                <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-0.5 h-20 bg-blue-300"></div>
              </div>
              <div className="flex-1 pl-8 pb-8">
                <h3 className="text-xl font-bold mb-1 text-gray-900">
                  Technical Meeting
                </h3>
                <p className="text-gray-700">Hybrid Technical Meeting</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 w-32 text-right pr-8">
                <div className="text-sm font-semibold text-gray-700">
                  13 April
                </div>
              </div>
              <div className="flex-shrink-0 w-4 h-4 rounded-full bg-green-600 mt-1 relative">
                <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-0.5 h-20 bg-green-300"></div>
              </div>
              <div className="flex-1 pl-8 pb-8">
                <h3 className="text-xl font-bold mb-1 text-gray-900">
                  Seleksi 1
                </h3>
                <p className="text-gray-700">Pengerjaan dan submit proposal</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 w-32 text-right pr-8">
                <div className="text-sm font-semibold text-gray-700">
                  20 April
                </div>
              </div>
              <div className="flex-shrink-0 w-4 h-4 rounded-full bg-green-600 mt-1 relative">
                <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-0.5 h-20 bg-green-300"></div>
              </div>
              <div className="flex-1 pl-8 pb-8">
                <h3 className="text-xl font-bold mb-1 text-gray-900">
                  Seleksi 2 - Semi Finalist
                </h3>
                <p className="text-gray-700">
                  Pengerjaan mobile app integrated with AI
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 w-32 text-right pr-8">
                <div className="text-sm font-semibold text-gray-700">4 Mei</div>
              </div>
              <div className="flex-shrink-0 w-4 h-4 rounded-full bg-purple-600 mt-1 relative">
                <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-0.5 h-20 bg-purple-300"></div>
              </div>
              <div className="flex-1 pl-8 pb-8">
                <h3 className="text-xl font-bold mb-1 text-gray-900">
                  Seleksi 3 - Finalist
                </h3>
                <p className="text-gray-700">Presentasi / pitching ke juri</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 w-32 text-right pr-8">
                <div className="text-sm font-semibold text-gray-700">
                  11 Mei
                </div>
              </div>
              <div className="flex-shrink-0 w-4 h-4 rounded-full bg-purple-600 mt-1"></div>
              <div className="flex-1 pl-8">
                <h3 className="text-xl font-bold mb-1 text-gray-900">
                  Hari H - Presentasi Proyek
                </h3>
                <p className="text-gray-700">Acara offline di TUSR UBM Ancol</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-linear-to-r from-blue-600 to-indigo-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Siap Berpartisipasi?</h2>
          <p className="text-xl mb-8">
            Daftarkan timmu sekarang dan jadilah bagian dari BIOSFEST 2025!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/daftar"
              className="px-8 py-4 bg-white text-blue-600 rounded-full font-bold text-lg hover:bg-gray-100 transition"
            >
              Daftar Sekarang
            </Link>
            <a
              href="#"
              className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-bold text-lg hover:bg-white/10 transition"
            >
              Lihat Guidebook
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
