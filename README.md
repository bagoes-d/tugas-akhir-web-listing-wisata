# ✨ BagoesExplore — Indonesian Tourism Discovery Platform

[![React](https://img.shields.io/badge/React-19.2-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-8.0-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![React Router](https://img.shields.io/badge/React_Router-7.1-CA4245?style=for-the-badge&logo=react-router&logoColor=white)](https://reactrouter.com/)
[![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/)

**BagoesExplore** adalah platform eksplorasi destinasi wisata Indonesia yang dibangun untuk memberikan pengalaman visual yang memukau dan informatif. Proyek ini dikembangkan sebagai **Tugas Akhir Pemrograman Web** dengan fokus pada performa tinggi, antarmuka modern, dan interaktivitas cerdas.

---

## ✨ Fitur Utama

### 🌌 Premium Glassmorphism UI
Antarmuka bertema gelap yang elegan dengan efek *blur* transparan (Glassmorphism), tipografi yang tajam, dan palet warna *Emerald-Cyan* untuk kesan mewah dan modern.

### 🧠 AI Smart Insight
Fitur unggulan yang memberikan tips perjalanan personal (rute terbaik, waktu kunjungan, dan fasilitas unggulan) yang disesuaikan secara dinamis untuk setiap destinasi unik.

### 🎯 Interaktivitas Cerdas
- **Dynamic Filtering**: Filter kategori (Alam, Pantai, Bersejarah, dll) dengan counter otomatis.
- **Smooth Scrolling**: Navigasi mulus menggunakan interaksi berbasis ID.
- **Hover Micro-interactions**: Efek kartu yang responsif dan animasi *floating* pada hero section.

### 📱 Responsif & Adaptif
Optimal di semua perangkat, mulai dari layar desktop lebar hingga perangkat seluler terkecil.

---

## 🛠️ Tech Stack

| Teknologi | Kegunaan |
|-----------|----------|
| **React 19** | Library UI utama untuk manajemen komponen |
| **Vite** | Tool *build* super cepat untuk pengalaman pengembangan maksimal |
| **React Router 7** | Manajemen navigasi dan *dynamic routing* halaman detail |
| **CSS3 Hooks** | Custom animations dan variabel desain sistem |
| **JSON API** | Manajemen data lokal untuk kemudahan skalabilitas |

---

## 🚀 Menjalankan Proyek

### 📋 Prasyarat
- **Node.js** (Versi 16 atau lebih baru)
- Browser modern (Chrome, Edge, Safari, Firefox)

### 💻 Instalasi Lokal

1. **Clone & Masuk ke Folder**
   ```bash
   cd tugas-akhir-web-listing-wisata
   ```

2. **Install Dependensi**
   ```bash
   npm install
   ```

3. **Jalankan Mode Pengembangan**
   ```bash
   npm run dev
   ```

4. **Akses di Browser**
   Buka `http://localhost:5173`

---

## 📂 Struktur Proyek

```text
src/
├── components/   # Komponen UI (Navbar, Hero, Footer, Card)
├── data/         # Sumber data utama (wisata.json)
├── pages/        # Halaman utama (Home.jsx, Detail.jsx)
├── styles/       # File CSS terpisah untuk modularitas
└── App.jsx       # Routing dan entry point aplikasi
```

---

## 📊 Format Data (`wisata.json`)

Data dikelola secara terpusat agar mudah untuk ditambah atau diedit tanpa menyentuh kode program:

```json
{
  "id": 1,
  "nama": "Candi Borobudur",
  "lokasi": "Magelang, Jawa Tengah",
  "rating": 4.8,
  "harga": 35000,
  "gambar": "/images/candi borobudur.jpg",
  "kategori": "Bersejarah"
}
```

3. Buka alamat yang ditampilkan di terminal, biasanya `http://localhost:5173`

> Jika ingin menggunakan server statis lain, jalankan build terlebih dahulu dengan `npm run build` dan layani folder `dist`.

## 🧭 Struktur Proyek

- `src/pages/Home.jsx` — halaman utama daftar destinasi dan filter
- `src/components/Card.jsx` — komponen kartu destinasi
- `public/wisata.json` — data destinasi yang dimuat dengan `fetch`
- `src/styles/*` — styling tampilan website
- `public/images/` — folder aset gambar lokal destinasi
- `README.md` — dokumentasi proyek

## 📁 Format Data (`public/wisata.json`)

Contoh objek data:

```json
{
  "id": 1,
  "nama": "Candi Borobudur",
  "lokasi": "Magelang, Jawa Tengah",
  "deskripsi": "Candi Borobudur adalah candi Buddha terbesar di dunia...",
  "rating": 4.8,
  "harga": 35000,
  "gambar": "/images/candi borobudur.jpg",
  "jam": "06:00 - 17:00",
  "kategori": "Bersejarah"
}
```

- `nama`: string — nama destinasi
- `lokasi`: string — lokasi atau provinsi
- `deskripsi`: string — cuplikan penjelasan destinasi
- `rating`: number — skor rating destinasi
- `harga`: number atau string — harga tiket atau deskripsi harga
- `gambar`: string — path relatif atau URL gambar
- `jam`: string — jam buka
- `kategori`: string — kategori destinasi

## 🔧 Pengembangan & Debugging

- Untuk menambah destinasi, edit `public/wisata.json` dan tambahkan objek baru
- Pastikan format JSON valid setelah mengedit
- Jika data tidak muncul, refresh browser atau restart `npm run dev`

### Debugging cepat

1. Buka DevTools (F12) → Console untuk melihat error fetch
2. Pastikan `public/wisata.json` tersedia di `http://localhost:5173/wisata.json`
3. Periksa path gambar jika gambar tidak tampil

## ✅ Pengujian Manual

### Test: Memuat Daftar

1. Buka aplikasi di browser
2. Pastikan semua kartu destinasi muncul
3. Verifikasi nama, kategori, rating, lokasi, dan harga tampil dengan benar

### Test: Filter Kategori

1. Klik salah satu kategori di bagian filter
2. Pastikan kartu destinasi sesuai kategori terfilter

### Test: Harga

1. Periksa tampilan harga untuk data numerik dan string
2. Jika harga berupa string seperti `Rp 15.000`, harus tampil dengan benar

## 🎨 Styling & UX

- Layout menggunakan kartu modern dengan background gelap
- Efek hover lembut dan transisi untuk interaksi lebih rapi
- Responsif untuk layar desktop dan perangkat kecil

## ⚙️ Dependensi

- Proyek ini dibuat dengan React dan Vite
- Tidak ada dependensi tambahan yang wajib selain paket default Vite

## 🐛 Troubleshooting

- Data tidak muncul: jalankan `npm run dev` dan pastikan `public/wisata.json` dapat diakses
- Gambar tidak tampil: periksa kembali path di `public/wisata.json`
- Error saat build: jalankan `npm install` lalu `npm run build`

## 📚 Referensi

- React + Vite untuk aplikasi web modern
- Fetch API untuk memuat data JSON lokal

## 🎓 Tujuan Proyek

Membuat website listing destinasi wisata sebagai tugas akhir Pemrograman Web, menampilkan kemampuan membuat aplikasi interaktif dengan data JSON lokal, React, dan desain responsif.

## ✉️ Kontak

Pembuat: Bagoes Wahyu Untoro
