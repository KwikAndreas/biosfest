"use client";

import { useState } from "react";

export default function DaftarPage() {
  const [formData, setFormData] = useState({
    namaKetua: "",
    nimKetua: "",
    namaAnggota: ["", "", "", ""],
    nimAnggota: ["", "", "", ""],
    kategori: "sma",
    asalSekolah: "",
    email: "",
    whatsapp: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Pendaftaran:", formData);
    setIsSubmitted(true);
  };

  const handleAnggotaChange = (index: number, value: string) => {
    const filteredValue = value.replace(/[^a-zA-Z\s]/g, '');
    const newAnggota = [...formData.namaAnggota];
    newAnggota[index] = filteredValue;
    setFormData({ ...formData, namaAnggota: newAnggota });
  };

  const handleNimAnggotaChange = (index: number, value: string) => {
    const newNimAnggota = [...formData.nimAnggota];
    newNimAnggota[index] = value;
    setFormData({ ...formData, nimAnggota: newNimAnggota });
  };

  // Show success modal if submitted
  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-cyan-50 to-teal-50 py-20 px-4 flex items-center justify-center">
        <div className="max-w-2xl w-full mx-auto bg-white rounded-3xl shadow-2xl border border-slate-100 p-8 md:p-12">
          <div className="text-center">
            {/* Success Icon */}
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full mb-6 shadow-lg">
              <svg
                className="w-10 h-10 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>

            <h1 className="text-3xl font-bold text-slate-900 mb-4">
              Pendaftaran Berhasil!
            </h1>

            <div className="bg-cyan-50 border border-cyan-200 rounded-xl p-6 mb-6">
              <h2 className="text-lg font-bold text-slate-900 mb-3">
                📋 Langkah Selanjutnya:
              </h2>
              <div className="text-left space-y-3 text-slate-700">
                <div className="flex items-start gap-3">
                  <span className="inline-flex items-center justify-center w-6 h-6 bg-cyan-600 text-white rounded-full text-sm font-bold flex-shrink-0 mt-0.5">
                    1
                  </span>
                  <p className="text-sm leading-relaxed">
                    <span className="font-semibold">
                      Verifikasi Pembayaran:
                    </span>{" "}
                    Tim panitia akan memverifikasi bukti pembayaran Anda dalam{" "}
                    <span className="font-bold">1-2 hari kerja</span>.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="inline-flex items-center justify-center w-6 h-6 bg-cyan-600 text-white rounded-full text-sm font-bold flex-shrink-0 mt-0.5">
                    2
                  </span>
                  <p className="text-sm leading-relaxed">
                    <span className="font-semibold">
                      Pengiriman Kredensial:
                    </span>{" "}
                    Setelah pembayaran terverifikasi, kredensial akun Anda akan
                    dikirim ke:
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="bg-gradient-to-br from-purple-50 to-indigo-50 border border-purple-200 rounded-xl p-5">
                <div className="flex items-center gap-3 mb-2">
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
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <h3 className="font-bold text-slate-900">Email</h3>
                </div>
                <p className="text-sm text-slate-600 break-all">
                  {formData.email}
                </p>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-xl p-5">
                <div className="flex items-center gap-3 mb-2">
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
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                    />
                  </svg>
                  <h3 className="font-bold text-slate-900">WhatsApp</h3>
                </div>
                <p className="text-sm text-slate-600">{formData.whatsapp}</p>
              </div>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-6">
              <div className="flex items-start gap-3">
                <svg
                  className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5"
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
                <div className="text-left">
                  <h3 className="font-bold text-slate-900 mb-2">
                    🔐 Kredensial Akun Anda:
                  </h3>
                  <ul className="text-sm text-slate-700 space-y-1">
                    <li>
                      • <span className="font-semibold">Username:</span> 12-16
                      digit angka (auto-generated)
                    </li>
                    <li>
                      • <span className="font-semibold">Password:</span>{" "}
                      Password random (dapat direset setelah login pertama)
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={() => setIsSubmitted(false)}
                className="px-6 py-3 bg-gradient-to-r from-cyan-600 to-teal-600 text-white rounded-xl font-semibold hover:from-cyan-500 hover:to-teal-500 transition-all duration-300 shadow-md hover:shadow-lg"
              >
                Daftar Tim Lain
              </button>
              <a
                href="/"
                className="px-6 py-3 bg-slate-100 text-slate-700 rounded-xl font-semibold hover:bg-slate-200 transition-all duration-300"
              >
                Kembali ke Beranda
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-cyan-50 to-teal-50 py-20 px-4">
      <div className="max-w-2xl mx-auto bg-white rounded-3xl shadow-xl border border-slate-100 p-8 md:p-12">
        <div className="text-center mb-8">
          <div className="inline-block mb-4">
            <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto shadow-lg">
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
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </div>
          </div>
          <h1 className="text-3xl font-bold text-slate-900 mb-3">
            Formulir Pendaftaran BIOSFEST 2026
          </h1>
          <p className="text-slate-700">
            Biaya Pendaftaran:{" "}
            <span className="font-bold bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">
              Rp 100.000
            </span>
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-slate-900 mb-2">
              Kategori Lomba *
            </label>
            <select
              value={formData.kategori}
              onChange={(e) =>
                setFormData({ ...formData, kategori: e.target.value })
              }
              className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none bg-white text-slate-900 font-medium transition hover:border-slate-300"
              required
            >
              <option value="sma">SMA/SMK - UI/UX Design dengan Figma</option>
              <option value="mahasiswa-webdev">
                Mahasiswa - Web Development
              </option>
              <option value="mahasiswa-game">
                Mahasiswa - Pemrograman Game
              </option>
            </select>
          </div>

          {/* Nama Ketua Tim */}
          <div>
            <label className="block text-sm font-semibold text-slate-900 mb-2">
              Nama Lengkap Ketua Tim *
            </label>
            <input
              type="text"
              value={formData.namaKetua}
              onChange={(e) => {
                const value = e.target.value.replace(/[^a-zA-Z\s]/g, '');
                setFormData({ ...formData, namaKetua: value });
              }}
              pattern="[a-zA-Z\s]+"
              className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none bg-white text-slate-900 placeholder:text-slate-400 transition hover:border-slate-300"
              placeholder="Sesuai KTP/Identitas"
              required
            />
          </div>

          {/* NIM/NISN Ketua Tim */}
          <div>
            <label className="block text-sm font-semibold text-slate-900 mb-2">
              NIM/NISN Ketua Tim *
            </label>
            <input
              type="number"
              value={formData.nimKetua}
              onChange={(e) =>
                setFormData({ ...formData, nimKetua: e.target.value })
              }
              className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none bg-white text-slate-900 placeholder:text-slate-400 transition hover:border-slate-300"
              placeholder={
                formData.kategori === "sma"
                  ? "Nomor Induk Siswa"
                  : "Nomor Induk Mahasiswa"
              }
              required
            />
          </div>

          {/* Anggota Tim */}
          <div>
            <label className="block text-sm font-semibold text-slate-900 mb-3">
              Anggota Tim (Maksimal 4 orang, opsional)
            </label>
            <div className="space-y-4">
              {[0, 1, 2, 3].map((index) => (
                <div
                  key={index}
                  className="bg-slate-50 p-4 rounded-xl border border-slate-200"
                >
                  <p className="text-xs font-bold text-slate-600 mb-3">
                    Anggota {index + 1}
                  </p>
                  <div className="space-y-2">
                    <input
                      type="text"
                      value={formData.namaAnggota[index]}
                      onChange={(e) =>
                        handleAnggotaChange(index, e.target.value)
                      }
                      pattern="[a-zA-Z\s]*"
                      className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none bg-white text-slate-900 placeholder:text-slate-400 transition hover:border-slate-300"
                      placeholder="Nama Lengkap"
                    />
                    <input
                      type="number"
                      value={formData.nimAnggota[index]}
                      onChange={(e) =>
                        handleNimAnggotaChange(index, e.target.value)
                      }
                      className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none bg-white text-slate-900 placeholder:text-slate-400 transition hover:border-slate-300"
                      placeholder={formData.kategori === "sma" ? "NISN" : "NIM"}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Asal Sekolah/Universitas */}
          <div>
            <label className="block text-sm font-semibold text-slate-900 mb-2">
              Asal Sekolah/Universitas *
            </label>
            <input
              type="text"
              value={formData.asalSekolah}
              onChange={(e) =>
                setFormData({ ...formData, asalSekolah: e.target.value })
              }
              className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none bg-white text-slate-900 placeholder:text-slate-400 transition hover:border-slate-300"
              placeholder="Nama sekolah atau universitas"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-semibold text-slate-900 mb-2">
              Email Aktif *
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none bg-white text-slate-900 placeholder:text-slate-400 transition hover:border-slate-300"
              placeholder="email@example.com"
              required
            />
          </div>

          {/* WhatsApp */}
          <div>
            <label className="block text-sm font-semibold text-slate-900 mb-2">
              Nomor WhatsApp *
            </label>
            <input
              type="number"
              value={formData.whatsapp}
              onChange={(e) =>
                setFormData({ ...formData, whatsapp: e.target.value })
              }
              className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none bg-white text-slate-900 placeholder:text-slate-400 transition hover:border-slate-300"
              placeholder="08123456789"
              required
            />
          </div>

          {/* File Upload Placeholders */}
          <div className="space-y-4 p-5 bg-slate-50 rounded-xl border border-slate-200">
            <h3 className="text-base font-bold text-slate-900 mb-4">
              Dokumen Pendaftaran
            </h3>

            <div>
              <label className="block text-sm font-semibold text-slate-900 mb-2">
                Pas Foto (Background Biru/Merah) *
              </label>
              <input
                type="file"
                accept="image/*"
                className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none bg-white text-slate-900 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-gradient-to-r file:from-cyan-600 file:to-teal-600 file:text-white file:font-semibold hover:file:from-cyan-500 hover:file:to-teal-500 file:cursor-pointer transition hover:border-slate-300"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-900 mb-2">
                Foto Kartu Pelajar/KTM *
              </label>
              <input
                type="file"
                accept="image/*"
                className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none bg-white text-slate-900 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-gradient-to-r file:from-cyan-600 file:to-teal-600 file:text-white file:font-semibold hover:file:from-cyan-500 hover:file:to-teal-500 file:cursor-pointer transition hover:border-slate-300"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-900 mb-2">
                Bukti Pembayaran (Screenshot) *
              </label>
              <input
                type="file"
                accept="image/*"
                className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none bg-white text-slate-900 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-gradient-to-r file:from-cyan-600 file:to-teal-600 file:text-white file:font-semibold hover:file:from-cyan-500 hover:file:to-teal-500 file:cursor-pointer transition hover:border-slate-300"
                required
              />
            </div>
          </div>

          {/* Syarat & Ketentuan */}
          <div className="bg-amber-50 p-4 rounded-xl border border-amber-200">
            <label className="flex items-start space-x-3 cursor-pointer">
              <input
                type="checkbox"
                required
                className="mt-1 w-4 h-4 text-cyan-600 border-slate-300 rounded focus:ring-2 focus:ring-cyan-500"
              />
              <span className="text-sm text-slate-700">
                Saya menyetujui{" "}
                <a
                  href="#"
                  className="text-cyan-600 font-semibold hover:text-cyan-700 hover:underline"
                >
                  Syarat & Ketentuan
                </a>{" "}
                yang berlaku. Karya yang saya kirimkan adalah orisinal dan biaya
                pendaftaran tidak dapat dikembalikan.
              </span>
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-cyan-600 to-teal-600 text-white py-3 rounded-xl font-semibold hover:from-cyan-500 hover:to-teal-500 transition-all duration-300 shadow-md hover:shadow-lg"
          >
            Daftar Sekarang
          </button>
        </form>

        <div className="mt-6 p-5 bg-gradient-to-r from-cyan-50 to-teal-50 rounded-xl border border-cyan-200">
          <div className="flex items-start gap-3">
            <svg
              className="w-6 h-6 text-cyan-600 flex-shrink-0 mt-0.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <div>
              <p className="text-sm font-bold text-slate-900 mb-2">
                ℹ️ Informasi Penting
              </p>
              <ul className="text-sm text-slate-700 space-y-1">
                <li>
                  • Setelah pembayaran{" "}
                  <span className="font-semibold">terverifikasi</span>,
                  kredensial akun akan dikirim ke email dan WhatsApp Anda
                </li>
                <li>
                  • Username:{" "}
                  <span className="font-semibold">12-16 digit angka</span>{" "}
                  (auto-generated)
                </li>
                <li>
                  • Password: <span className="font-semibold">Random</span>{" "}
                  (dapat direset setelah login pertama)
                </li>
                <li>
                  • Verifikasi memakan waktu{" "}
                  <span className="font-semibold">1-2 hari kerja</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
