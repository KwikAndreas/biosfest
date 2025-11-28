"use client";

import { useState } from "react";
import Link from "next/link";

export default function FinalPage() {
  const [file, setFile] = useState<File | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) {
      alert("Silakan pilih file PPT terlebih dahulu");
      return;
    }
    // TODO: Implement upload logic
    console.log("Upload PPT final:", file);
    alert("PPT Final berhasil diupload!");
  };

  return (
    <div className="min-h-screen bg-gray-50 py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <Link
          href="/dashboard"
          className="text-blue-600 hover:underline mb-4 inline-block"
        >
          ← Kembali ke Dashboard
        </Link>

        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Submit Final
          </h1>
          <p className="text-gray-600 mb-6">
            Seleksi 3 - Finalist - Deadline: 4 Mei 2025
          </p>

          <div className="mb-6 p-4 bg-purple-50 rounded-lg border border-purple-200">
            <h3 className="font-semibold text-gray-900 mb-2">
              Persyaratan PPT Final:
            </h3>
            <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
              <li>Format file: PPT/PPTX</li>
              <li>Maksimal ukuran: 20 MB</li>
              <li>Berisi presentasi lengkap proyek untuk pitching ke juri</li>
              <li>Durasi presentasi maksimal 10 menit</li>
              <li>Harus hadir di acara offline pada 11 Mei 2025</li>
            </ul>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Upload PPT Final *
              </label>
              <input
                type="file"
                accept=".ppt,.pptx"
                onChange={(e) => setFile(e.target.files?.[0] || null)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none"
                required
              />
              {file && (
                <p className="mt-2 text-sm text-gray-600">
                  File dipilih: {file.name} (
                  {(file.size / 1024 / 1024).toFixed(2)} MB)
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition"
            >
              Upload PPT Final
            </button>
          </form>

          <div className="mt-6 p-4 bg-red-50 rounded-lg border border-red-200">
            <p className="text-sm text-gray-700">
              <strong>Penting:</strong> Semua anggota tim wajib hadir ke acara
              offline pada <strong>11 Mei 2025</strong> di TUSR UBM Ancol untuk
              presentasi final dan pengumuman pemenang.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
