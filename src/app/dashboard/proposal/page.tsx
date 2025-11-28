"use client";

import { useState } from "react";
import Link from "next/link";

export default function ProposalPage() {
  const [file, setFile] = useState<File | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) {
      alert("Silakan pilih file PDF terlebih dahulu");
      return;
    }
    // TODO: Implement upload logic
    console.log("Upload proposal:", file);
    alert("Proposal berhasil diupload!");
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
            Submit Proposal
          </h1>
          <p className="text-gray-600 mb-6">
            Seleksi 1 - Deadline: 13 April 2026
          </p>

          <div className="mb-6 p-4 bg-blue-50 rounded-lg">
            <h3 className="font-semibold text-gray-900 mb-2">
              Persyaratan Proposal:
            </h3>
            <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
              <li>Format file: PDF</li>
              <li>Maksimal ukuran: 10 MB</li>
              <li>Proposal harus orisinal dan belum dipublikasikan</li>
              <li>Berisi ide/konsep proyek yang akan dikembangkan</li>
            </ul>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Upload Proposal (PDF) *
              </label>
              <input
                type="file"
                accept=".pdf"
                onChange={(e) => setFile(e.target.files?.[0] || null)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
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
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Upload Proposal
            </button>
          </form>

          <div className="mt-6 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
            <p className="text-sm text-gray-700">
              <strong>Catatan:</strong> Pastikan proposal sudah final sebelum
              diupload. Setelah disubmit, Anda tidak dapat mengubah file.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
