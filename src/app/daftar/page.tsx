"use client";

import { useState } from "react";

export default function DaftarPage() {
  const [formData, setFormData] = useState({
    namaKetua: "",
    namaAnggota: ["", "", "", ""],
    kategori: "sma",
    asalSekolah: "",
    email: "",
    whatsapp: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement registration logic
    console.log("Pendaftaran:", formData);
    alert(
      "Terima kasih telah mendaftar! Anda akan menerima email konfirmasi beserta username dan password."
    );
  };

  const handleAnggotaChange = (index: number, value: string) => {
    const newAnggota = [...formData.namaAnggota];
    newAnggota[index] = value;
    setFormData({ ...formData, namaAnggota: newAnggota });
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 to-indigo-100 py-20 px-4">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl p-8 md:p-12">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-3">
            Formulir Pendaftaran BIOSFEST 2025
          </h1>
          <p className="text-gray-700">
            Biaya Pendaftaran:{" "}
            <span className="font-bold text-blue-600">Rp 100.000</span>
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Kategori */}
          <div>
            <label className="block text-sm font-semibold text-gray-900 mb-2">
              Kategori Lomba *
            </label>
            <select
              value={formData.kategori}
              onChange={(e) =>
                setFormData({ ...formData, kategori: e.target.value })
              }
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none bg-white text-gray-900 font-medium transition"
              required
            >
              <option value="sma">SMA/SMK - UI/UX Design dengan Figma</option>
              <option value="mahasiswa">Mahasiswa - Web Development</option>
            </select>
          </div>

          {/* Nama Ketua Tim */}
          <div>
            <label className="block text-sm font-semibold text-gray-900 mb-2">
              Nama Lengkap Ketua Tim *
            </label>
            <input
              type="text"
              value={formData.namaKetua}
              onChange={(e) =>
                setFormData({ ...formData, namaKetua: e.target.value })
              }
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none bg-white text-gray-900 placeholder:text-gray-400 transition"
              placeholder="Sesuai KTP/Identitas"
              required
            />
          </div>

          {/* Anggota Tim */}
          <div>
            <label className="block text-sm font-semibold text-gray-900 mb-3">
              Nama Anggota Tim (Maksimal 4 orang, opsional)
            </label>
            <div className="space-y-2">
              {[0, 1, 2, 3].map((index) => (
                <input
                  key={index}
                  type="text"
                  value={formData.namaAnggota[index]}
                  onChange={(e) => handleAnggotaChange(index, e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none bg-white text-gray-900 placeholder:text-gray-400 transition"
                  placeholder={`Anggota ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Asal Sekolah/Universitas */}
          <div>
            <label className="block text-sm font-semibold text-gray-900 mb-2">
              Asal Sekolah/Universitas *
            </label>
            <input
              type="text"
              value={formData.asalSekolah}
              onChange={(e) =>
                setFormData({ ...formData, asalSekolah: e.target.value })
              }
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none bg-white text-gray-900 placeholder:text-gray-400 transition"
              placeholder="Nama sekolah atau universitas"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-semibold text-gray-900 mb-2">
              Email Aktif *
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none bg-white text-gray-900 placeholder:text-gray-400 transition"
              placeholder="email@example.com"
              required
            />
          </div>

          {/* WhatsApp */}
          <div>
            <label className="block text-sm font-semibold text-gray-900 mb-2">
              Nomor WhatsApp *
            </label>
            <input
              type="tel"
              value={formData.whatsapp}
              onChange={(e) =>
                setFormData({ ...formData, whatsapp: e.target.value })
              }
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none bg-white text-gray-900 placeholder:text-gray-400 transition"
              placeholder="08123456789"
              required
            />
          </div>

          {/* File Upload Placeholders */}
          <div className="space-y-4 p-5 bg-gray-50 rounded-lg border border-gray-200">
            <h3 className="text-base font-bold text-gray-900 mb-4">
              Dokumen Pendaftaran
            </h3>

            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                Pas Foto (Background Biru/Merah) *
              </label>
              <input
                type="file"
                accept="image/*"
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none bg-white text-gray-900 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-blue-600 file:text-white file:font-semibold hover:file:bg-blue-700 file:cursor-pointer transition"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                Foto Kartu Pelajar/KTM *
              </label>
              <input
                type="file"
                accept="image/*"
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none bg-white text-gray-900 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-blue-600 file:text-white file:font-semibold hover:file:bg-blue-700 file:cursor-pointer transition"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                Bukti Pembayaran (Screenshot) *
              </label>
              <input
                type="file"
                accept="image/*"
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none bg-white text-gray-900 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-blue-600 file:text-white file:font-semibold hover:file:bg-blue-700 file:cursor-pointer transition"
                required
              />
            </div>
          </div>

          {/* Syarat & Ketentuan */}
          <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
            <label className="flex items-start space-x-3 cursor-pointer">
              <input
                type="checkbox"
                required
                className="mt-1 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
              />
              <span className="text-sm text-gray-700">
                Saya menyetujui{" "}
                <a
                  href="#"
                  className="text-blue-600 font-semibold hover:underline"
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
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Daftar Sekarang
          </button>
        </form>

        <div className="mt-6 p-4 bg-green-50 rounded-lg border border-green-200">
          <p className="text-sm font-semibold text-gray-900 mb-1">
            Informasi Penting
          </p>
          <p className="text-sm text-gray-700">
            Setelah pendaftaran berhasil, Anda akan menerima email konfirmasi
            beserta username (12-16 digit) dan password untuk login ke sistem.
          </p>
        </div>
      </div>
    </div>
  );
}
