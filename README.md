# JelajahRaya — Web Listing Destinasi Wisata

Sebuah aplikasi web listing destinasi wisata sederhana untuk tugas akhir Pemrograman Web. 
Proyek ini menampilkan daftar destinasi wisata Indonesia dengan data JSON lokal dan desain responsif.

## ✨ Fitur Utama

- Kartu destinasi dengan gambar, nama, kategori, lokasi, rating, dan cuplikan deskripsi
- Data dimuat menggunakan `fetch` dari `public/wisata.json`
- Filter kategori untuk menampilkan destinasi berdasarkan minat
- Responsif untuk desktop dan mobile
- Mudah dikembangkan dan diedit melalui file JSON lokal

## 🚀 Quick Start

### Prasyarat

- Browser modern (Chrome, Firefox, Edge)
- Node.js terpasang jika ingin menjalankan project dengan Vite

### Menjalankan Secara Lokal

1. Buka folder proyek di VS Code
2. Jalankan perintah:

```bash
npm install
npm run dev
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
