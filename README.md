# ASN CRUD App (Vercel + Neon)

## Setup
1. Vercel → **Settings → Environment Variables**:
   - `DATABASE_URL = postgresql://USER:PASSWORD@HOST/asn_db?sslmode=require`
2. (Opsional) Buat tabel: kirim **POST** ke `/api/init` (Postman/Hoppscotch).
3. Cek `/api/health` (harus `ok: true`). Cek `/api/asn` (GET) mengembalikan array.
4. Deploy dengan **Clear cache** jika mengganti file.

## Jalankan lokal
```bash
npm i
npm run dev
```
(Backend Vercel Functions berjalan di cloud saat deploy. Untuk lokal lengkap bisa pakai `vercel dev` bila memakai Vercel CLI.)

## Routes
- API:
  - `GET    /api/asn` — list
  - `POST   /api/asn` — create
  - `GET    /api/asn/:id` — detail
  - `PUT    /api/asn/:id` — update
  - `DELETE /api/asn/:id` — delete
  - `GET    /api/health` — cek DB
  - `POST   /api/init` — create table
- UI:
  - `/#/dashboard`, `/#/input`, `/#/data`, `/#/notifikasi`
