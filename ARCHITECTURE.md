# 🌍 Aplikasi Wisata Indonesia - Project Documentation

## 📋 Project Overview
Aplikasi Wisata Indonesia adalah aplikasi web modern untuk menjelajahi destinasi wisata Indonesia. Dibangun dengan React, Vite, dan React Router.

## 🏗️ Project Architecture

### Folder Structure
```
src/
├── assets/              # Gambar statis, logo, dan ikon global
├── components/          # Komponen UI yang dapat digunakan kembali
│   ├── Navbar.jsx       # Menu navigasi atas dengan logo
│   ├── Footer.jsx       # Footer dengan informasi kontak
│   └── Card.jsx         # Kartu destinasi wisata (reusable)
├── data/                # File JSON statis
│   └── wisata.json      # Data destinasi wisata
├── pages/               # Komponen halaman utama
│   ├── Home.jsx         # Halaman utama - Daftar semua wisata + filter
│   └── Detail.jsx       # Halaman detail destinasi wisata
├── styles/              # File CSS terorganisir
│   ├── App.css          # Style utama aplikasi
│   ├── Navbar.css       # Style navbar
│   ├── Footer.css       # Style footer
│   ├── Card.css         # Style kartu wisata
│   ├── Home.css         # Style halaman home
│   └── Detail.css       # Style halaman detail
├── App.jsx              # Komponen utama dengan routing
├── App.css              # Global styles
├── main.jsx             # Entry point React
└── index.css            # Base styles
```

## 🎨 Key Features

### 1. **Navbar Component**
- Logo dengan emoji 🌍
- Link navigasi (Home, Tentang, Kontak)
- Design gradient modern (purple to pink)
- Sticky positioning

### 2. **Card Component**
- Menampilkan gambar dari Unsplash
- Badge kategori
- Rating dengan bintang ⭐
- Harga tiket (bisa gratis)
- Deskripsi singkat
- Hover effect dengan transform

### 3. **Home Page**
- Hero section dengan gradient background
- Filter kategori (Bersejarah, Pantai, Alam)
- Grid layout responsive untuk kartu
- Menampilkan jumlah hasil

### 4. **Detail Page**
- Gambar hero dengan overlay gradient
- Info detail: Lokasi, Rating, Harga, Jam Buka
- Deskripsi lengkap
- Fasilitas yang tersedia
- Tombol Pesan & Hubungi
- Rekomendasi wisata lainnya

### 5. **Footer Component**
- Informasi tentang aplikasi
- Link tautan
- Informasi kontak
- Copyright

## 🗂️ Data Structure (wisata.json)
```json
{
  "id": 1,
  "nama": "Nama Destinasi",
  "lokasi": "Lokasi",
  "deskripsi": "Deskripsi lengkap",
  "rating": 4.8,
  "harga": 35000,
  "gambar": "URL Unsplash",
  "jam": "06:00 - 17:00",
  "kategori": "Bersejarah"
}
```

## 🎯 Data Integration

### Dummy Data
Aplikasi menggunakan 6 destinasi wisata populer Indonesia:
1. **Candi Borobudur** - Bersejarah
2. **Pantai Kuta** - Pantai
3. **Taman Nasional Komodo** - Alam
4. **Gunung Bromo** - Alam
5. **Raja Ampat** - Pantai
6. **Keraton Yogyakarta** - Bersejarah

### Image Integration
- Semua gambar menggunakan URL publik dari **Unsplash**
- Format: `https://images.unsplash.com/photo-{id}?w=600&h=400&fit=crop`
- Responsive dan lazy-loading compatible

## 🚀 Component Flow

```
App.jsx (Router)
├── Navbar
├── Home Page
│   ├── Card (Multiple)
│   │   └── onClick → Navigate to Detail
│   └── Filter Buttons
├── Detail Page
│   ├── Detail Info
│   ├── Description
│   └── Recommendations (Mini Cards)
└── Footer
```

## 📱 Responsive Design

### Breakpoints
- **Desktop (≥1024px)**: Full grid layout (3-4 columns)
- **Tablet (768px-1024px)**: 2 columns
- **Mobile (<768px)**: 1 column stack

### Mobile Optimizations
- Hamburger-friendly navigation
- Touch-friendly buttons
- Optimized font sizes
- Responsive images

## 🎨 Color Scheme
- **Primary**: Purple (#667eea) to Pink (#764ba2) Gradient
- **Accent**: Yellow (#f39c12) for ratings
- **Success**: Green (#27ae60) for prices
- **Text**: Dark Gray (#333)
- **Background**: Light Gray (#f8f9fa)

## 🔄 Routing

| Route | Component | Deskripsi |
|-------|-----------|-----------|
| `/` | Home.jsx | Halaman utama daftar wisata |
| `/detail/:id` | Detail.jsx | Halaman detail destinasi |

## 📦 Dependencies
- **react**: ^19.2.6
- **react-dom**: ^19.2.6
- **react-router-dom**: ^7.17.0

## 🚀 Getting Started

### Installation
```bash
npm install
```

### Development
```bash
npm run dev
```

### Build
```bash
npm run build
```

## 💡 Future Enhancements
- [ ] API Integration (Replace dummy data)
- [ ] User Authentication (Login/Register)
- [ ] Booking System
- [ ] User Reviews & Comments
- [ ] Search Functionality
- [ ] Map Integration (Google Maps)
- [ ] Admin Panel
- [ ] Payment Gateway Integration
- [ ] Weather API Integration
- [ ] Share to Social Media

## 📧 Contact Integration Points
- Email: info@wisataindonesia.com
- Phone: +62 123-456-7890
- Location: Indonesia

---

**Version**: 1.0.0  
**Last Updated**: 2024  
**Author**: WisataIndo Team
