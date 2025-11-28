"use client";

import { useState } from "react";
import Link from "next/link";
import { useAuth } from "@/contexts/AuthContext";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [resetEmail, setResetEmail] = useState("");
  const { login } = useAuth();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const success = await login(username, password);

    if (success) {
      const savedUser = localStorage.getItem("biosfest_user");
      if (savedUser) {
        const user = JSON.parse(savedUser);
        if (user.role === "admin") {
          router.push("/dashboard/admin");
        } else if (user.role === "pembina") {
          router.push("/dashboard/pembina");
        } else {
          router.push("/dashboard/peserta");
        }
      }
    }

    setIsLoading(false);
  };

  const handleForgotPassword = (e: React.FormEvent) => {
    e.preventDefault();
    alert(
      `Link reset password telah dikirim ke email yang terdaftar dengan username Anda. Silakan cek inbox atau spam folder.`
    );
    setShowForgotPassword(false);
    setResetEmail("");
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 to-indigo-100 py-20 px-4">
      <div className="max-w-md w-full mx-auto bg-white rounded-2xl shadow-xl p-8 md:p-10">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Login</h1>
          <p className="text-gray-600">Masuk ke akun BIOSFEST Anda</p>
        </div>

        {!showForgotPassword ? (
          <>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="username"
                  className="block text-sm font-semibold text-gray-900 mb-2"
                >
                  Username (12-16 digit angka)
                </label>
                <input
                  id="username"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition bg-white text-gray-900 placeholder:text-gray-400"
                  placeholder="123456789012"
                  pattern="\d{12,16}"
                  title="Username harus 12-16 digit angka"
                  required
                />
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <label
                    htmlFor="password"
                    className="block text-sm font-semibold text-gray-900"
                  >
                    Password
                  </label>
                  <button
                    type="button"
                    onClick={() => setShowForgotPassword(true)}
                    className="text-sm text-blue-600 hover:text-blue-700 font-semibold transition"
                  >
                    Lupa Password?
                  </button>
                </div>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition bg-white text-gray-900 placeholder:text-gray-400"
                  placeholder="Masukkan password Anda"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition disabled:bg-gray-400 disabled:cursor-not-allowed"
              >
                {isLoading ? "Memproses..." : "Masuk"}
              </button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-gray-600">
                Belum punya akun?{" "}
                <Link
                  href="/daftar"
                  className="text-blue-600 font-semibold hover:text-blue-700 transition"
                >
                  Daftar Sekarang
                </Link>
              </p>
            </div>

            {/* <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-100">
              <p className="text-sm font-semibold text-gray-900 mb-3">
                Akun Demo untuk Testing:
              </p>
              <div className="space-y-2 text-xs">
                <p className="text-gray-700">
                  <span className="font-semibold">Admin:</span> 123456789012 /
                  admin123
                </p>
                <p className="text-gray-700">
                  <span className="font-semibold">Pembina:</span> 987654321098 /
                  pembina123
                </p>
                <p className="text-gray-700">
                  <span className="font-semibold">Peserta:</span> 111111111111 /
                  peserta123
                </p>
              </div>
              <p className="text-xs text-gray-600 mt-3">
                Setelah mendaftar, panitia akan memberikan username dan password
                yang dapat diubah setelah login pertama kali.
              </p>
            </div> */}
          </>
        ) : (
          <>
            <form onSubmit={handleForgotPassword} className="space-y-6">
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-100 mb-6">
                <p className="text-sm text-gray-700">
                  Masukkan username Anda. Link reset password akan dikirim ke
                  email yang terdaftar.
                </p>
              </div>

              <div>
                <label
                  htmlFor="resetUsername"
                  className="block text-sm font-semibold text-gray-900 mb-2"
                >
                  Username (12-16 digit angka)
                </label>
                <input
                  id="resetUsername"
                  type="text"
                  value={resetEmail}
                  onChange={(e) => setResetEmail(e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition bg-white text-gray-900 placeholder:text-gray-400"
                  placeholder="123456789012"
                  pattern="\d{12,16}"
                  title="Username harus 12-16 digit angka"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
              >
                Kirim Link Reset Password
              </button>

              <button
                type="button"
                onClick={() => {
                  setShowForgotPassword(false);
                  setResetEmail("");
                }}
                className="w-full text-gray-600 py-2 text-sm font-semibold hover:text-gray-700 transition"
              >
                Kembali ke Login
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
