"use client";

import { useState } from "react";
import Link from "next/link";

export default function PenyisihanPage() {
  const [formData, setFormData] = useState({
    linkFigmaOrDrive: "",
    linkYoutube: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement submit logic
    console.log("Submit penyisihan:", formData);
    alert("Link berhasil disubmit!");
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
            Submit Penyisihan
          </h1>
          <p className="text-gray-600 mb-6">
            Seleksi 2 - Semi Finalist - Deadline: 20 April 2025
          </p>

          <div className="mb-6 p-4 bg-blue-50 rounded-lg">
            <h3 className="font-semibold text-gray-900 mb-2">Persyaratan:</h3>
            <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
              <li>
                <strong>SMA/SMK:</strong> Link Figma untuk UI/UX Design
              </li>
              <li>
                <strong>Mahasiswa:</strong> Link Google Drive untuk source code
                web
              </li>
              <li>Link video demo YouTube (unlisted/public)</li>
              <li>Video maksimal 5 menit menjelaskan proyek</li>
            </ul>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Link Figma / Google Drive *
              </label>
              <input
                type="url"
                value={formData.linkFigmaOrDrive}
                onChange={(e) =>
                  setFormData({ ...formData, linkFigmaOrDrive: e.target.value })
                }
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                placeholder="https://figma.com/... atau https://drive.google.com/..."
                required
              />
              <p className="mt-1 text-xs text-gray-500">
                Pastikan link dapat diakses oleh siapa saja (public/anyone with
                link)
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Link Video YouTube Demo *
              </label>
              <input
                type="url"
                value={formData.linkYoutube}
                onChange={(e) =>
                  setFormData({ ...formData, linkYoutube: e.target.value })
                }
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                placeholder="https://youtube.com/watch?v=..."
                required
              />
              <p className="mt-1 text-xs text-gray-500">
                Video demo proyek maksimal 5 menit
              </p>
            </div>

            <button
              type="submit"
              className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition"
            >
              Submit Penyisihan
            </button>
          </form>

          <div className="mt-6 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
            <p className="text-sm text-gray-700">
              <strong>Catatan:</strong> Pastikan semua link sudah benar dan
              dapat diakses sebelum submit. Periksa kembali permission akses
              untuk link Figma/Drive.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
