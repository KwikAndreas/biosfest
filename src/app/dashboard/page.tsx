"use client";

import Link from "next/link";

export default function DashboardPage() {
  // TODO: Get user data from authentication
  const userData = {
    nama: "John Doe",
    kategori: "Mahasiswa",
    tim: "Team BIOSFEST 2025",
  };

  return (
    <div className="min-h-screen bg-gray-50 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Dashboard Peserta
          </h1>
          <p className="text-gray-600">Selamat datang, {userData.nama}!</p>
          <div className="mt-4 p-4 bg-blue-50 rounded-lg">
            <p className="text-sm">
              <strong>Tim:</strong> {userData.tim} | <strong>Kategori:</strong>{" "}
              {userData.kategori}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Submit Proposal */}
          <Link href="/dashboard/proposal">
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition cursor-pointer border-2 border-transparent hover:border-blue-500">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Submit Proposal
              </h3>
              <p className="text-gray-600 text-sm">
                Upload proposal dalam format PDF
              </p>
              <p className="text-xs text-gray-500 mt-2">
                Deadline: 13 April 2025
              </p>
            </div>
          </Link>

          {/* Submit Penyisihan */}
          <Link href="/dashboard/penyisihan">
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition cursor-pointer border-2 border-transparent hover:border-blue-500">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Submit Penyisihan
              </h3>
              <p className="text-gray-600 text-sm">
                Upload link Figma/Drive + Video YouTube
              </p>
              <p className="text-xs text-gray-500 mt-2">
                Deadline: 20 April 2025
              </p>
            </div>
          </Link>

          {/* Submit Final */}
          <Link href="/dashboard/final">
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition cursor-pointer border-2 border-transparent hover:border-blue-500">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-purple-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Submit Final
              </h3>
              <p className="text-gray-600 text-sm">
                Upload PPT presentasi final
              </p>
              <p className="text-xs text-gray-500 mt-2">Deadline: 4 Mei 2025</p>
            </div>
          </Link>
        </div>

        {/* Timeline Section */}
        <div className="mt-8 bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Timeline Lomba
          </h2>
          <div className="space-y-4">
            <div className="flex items-start space-x-4">
              <div className="w-24 flex-shrink-0 text-sm font-semibold text-gray-500">
                6 Maret
              </div>
              <div className="flex-1 pb-4 border-l-2 border-blue-500 pl-4">
                <h4 className="font-bold text-gray-900">Pendaftaran</h4>
                <p className="text-sm text-gray-600">
                  Open Registration & Promotion
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-24 flex-shrink-0 text-sm font-semibold text-gray-500">
                4 April
              </div>
              <div className="flex-1 pb-4 border-l-2 border-blue-500 pl-4">
                <h4 className="font-bold text-gray-900">Technical Meeting</h4>
                <p className="text-sm text-gray-600">
                  Hybrid Technical Meeting
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-24 flex-shrink-0 text-sm font-semibold text-gray-500">
                13 April
              </div>
              <div className="flex-1 pb-4 border-l-2 border-green-500 pl-4">
                <h4 className="font-bold text-gray-900">Seleksi 1</h4>
                <p className="text-sm text-gray-600">Pengerjaan proposal</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-24 flex-shrink-0 text-sm font-semibold text-gray-500">
                20 April
              </div>
              <div className="flex-1 pb-4 border-l-2 border-green-500 pl-4">
                <h4 className="font-bold text-gray-900">
                  Seleksi 2 - Semi Finalist
                </h4>
                <p className="text-sm text-gray-600">
                  Pengerjaan mobile app integrated with AI
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-24 flex-shrink-0 text-sm font-semibold text-gray-500">
                4 Mei
              </div>
              <div className="flex-1 pb-4 border-l-2 border-purple-500 pl-4">
                <h4 className="font-bold text-gray-900">
                  Seleksi 3 - Finalist
                </h4>
                <p className="text-sm text-gray-600">
                  Presentasi / pitching ke juri
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-24 flex-shrink-0 text-sm font-semibold text-gray-500">
                11 Mei
              </div>
              <div className="flex-1 border-l-2 border-purple-500 pl-4">
                <h4 className="font-bold text-gray-900">
                  Hari H - Presentasi Proyek
                </h4>
                <p className="text-sm text-gray-600">
                  Acara offline di TUSR UBM Ancol
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
