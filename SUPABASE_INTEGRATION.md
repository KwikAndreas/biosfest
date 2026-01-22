# 📧 Supabase Integration Guide - Credential Delivery System

## Overview

Sistem pengiriman kredensial akun setelah verifikasi pembayaran menggunakan Supabase.

---

## ✅ **Apakah Supabase Bisa Mengirim Email & WhatsApp?**

### **1. ✉️ EMAIL - YA, BISA!**

Supabase memiliki beberapa cara untuk mengirim email:

#### **Opsi A: Supabase Auth Email (Built-in) - GRATIS**

```javascript
// Mengirim email menggunakan Supabase Auth
const { data, error } = await supabase.auth.signInWithOtp({
  email: "user@example.com",
  options: {
    emailRedirectTo: "https://biosfest.id/dashboard",
  },
});
```

**Kelebihan:**

- ✅ Gratis, sudah built-in
- ✅ Tidak perlu setup eksternal
- ✅ Template email customizable

**Kekurangan:**

- ⚠️ Terbatas untuk auth purposes
- ⚠️ Design email sederhana

---

#### **Opsi B: Supabase Edge Functions + Resend/SendGrid - RECOMMENDED**

**Setup dengan Resend (RECOMMENDED - Free 100 emails/day):**

```bash
# 1. Install Supabase CLI
npm install -g supabase

# 2. Create Edge Function
supabase functions new send-credentials

# 3. Deploy Function
supabase functions deploy send-credentials
```

**File: `supabase/functions/send-credentials/index.ts`**

```typescript
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

serve(async (req) => {
  try {
    const { email, username, password, nama } = await req.json();

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "BIOSFEST <noreply@biosfest.id>",
        to: [email],
        subject: "🎉 Kredensial Akun BIOSFEST 2026",
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <div style="background: linear-gradient(135deg, #06b6d4 0%, #0891b2 100%); padding: 30px; text-align: center;">
              <h1 style="color: white; margin: 0;">BIOSFEST 2026</h1>
            </div>
            
            <div style="padding: 30px; background: white;">
              <h2 style="color: #0f172a;">Halo, ${nama}! 👋</h2>
              <p style="color: #475569; line-height: 1.6;">
                Pembayaran Anda telah <strong style="color: #10b981;">terverifikasi</strong>! 
                Berikut adalah kredensial akun BIOSFEST Anda:
              </p>
              
              <div style="background: #f1f5f9; padding: 20px; border-radius: 12px; margin: 20px 0;">
                <p style="margin: 10px 0;">
                  <strong style="color: #0f172a;">Username:</strong><br/>
                  <code style="background: white; padding: 8px 12px; border-radius: 6px; font-size: 16px; display: inline-block; margin-top: 5px;">${username}</code>
                </p>
                <p style="margin: 10px 0;">
                  <strong style="color: #0f172a;">Password:</strong><br/>
                  <code style="background: white; padding: 8px 12px; border-radius: 6px; font-size: 16px; display: inline-block; margin-top: 5px;">${password}</code>
                </p>
              </div>
              
              <div style="background: #fef3c7; border-left: 4px solid #f59e0b; padding: 15px; margin: 20px 0;">
                <p style="margin: 0; color: #92400e;">
                  <strong>⚠️ Penting:</strong> Silakan ganti password Anda setelah login pertama kali untuk keamanan.
                </p>
              </div>
              
              <a href="https://biosfest.id/login" 
                 style="display: inline-block; background: linear-gradient(135deg, #06b6d4 0%, #0891b2 100%); 
                        color: white; padding: 12px 30px; text-decoration: none; border-radius: 8px; 
                        margin-top: 20px; font-weight: bold;">
                Login Sekarang
              </a>
              
              <p style="color: #94a3b8; font-size: 12px; margin-top: 30px;">
                Email ini dikirim secara otomatis, mohon tidak membalas email ini.
              </p>
            </div>
          </div>
        `,
      }),
    });

    const data = await res.json();

    return new Response(JSON.stringify(data), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
});
```

**Cara Memanggil dari Client:**

```typescript
// Setelah admin verifikasi pembayaran
const { data, error } = await supabase.functions.invoke("send-credentials", {
  body: {
    email: "user@example.com",
    username: "123456789012",
    password: "randomPass123!",
    nama: "John Doe",
  },
});
```

**Pricing Resend:**

- ✅ **GRATIS** untuk 100 emails/hari
- 💰 $20/bulan untuk 50,000 emails/bulan

---

### **2. 📱 WHATSAPP - YA, BISA!**

WhatsApp memerlukan integrasi third-party API. Ada beberapa pilihan:

#### **Opsi A: Fonnte (Indonesia) - RECOMMENDED**

```typescript
// File: supabase/functions/send-whatsapp/index.ts
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const FONNTE_API_KEY = Deno.env.get("FONNTE_API_KEY");

serve(async (req) => {
  try {
    const { whatsapp, username, password, nama } = await req.json();

    const message = `
🎉 *BIOSFEST 2026 - Kredensial Akun*

Halo *${nama}*! 👋

Pembayaran Anda telah *terverifikasi*! ✅
Berikut kredensial akun BIOSFEST Anda:

━━━━━━━━━━━━━━━━
🔐 *Username:*
\`\`\`${username}\`\`\`

🔑 *Password:*
\`\`\`${password}\`\`\`
━━━━━━━━━━━━━━━━

⚠️ *PENTING:*
Segera ganti password Anda setelah login pertama kali untuk keamanan.

🔗 Login: https://biosfest.id/login

━━━━━━━━━━━━━━━━
Pesan otomatis, jangan membalas.
    `.trim();

    const res = await fetch("https://api.fonnte.com/send", {
      method: "POST",
      headers: {
        Authorization: FONNTE_API_KEY,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        target: whatsapp,
        message: message,
        countryCode: "62", // Indonesia
      }),
    });

    const data = await res.json();

    return new Response(JSON.stringify(data), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
});
```

**Pricing Fonnte:**

- 💰 Rp 200/pesan (sangat terjangkau!)
- 📦 Package: Rp 50.000 = 300 pesan

---

#### **Opsi B: Twilio WhatsApp**

```typescript
const TWILIO_ACCOUNT_SID = Deno.env.get("TWILIO_ACCOUNT_SID");
const TWILIO_AUTH_TOKEN = Deno.env.get("TWILIO_AUTH_TOKEN");

const res = await fetch(
  `https://api.twilio.com/2010-04-01/Accounts/${TWILIO_ACCOUNT_SID}/Messages.json`,
  {
    method: "POST",
    headers: {
      Authorization:
        "Basic " + btoa(`${TWILIO_ACCOUNT_SID}:${TWILIO_AUTH_TOKEN}`),
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      From: "whatsapp:+14155238886", // Twilio Sandbox
      To: `whatsapp:${whatsapp}`,
      Body: message,
    }),
  },
);
```

**Pricing Twilio:**

- 💰 $0.005/pesan (~Rp 80/pesan)
- Lebih reliable, infrastructure global

---

## 🎯 **RECOMMENDATION: Setup Lengkap**

### **Step 1: Setup Supabase Project**

```bash
# Install Supabase CLI
npm install -g supabase

# Login
supabase login

# Link project
supabase link --project-ref your-project-ref
```

### **Step 2: Create Database Schema**

```sql
-- Table untuk menyimpan pendaftaran
CREATE TABLE registrations (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  nama_ketua TEXT NOT NULL,
  nim_ketua TEXT NOT NULL,
  email TEXT NOT NULL,
  whatsapp TEXT NOT NULL,
  kategori TEXT NOT NULL,
  payment_verified BOOLEAN DEFAULT FALSE,
  username TEXT,
  password TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Table untuk menyimpan credential yang sudah digenerate
CREATE TABLE credentials (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  registration_id UUID REFERENCES registrations(id),
  username TEXT UNIQUE NOT NULL,
  password_hash TEXT NOT NULL,
  sent_email BOOLEAN DEFAULT FALSE,
  sent_whatsapp BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT NOW()
);
```

### **Step 3: Setup Edge Functions**

```bash
# Create functions
supabase functions new send-credentials-email
supabase functions new send-credentials-whatsapp

# Set secrets
supabase secrets set RESEND_API_KEY=re_xxxxx
supabase secrets set FONNTE_API_KEY=xxxxx

# Deploy
supabase functions deploy send-credentials-email
supabase functions deploy send-credentials-whatsapp
```

### **Step 4: Setup Trigger (Auto-send after verification)**

```sql
-- Trigger untuk auto-send credentials setelah payment verified
CREATE OR REPLACE FUNCTION send_credentials_after_verification()
RETURNS TRIGGER AS $$
BEGIN
  IF NEW.payment_verified = TRUE AND OLD.payment_verified = FALSE THEN
    -- Generate username (12-16 digit)
    NEW.username := LPAD(floor(random() * 10000000000000000)::TEXT, 12, '0');

    -- Generate password (random 12 char)
    NEW.password := substr(md5(random()::text), 0, 13);

    -- Call Edge Function to send email
    PERFORM net.http_post(
      url := 'https://your-project.supabase.co/functions/v1/send-credentials-email',
      headers := jsonb_build_object('Authorization', 'Bearer ' || current_setting('app.jwt_token')),
      body := jsonb_build_object(
        'email', NEW.email,
        'username', NEW.username,
        'password', NEW.password,
        'nama', NEW.nama_ketua
      )
    );

    -- Call Edge Function to send WhatsApp
    PERFORM net.http_post(
      url := 'https://your-project.supabase.co/functions/v1/send-credentials-whatsapp',
      headers := jsonb_build_object('Authorization', 'Bearer ' || current_setting('app.jwt_token')),
      body := jsonb_build_object(
        'whatsapp', NEW.whatsapp,
        'username', NEW.username,
        'password', NEW.password,
        'nama', NEW.nama_ketua
      )
    );
  END IF;

  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER after_payment_verification
  BEFORE UPDATE ON registrations
  FOR EACH ROW
  EXECUTE FUNCTION send_credentials_after_verification();
```

### **Step 5: Client Implementation**

```typescript
// pages/admin/verify-payment.tsx
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
);

// Admin verify payment
async function verifyPayment(registrationId: string) {
  const { data, error } = await supabase
    .from("registrations")
    .update({ payment_verified: true })
    .eq("id", registrationId);

  // Trigger akan otomatis mengirim email & WhatsApp!

  return { data, error };
}
```

---

## 💰 **Total Cost Estimation**

Untuk 100 peserta:

- **Email (Resend):** GRATIS (dalam limit 100/day)
- **WhatsApp (Fonnte):** Rp 20.000 (100 pesan × Rp 200)
- **Supabase:** GRATIS (Free tier)

**Total: ~Rp 20.000** untuk 100 peserta! 🎉

---

## 🔐 **Security Best Practices**

1. **Hash password di database:**

```typescript
import bcrypt from "bcryptjs";

const hashedPassword = await bcrypt.hash(password, 10);
```

2. **Environment variables:**

```env
NEXT_PUBLIC_SUPABASE_URL=https://xxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJxxx
SUPABASE_SERVICE_ROLE_KEY=eyJxxx (JANGAN EXPOSE!)
RESEND_API_KEY=re_xxx
FONNTE_API_KEY=xxx
```

3. **RLS (Row Level Security) di Supabase:**

```sql
-- Enable RLS
ALTER TABLE registrations ENABLE ROW LEVEL SECURITY;

-- Policy: Users can only read their own data
CREATE POLICY "Users can read own registration"
  ON registrations
  FOR SELECT
  USING (auth.uid() = id);

-- Policy: Only admin can verify payment
CREATE POLICY "Admin can verify payment"
  ON registrations
  FOR UPDATE
  USING (auth.jwt() ->> 'role' = 'admin');
```

---

## 📚 **Resources**

- [Supabase Edge Functions](https://supabase.com/docs/guides/functions)
- [Resend API](https://resend.com/docs)
- [Fonnte API](https://fonnte.com/api)
- [Twilio WhatsApp API](https://www.twilio.com/docs/whatsapp)

---

## ✅ **Kesimpulan**

**YA, SUPABASE BISA MENGIRIM EMAIL & WHATSAPP!**

✅ **Email:** Menggunakan Edge Functions + Resend (GRATIS 100/day)
✅ **WhatsApp:** Menggunakan Edge Functions + Fonnte (Rp 200/pesan)
✅ **Auto-trigger:** Setelah payment verified, otomatis kirim kredensial
✅ **Cost-effective:** ~Rp 20.000 untuk 100 peserta
✅ **Secure:** Password random, dapat direset, RLS enabled

**Recommended Flow:**

1. User daftar → Data masuk ke Supabase
2. Admin verifikasi pembayaran → Update `payment_verified = true`
3. Trigger otomatis generate username & password
4. Edge Functions kirim email (Resend) & WhatsApp (Fonnte)
5. User terima kredensial → Login → Reset password

🚀 **Siap diimplementasikan!**
