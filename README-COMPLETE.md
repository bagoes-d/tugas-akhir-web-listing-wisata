# 🌍 Aplikasi Wisata Indonesia

Aplikasi web modern untuk menjelajahi destinasi wisata terbaik di Indonesia dengan desain responsif dan UI yang menarik.

![React](https://img.shields.io/badge/React-19.2.6-blue)
![Vite](https://img.shields.io/badge/Vite-8.0.12-purple)
![React Router](https://img.shields.io/badge/React%20Router-7.17.0-green)
![Status](https://img.shields.io/badge/Status-Active-success)

## 🎯 Fitur Utama

✅ **Tampilan Destinasi Wisata**
- Grid layout responsif menampilkan 6 destinasi wisata Indonesia
- Setiap kartu menampilkan foto, rating, harga, dan deskripsi singkat
- Gambar dari Unsplash (API publik)

✅ **Filter Kategori**
- Filter dinamis berdasarkan kategori: Bersejarah, Pantai, Alam, Semua
- Counter otomatis menunjukkan jumlah destinasi

✅ **Detail Destinasi**
- Halaman detail dengan informasi lengkap
- Lokasi, rating, harga tiket, jam buka
- Deskripsi panjang dan fasilitas
- Tombol booking dan kontak
- Rekomendasi destinasi lainnya

✅ **Navigasi Modern**
- Navbar sticky dengan logo dan menu
- Footer dengan informasi kontak
- React Router untuk navigasi halaman

✅ **Desain Responsif**
- Mobile-first approach
- Breakpoints: Desktop, Tablet, Mobile
- Touch-friendly interface

## 📦 Tech Stack

| Technology | Version | Purpose |
|-----------|---------|---------|
| **React** | 19.2.6 | UI Library |
| **Vite** | 8.0.12 | Build Tool & Dev Server |
| **React Router** | 7.17.0 | Client-side Routing |
| **CSS3** | - | Styling & Layout |

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ 
- npm atau yarn

### Installation
```bash
# Clone atau extract project
cd aplikasi-wisata

# Install dependencies
npm install
```

### Development
```bash
# Start dev server
npm run dev

# Output:
# ➜  Local:   http://localhost:5175/
```

### Build
```bash
# Build untuk production
npm run build

# Output files di folder: dist/
```

### Preview
```bash
# Preview production build
npm run preview
```

## 📁 Project Structure

```
aplikasi-wisata/
├── src/
│   ├── assets/              # Static files
│   ├── components/          # Reusable components
│   │   ├── Navbar.jsx       # Navigation bar
│   │   ├── Footer.jsx       # Footer component
│   │   └── Card.jsx         # Destination card
│   ├── data/
│   │   └── wisata.json      # Tourism data
│   ├── pages/               # Page components
│   │   ├── Home.jsx         # Home page
│   │   └── Detail.jsx       # Detail page
│   ├── styles/              # CSS files
│   │   ├── App.css
│   │   ├── Navbar.css
│   │   ├── Footer.css
│   │   ├── Card.css
│   │   ├── Home.css
│   │   └── Detail.css
│   ├── App.jsx              # Main app component
│   ├── App.css              # Global styles
│   ├── main.jsx             # Entry point
│   └── index.css            # Base styles
├── public/                  # Public assets
├── package.json             # Dependencies
├── vite.config.js           # Vite config
├── eslint.config.js         # ESLint config
├── ARCHITECTURE.md          # Architecture docs
└── README.md                # This file
```

## 🎨 Design System

### Color Palette
```
Primary:     #667eea (Purple)
Secondary:   #764ba2 (Pink)
Success:     #27ae60 (Green)
Warning:     #f39c12 (Orange)
Background:  #f8f9fa (Light Gray)
Text:        #333333 (Dark Gray)
```

### Typography
- Font: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif
- Line Height: 1.6
- Font Sizes: Responsive (scalable)

### Spacing
- Base Unit: 1rem (16px)
- Gap: 0.5rem - 3rem
- Padding: 0.5rem - 2rem

## 📊 Data Structure

### Destinasi Wisata (wisata.json)

```json
{
  "id": 1,
  "nama": "Candi Borobudur",
  "lokasi": "Magelang, Jawa Tengah",
  "deskripsi": "Candi Buddha terbesar di dunia...",
  "rating": 4.8,
  "harga": 35000,
  "gambar": "https://images.unsplash.com/...",
  "jam": "06:00 - 17:00",
  "kategori": "Bersejarah"
}
```

### Fields Explanation
| Field | Type | Description |
|-------|------|-------------|
| `id` | number | Unique identifier |
| `nama` | string | Destination name |
| `lokasi` | string | Location |
| `deskripsi` | string | Long description |
| `rating` | number | Rating out of 5 |
| `harga` | number | Ticket price (IDR) |
| `gambar` | string | Image URL |
| `jam` | string | Operating hours |
| `kategori` | string | Category |

## 🌍 Dummy Data - 6 Destinasi
## 🌍 Dummy Data - 9 Destinasi

| No | Nama | Lokasi | Kategori | Rating | Harga |
|----|------|--------|----------|--------|-------|
| 1 | Candi Borobudur | Magelang, JT | Bersejarah | 4.8 | Rp 35.000 |
| 2 | Pantai Kuta | Bali | Pantai | 4.6 | Rp 20.000 |
| 3 | Taman Nasional Komodo | NTT | Alam | 4.7 | Rp 150.000 |
| 4 | Gunung Sindoro | Magelang, JT | Alam | 4.9 | Rp 75.000 |
| 5 | Raja Ampat | Papua Barat | Pantai | 4.9 | Rp 500.000 |
| 6 | Keraton Yogyakarta | Yogyakarta | Bersejarah | 4.5 | Rp 25.000 |
| 7 | Kawah Ijen | Banyuwangi, JT | Gunung | 4.8 | Rp 15.000 |
| 8 | Desa Penglipuran | Bangli, Bali | Kebudayaan | 4.9 | Rp 25.000 |
| 9 | Danau Toba | Sumatera Utara | Alam | 4.7 | Gratis |

## 🎯 Routes

```
Route: /
└── Home Page
    ├── Hero Section
    ├── Category Filter
    └── Destination Grid
        └── Click Card → Route: /detail/:id
            └── Detail Page
                ├── Hero Image
                ├── Detail Info
                ├── Description
                ├── Facilities
                └── Recommendations
```

## 📱 Responsive Breakpoints

```css
/* Desktop */
@media (min-width: 1024px)
  - 3-4 columns grid
  - Full navigation
  - Large hero section

/* Tablet */
@media (max-width: 1024px)
  - 2 columns grid
  - Adapted font sizes
  - Optimized spacing

/* Mobile */
@media (max-width: 768px)
  - 1 column layout
  - Responsive images
  - Touch-friendly buttons
  - Compact navigation
```

## 🔗 Image Integration

### Unsplash API
- **Provider**: Unsplash (free stock photos)
- **Format**: `https://images.unsplash.com/photo-{ID}?w={WIDTH}&h={HEIGHT}&fit=crop`
- **Resolution**: 600x400px
- **No Authentication**: Publik URL

### Image URLs
```
1. Candi Borobudur
   https://images.unsplash.com/photo-1537225228614-b19ebf8a0db4?w=600&h=400&fit=crop

2. Pantai Kuta
   https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=600&h=400&fit=crop

3. Komodo
   https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop

... dan seterusnya
```

## 🎮 User Interactions

### Home Page
1. **Filter by Category**
   - Click kategori button → Update grid
   - Shows count: "Destinasi Wisata (X)"

2. **Click Card**
   - Navigate to detail page
   - Card has hover effect

### Detail Page
1. **View Details**
   - See full description
   - Check facilities
   - View operating hours

2. **Action Buttons**
   - "Pesan Tiket" (Booking)
   - "Hubungi Info" (Contact)

3. **Recommendations**
   - See similar destinations
   - Mini cards at bottom

## 🔄 Component Hierarchy

```
<App>
├── <Router>
│   ├── <Navbar>
│   ├── <Routes>
│   │   ├── <Home>
│   │   │   ├── <Card>
│   │   │   ├── <Card>
│   │   │   └── <Card>
│   │   └── <Detail>
│   │       └── <MiniCard>
│   └── <Footer>
```

## 🌐 Cloud & Deployment Considerations

### Current Setup
- ✅ Static site (no backend required)
- ✅ All data in JSON file
- ✅ Runs on any web server

### Future Deployment Options
1. **Vercel** (recommended)
   - Free tier available
   - Auto-deploy from GitHub
   - Fast edge network

2. **Netlify**
   - Similar to Vercel
   - Great CLI

3. **GitHub Pages**
   - Free hosting
   - Custom domain support

4. **Azure Static Web Apps**
   - Microsoft cloud
   - Integrated CI/CD

### Environment Variables (Future)
```env
VITE_API_URL=https://api.wisata.com
VITE_ENABLE_ANALYTICS=true
```

## 📝 Available Scripts

```bash
# Development
npm run dev          # Start dev server

# Production
npm build            # Build for production
npm run preview      # Preview production build

# Linting
npm run lint         # Run ESLint
```

## 🐛 Troubleshooting

### Port Already in Use
```bash
# Vite automatically tries another port
# Check output for the actual port number
# Default: 5175, if busy: 5174, 5173, etc.
```

### Images Not Loading
- Check internet connection
- Unsplash URLs are public, no auth needed
- Browser blocking might be in effect

### Styling Issues
- Clear browser cache (Ctrl+Shift+Delete)
- Check CSS file paths are correct
- Verify CSS files in `src/styles/` folder

## 🔐 Security Notes

- ✅ No sensitive data stored
- ✅ Client-side only
- ✅ No authentication required
- ✅ Public images from Unsplash

## 📈 Performance

- ✅ Lightweight (~50KB gzipped)
- ✅ Fast page load
- ✅ Smooth animations
- ✅ Optimized images

## 🎓 Learning Resources

- [React Documentation](https://react.dev)
- [Vite Guide](https://vite.dev)
- [React Router Docs](https://reactrouter.com)
- [CSS Flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout)
- [CSS Grid](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout)

## 🚀 Future Enhancements

- [ ] Backend API Integration
- [ ] User Authentication
- [ ] Booking System
- [ ] User Reviews & Ratings
- [ ] Search Functionality
- [ ] Google Maps Integration
- [ ] Admin Panel
- [ ] Payment Gateway
- [ ] Weather API
- [ ] Social Media Sharing
- [ ] Mobile App (React Native)
- [ ] Dark Mode
- [ ] Multi-language Support
- [ ] SEO Optimization
- [ ] Analytics Integration

## 👥 Contributors

- **Developer**: WisataIndo Team
- **Version**: 1.0.0
- **Last Updated**: 2024

## 📄 License

Free to use for educational and commercial purposes.

## 📧 Contact

- Email: info@wisataindonesia.com
- Phone: +62 123-456-7890
- Location: Indonesia
- Website: [Coming Soon]

---

**Made with ❤️ by WisataIndo Team**

*Jelajahi keindahan Indonesia bersama kami* 🌴🏖️⛰️
