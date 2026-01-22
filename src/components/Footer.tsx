import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent mb-4">
              BIOSFEST
            </h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Seminar dan Lomba Nasional Teknologi Informasi yang
              diselenggarakan oleh UBM BIOS.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-slate-400 hover:text-cyan-400 transition-colors inline-flex items-center gap-2 group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/login"
                  className="text-slate-400 hover:text-cyan-400 transition-colors inline-flex items-center gap-2 group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Login
                </Link>
              </li>
              <li>
                <Link
                  href="/daftar"
                  className="text-slate-400 hover:text-cyan-400 transition-colors inline-flex items-center gap-2 group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Pendaftaran
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Lokasi</h4>
            <p className="text-sm text-slate-400 leading-relaxed mb-6">
              TUSR UBM Ancol
              <br />
              Jakarta, Indonesia
            </p>
            <div>
              <h4 className="text-lg font-semibold text-white mb-3">Kontak</h4>
              <p className="text-sm text-slate-400">Email: ubmbiosancol@gmail.com</p>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 text-center text-sm text-slate-500">
          <p>
            &copy; 2026 BIOSFEST - Universitas Bunda Mulia. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
