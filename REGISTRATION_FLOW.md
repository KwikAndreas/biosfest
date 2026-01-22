# 📋 Registration & Credential Delivery Flow

## 🔄 **Complete User Registration Flow**

### **Phase 1: Registration** 📝

```
User mengisi form pendaftaran:
├── Kategori Lomba (SMA/SMK UI/UX, Mahasiswa Web Dev, Mahasiswa Game)
├── Data Ketua Tim
│   ├── Nama Lengkap
│   └── NIM/NISN
├── Data Anggota Tim (1-4 orang, optional)
│   ├── Nama Lengkap
│   └── NIM/NISN
├── Asal Sekolah/Universitas
├── Email Aktif
├── Nomor WhatsApp
└── Upload Dokumen
    ├── Pas Foto
    ├── Kartu Pelajar/KTM
    └── Bukti Pembayaran (Rp 100.000)
```

**Submit →** Data tersimpan di database dengan status `payment_verified: false`

---

### **Phase 2: Success Page** ✅

Setelah submit form, user melihat halaman konfirmasi yang menampilkan:

```
┌─────────────────────────────────────────┐
│  ✅ PENDAFTARAN BERHASIL!               │
├─────────────────────────────────────────┤
│                                         │
│  📋 Langkah Selanjutnya:               │
│                                         │
│  1️⃣ Verifikasi Pembayaran              │
│     Tim panitia akan verifikasi bukti   │
│     pembayaran dalam 1-2 hari kerja     │
│                                         │
│  2️⃣ Pengiriman Kredensial              │
│     Setelah terverifikasi, kredensial   │
│     akan dikirim ke:                    │
│                                         │
│     📧 Email: user@example.com          │
│     📱 WhatsApp: 08123456789           │
│                                         │
│  🔐 Kredensial Akun:                   │
│     • Username: 12-16 digit angka       │
│       (auto-generated)                  │
│     • Password: Random                  │
│       (dapat direset setelah login)     │
│                                         │
│  [ Daftar Tim Lain ]  [ Ke Beranda ]   │
└─────────────────────────────────────────┘
```

---

### **Phase 3: Admin Verification** 👨‍💼

Admin melihat dashboard dengan list pendaftaran:

```sql
-- Database: registrations table
┌──────┬─────────────┬───────────┬──────────────────┬─────────────────┐
│ ID   │ Nama Ketua  │ Email     │ Payment Verified │ Credentials     │
├──────┼─────────────┼───────────┼──────────────────┼─────────────────┤
│ 001  │ John Doe    │ john@...  │ ⏳ PENDING       │ ❌ Not Generated│
│ 002  │ Jane Smith  │ jane@...  │ ✅ VERIFIED      │ ✅ Sent         │
└──────┴─────────────┴───────────┴──────────────────┴─────────────────┘
```

Admin actions:

1. Cek bukti pembayaran
2. Klik tombol "Verify Payment"
3. System auto-trigger:
   - Generate username (12-16 digit random)
   - Generate password (random 12 char)
   - Hash password untuk database
   - Kirim email via Resend
   - Kirim WhatsApp via Fonnte

---

### **Phase 4: Auto-Generated Credentials** 🔐

**Username Generation:**

```javascript
// Generate 12-16 digit random number
function generateUsername() {
  const length = Math.floor(Math.random() * 5) + 12; // 12-16
  return Math.floor(Math.random() * Math.pow(10, length))
    .toString()
    .padStart(length, "0");
}

// Example outputs:
// 123456789012
// 9876543210987654
// 456789012345
```

**Password Generation:**

```javascript
// Generate secure random password
function generatePassword() {
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";
  let password = "";
  for (let i = 0; i < 12; i++) {
    password += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return password;
}

// Example outputs:
// aB3$xY9@mK2!
// P7q#R2v!N8w&
// K4$mT9@zX5!h
```

---

### **Phase 5: Credential Delivery** 📧📱

**A. Email Template (via Resend):**

```html
From: BIOSFEST
<noreply@biosfest.id>
  To: user@example.com Subject: 🎉 Kredensial Akun BIOSFEST 2026
  ┌──────────────────────────────────────┐ │ BIOSFEST 2026 │
  └──────────────────────────────────────┘ Halo, John Doe! 👋 Pembayaran Anda
  telah TERVERIFIKASI! ✅ Berikut adalah kredensial akun BIOSFEST Anda:
  ┌────────────────────────────────────┐ │ Username: 123456789012 │ │ Password:
  aB3$xY9@mK2! │ └────────────────────────────────────┘ ⚠️ PENTING: Silakan
  ganti password Anda setelah login pertama kali untuk keamanan. [ Login
  Sekarang → ] ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ Email otomatis, jangan
  membalas.</noreply@biosfest.id
>
```

**B. WhatsApp Message (via Fonnte):**

````
🎉 *BIOSFEST 2026 - Kredensial Akun*

Halo *John Doe*! 👋

Pembayaran Anda telah *terverifikasi*! ✅

Berikut kredensial akun BIOSFEST Anda:

━━━━━━━━━━━━━━━━
🔐 *Username:*
```123456789012```

🔑 *Password:*
```aB3$xY9@mK2!```
━━━━━━━━━━━━━━━━

⚠️ *PENTING:*
Segera ganti password setelah login
pertama kali untuk keamanan.

🔗 Login: https://biosfest.id/login

━━━━━━━━━━━━━━━━
Pesan otomatis, jangan membalas.
````

---

### **Phase 6: First Login** 🔓

User login dengan kredensial:

```
┌─────────────────────────────────────┐
│         LOGIN BIOSFEST              │
├─────────────────────────────────────┤
│                                     │
│  Username (12-16 digit angka)       │
│  ┌──────────────────────────────┐  │
│  │ 123456789012                 │  │
│  └──────────────────────────────┘  │
│                                     │
│  Password                           │
│  ┌──────────────────────────────┐  │
│  │ ••••••••••••                 │  │
│  └──────────────────────────────┘  │
│                                     │
│  [ Lupa Password? ]                 │
│                                     │
│  [        Masuk        ]            │
│                                     │
│  Belum punya akun? Daftar Sekarang  │
└─────────────────────────────────────┘
```

**After first login →** Redirect to change password page

---

### **Phase 7: Password Reset** 🔑

```
┌─────────────────────────────────────┐
│      GANTI PASSWORD                 │
├─────────────────────────────────────┤
│                                     │
│  Password Lama                      │
│  ┌──────────────────────────────┐  │
│  │ ••••••••••••                 │  │
│  └──────────────────────────────┘  │
│                                     │
│  Password Baru                      │
│  ┌──────────────────────────────┐  │
│  │                              │  │
│  └──────────────────────────────┘  │
│                                     │
│  Konfirmasi Password Baru           │
│  ┌──────────────────────────────┐  │
│  │                              │  │
│  └──────────────────────────────┘  │
│                                     │
│  [      Ganti Password      ]       │
└─────────────────────────────────────┘
```

---

## 📊 **Database Schema**

```sql
-- Table: registrations
CREATE TABLE registrations (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),

  -- Team Info
  nama_ketua TEXT NOT NULL,
  nim_ketua TEXT NOT NULL,
  nama_anggota TEXT[], -- Array of member names
  nim_anggota TEXT[],  -- Array of member NIMs

  -- Competition Info
  kategori TEXT NOT NULL CHECK (kategori IN ('sma', 'mahasiswa-webdev', 'mahasiswa-game')),
  asal_sekolah TEXT NOT NULL,

  -- Contact Info
  email TEXT NOT NULL,
  whatsapp TEXT NOT NULL,

  -- Documents (file URLs)
  foto_url TEXT,
  ktm_url TEXT,
  payment_proof_url TEXT,

  -- Verification Status
  payment_verified BOOLEAN DEFAULT FALSE,
  verified_at TIMESTAMP,
  verified_by UUID REFERENCES auth.users(id),

  -- Credentials
  username TEXT UNIQUE,
  password_hash TEXT,

  -- Delivery Status
  credentials_sent_email BOOLEAN DEFAULT FALSE,
  credentials_sent_whatsapp BOOLEAN DEFAULT FALSE,
  credentials_sent_at TIMESTAMP,

  -- Timestamps
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Table: auth_logs (for tracking logins)
CREATE TABLE auth_logs (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  registration_id UUID REFERENCES registrations(id),
  login_at TIMESTAMP DEFAULT NOW(),
  ip_address TEXT,
  user_agent TEXT,
  login_success BOOLEAN
);

-- Table: password_resets
CREATE TABLE password_resets (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  registration_id UUID REFERENCES registrations(id),
  old_password_hash TEXT NOT NULL,
  new_password_hash TEXT NOT NULL,
  reset_at TIMESTAMP DEFAULT NOW()
);
```

---

## 🔄 **System Flow Diagram**

```
┌──────────────┐
│   USER       │
│   Register   │
└──────┬───────┘
       │
       ▼
┌──────────────────────────┐
│ Fill Registration Form   │
│ • Ketua + NIM            │
│ • Anggota + NIM (1-4)    │
│ • Email & WhatsApp       │
│ • Upload Documents       │
└──────┬───────────────────┘
       │
       ▼
┌──────────────────────────┐
│ Submit Form              │
│ → Save to Supabase       │
│   payment_verified=false │
└──────┬───────────────────┘
       │
       ▼
┌──────────────────────────┐
│ SUCCESS PAGE             │
│ "Tunggu Verifikasi"      │
│ Kredensial akan dikirim: │
│ 📧 Email                 │
│ 📱 WhatsApp             │
└──────────────────────────┘
       │
       │ (1-2 days)
       │
       ▼
┌──────────────────────────┐
│    ADMIN PANEL           │
│ Review Payment Proof     │
└──────┬───────────────────┘
       │
       ▼
┌──────────────────────────┐
│ ADMIN: Verify Payment ✅ │
│ → Update DB:             │
│   payment_verified=true  │
└──────┬───────────────────┘
       │
       ▼ (TRIGGER)
┌──────────────────────────┐
│ AUTO-GENERATE            │
│ • Username: 12-16 digits │
│ • Password: Random       │
└──────┬───────────────────┘
       │
       ├────────────┬─────────────┐
       ▼            ▼             ▼
┌─────────────┐ ┌─────────────┐ ┌─────────────┐
│   RESEND    │ │   FONNTE    │ │  DATABASE   │
│ Send Email  │ │ Send WA Msg │ │ Save Creds  │
└─────────────┘ └─────────────┘ └──────┬──────┘
       │            │                   │
       └────────────┴───────────────────┘
                    │
                    ▼
             ┌──────────────┐
             │   USER       │
             │ Terima Email │
             │ Terima WA    │
             └──────┬───────┘
                    │
                    ▼
             ┌──────────────┐
             │  LOGIN       │
             │ • Username   │
             │ • Password   │
             └──────┬───────┘
                    │
                    ▼
             ┌──────────────┐
             │  DASHBOARD   │
             │ First Login? │
             │ → Reset Pass │
             └──────────────┘
```

---

## 💡 **Key Features**

✅ **Auto-generated credentials** - Username & password otomatis
✅ **Dual delivery** - Email (Resend) + WhatsApp (Fonnte)
✅ **Secure** - Password hashed, can be reset
✅ **Tracked** - Email & WhatsApp delivery status logged
✅ **Cost-effective** - ~Rp 200-300 per peserta
✅ **Automated** - No manual intervention needed after verification
✅ **User-friendly** - Clear success page with instructions

---

## 🚀 **Next Steps for Implementation**

1. ✅ Setup Supabase project
2. ✅ Create database tables
3. ✅ Setup Resend account (email)
4. ✅ Setup Fonnte account (WhatsApp)
5. ✅ Create Edge Functions
6. ✅ Setup triggers
7. ✅ Create admin verification page
8. ✅ Test end-to-end flow

📚 Lihat `SUPABASE_INTEGRATION.md` untuk detail implementasi teknis!
