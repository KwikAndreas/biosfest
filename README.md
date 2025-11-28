# BIOSFEST 2026 - Website Resmi

Website resmi untuk Seminar dan Lomba Nasional Teknologi Informasi BIOSFEST 2026 yang diselenggarakan oleh Universitas Bunda Mulia.

## 🚀 Fitur

### Halaman Utama

- **Home** (`/`) - Landing page dengan informasi lengkap tentang BIOSFEST
  - Hero section dengan CTA
  - Info singkat (tanggal, tim, lokasi)
  - Kategori lomba (SMA/SMK dan Mahasiswa)
  - Timeline lengkap
  - Call-to-action section

### Pendaftaran & Login

- **Login** (`/login`) - Halaman login untuk peserta/pembina
- **Daftar** (`/daftar`) - Form pendaftaran tim lengkap dengan:
  - Kategori lomba (SMA/SMK UI/UX atau Mahasiswa Web Dev)
  - Data ketua dan anggota tim (maks 5 orang)
  - Upload dokumen (pas foto, KTM, bukti bayar)
  - Biaya pendaftaran: Rp 100.000

### Dashboard Peserta

- **Dashboard** (`/dashboard`) - Dashboard utama peserta

  - Overview timeline
  - Akses ke semua submission

- **Submit Proposal** (`/dashboard/proposal`) - Upload proposal PDF (Seleksi 1)

  - Deadline: 13 April 2026

- **Submit Penyisihan** (`/dashboard/penyisihan`) - Submit link project (Seleksi 2)

  - Link Figma (untuk SMA/SMK) atau Google Drive (untuk Mahasiswa)
  - Link video demo YouTube
  - Deadline: 20 April 2026

- **Submit Final** (`/dashboard/final`) - Upload PPT presentasi (Seleksi 3)
  - Upload file PPT/PPTX
  - Deadline: 4 Mei 2026

## 📅 Timeline Lomba

| Tanggal  | Kegiatan                              |
| -------- | ------------------------------------- |
| 6 Maret  | Pendaftaran dibuka                    |
| 4 April  | Technical Meeting                     |
| 13 April | Seleksi 1 - Proposal                  |
| 20 April | Seleksi 2 - Semi Finalist             |
| 4 Mei    | Seleksi 3 - Finalist                  |
| 11 Mei   | Hari H - Presentasi di TUSR UBM Ancol |

## 🎨 Kategori Lomba

### SMA/SMK - UI/UX Design

- Tool: Figma
- Submit: Link Figma + Video YouTube

### Mahasiswa - Web Development

- Tech Stack: Bebas (React, Vue, Angular, dll)
- Submit: Link Google Drive + Video YouTube

## 🛠️ Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS v4
- **Language**: TypeScript
- **Font**: Geist Sans & Geist Mono

## 📦 Instalasi

```bash
# Install dependencies
npm install

# Jalankan development server
npm run dev

# Build untuk production
npm run build

# Jalankan production server
npm start
```

## 🌐 Development

Server akan berjalan di:

- Local: http://localhost:3000

## 📁 Struktur Folder

```
src/
├── app/
│   ├── layout.tsx          # Layout utama dengan Navbar & Footer
│   ├── page.tsx            # Homepage
│   ├── login/
│   │   └── page.tsx        # Halaman login
│   ├── daftar/
│   │   └── page.tsx        # Form pendaftaran
│   └── dashboard/
│       ├── page.tsx        # Dashboard peserta
│       ├── proposal/
│       │   └── page.tsx    # Submit proposal
│       ├── penyisihan/
│       │   └── page.tsx    # Submit penyisihan
│       └── final/
│           └── page.tsx    # Submit final
└── components/
    ├── Navbar.tsx          # Navigation bar
    └── Footer.tsx          # Footer
```

## 🎯 TODO - Backend Integration

Website ini saat ini berjalan sebagai frontend. Untuk production, perlu integrasi dengan:

1. **Authentication System**

   - Login dengan username (14 digit) dan password
   - Session management
   - Protected routes untuk dashboard

2. **Database**

   - User registration data
   - Team information
   - File uploads (proposal, PPT)
   - Submission tracking

3. **File Upload Service**

   - Cloud storage (AWS S3, Google Cloud Storage, atau Azure Blob)
   - PDF, Image, dan PPT upload handler
   - File validation dan security

4. **Email Service**

   - Kirim username & password setelah registrasi
   - Email konfirmasi
   - Reminder untuk deadline

5. **Admin Panel**
   - Manage peserta
   - Review submissions
   - Generate reports

## 📝 Catatan

- Website mengikuti desain modern terinspirasi dari compfest.id
- Responsive untuk mobile, tablet, dan desktop
- Form validation untuk semua input
- User-friendly error messages

## 📞 Kontak

- Website: biosfest.id
- Email: info@biosfest.id
- Lokasi: TUSR UBM Ancol, Jakarta

---

© 2026 BIOSFEST - Universitas Bunda Mulia. All rights reserved.
