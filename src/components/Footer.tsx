import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">BIOSFEST</h3>
            <p className="text-sm">
              Seminar dan Lomba Nasional Teknologi Informasi yang
              diselenggarakan oleh UBM.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-blue-400 transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/login" className="hover:text-blue-400 transition">
                  Login
                </Link>
              </li>
              <li>
                <Link href="/daftar" className="hover:text-blue-400 transition">
                  Pendaftaran
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Lokasi</h4>
            <p className="text-sm">
              TUSR UBM Ancol
              <br />
              Jakarta, Indonesia
            </p>
            <div className="mt-4">
              <h4 className="text-lg font-semibold text-white mb-2">Kontak</h4>
              <p className="text-sm">Email: info@biosfest.id</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p>
            &copy; 2025 BIOSFEST - Universitas Bunda Mulia. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
