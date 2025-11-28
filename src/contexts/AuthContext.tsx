"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { useRouter } from "next/navigation";

type UserRole = "admin" | "pembina" | "peserta";

interface User {
  username: string;
  role: UserRole;
  name: string;
  needPasswordChange?: boolean;
}

interface AuthContextType {
  user: User | null;
  login: (username: string, password: string) => Promise<boolean>;
  logout: () => void;
  isAuthenticated: boolean;
  changePassword: (
    oldPassword: string,
    newPassword: string
  ) => Promise<boolean>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();

  // Load user from localStorage on mount
  useEffect(() => {
    const savedUser = localStorage.getItem("biosfest_user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const login = async (
    username: string,
    password: string
  ): Promise<boolean> => {
    // TODO: Replace with actual API call
    // Mock login logic - dalam production, ini harus memanggil backend API

    // Format username: 12-16 digit angka
    const usernameRegex = /^\d{12,16}$/;

    if (!usernameRegex.test(username)) {
      alert("Username harus berupa 12-16 digit angka");
      return false;
    }

    // Mock users untuk testing
    const mockUsers: Record<
      string,
      {
        password: string;
        role: UserRole;
        name: string;
        needPasswordChange?: boolean;
      }
    > = {
      "123456789012": {
        password: "admin123",
        role: "admin",
        name: "Admin Panitia",
      },
      "987654321098": {
        password: "pembina123",
        role: "pembina",
        name: "Pembina 1",
        needPasswordChange: true,
      },
      "111111111111": {
        password: "peserta123",
        role: "peserta",
        name: "Tim Alpha",
        needPasswordChange: true,
      },
    };

    const userData = mockUsers[username];

    if (userData && userData.password === password) {
      const newUser: User = {
        username,
        role: userData.role,
        name: userData.name,
        needPasswordChange: userData.needPasswordChange,
      };

      setUser(newUser);
      localStorage.setItem("biosfest_user", JSON.stringify(newUser));
      return true;
    }

    alert("Username atau password salah");
    return false;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("biosfest_user");
    router.push("/login");
  };

  const changePassword = async (
    oldPassword: string,
    newPassword: string
  ): Promise<boolean> => {
    // TODO: Replace with actual API call
    if (newPassword.length < 8) {
      alert("Password baru harus minimal 8 karakter");
      return false;
    }

    // Mock password change
    if (user) {
      const updatedUser = { ...user, needPasswordChange: false };
      setUser(updatedUser);
      localStorage.setItem("biosfest_user", JSON.stringify(updatedUser));
      alert("Password berhasil diubah!");
      return true;
    }

    return false;
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        isAuthenticated: !!user,
        changePassword,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
