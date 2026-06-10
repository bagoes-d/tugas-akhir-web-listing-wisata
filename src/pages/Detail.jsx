import { useParams, Link } from 'react-router-dom';
import { useEffect, useMemo, useState } from 'react';
import '../styles/Detail.css';
 
// Fallback data agar 100% aman saat JSON tidak sesuai atau tidak ditemukan
const fallbackWisataById = {
  1: {
    id: 1,
    nama: 'Candi Borobudur',
    lokasi: 'Magelang, Jawa Tengah',
    deskripsi: 'Candi Borobudur adalah candi Buddha terbesar di dunia yang dibangun pada abad ke-8. Arsitektur yang megah dengan ribuan patung Buddha menghiasi setiap sudutnya.',
    rating: 4.8,
    harga: 35000,
    gambar: 'https://images.unsplash.com/photo-1596402184320-417e7178b2cd?auto=format&fit=crop&w=1200&q=80', // Unsplash URL
    jam: '08:00 - 17:00',
    kategori: 'Bersejarah',
  },
  2: {
    id: 2,
    nama: 'Pantai Kuta',
    lokasi: 'Bali',
    deskripsi: 'Pantai indah dengan pasir putih dan ombak yang sempurna untuk surfing. Terkenal dengan sunset yang memukau dan berbagai aktivitas pantai.',
    rating: 4.6,
    harga: 20000,
    gambar: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=1200&q=80', // Unsplash URL
    jam: 'Bebas',
    kategori: 'Pantai',
  },
  3: {
    id: 3,
    nama: 'Taman Nasional Komodo',
    lokasi: 'Nusa Tenggara Timur',
    deskripsi: 'Rumah bagi komodo raksasa dan keindahan alam yang luar biasa. Menawarkan petualangan hiking dan diving dengan pemandangan laut yang spektakuler.',
    rating: 4.6,
    harga: 150000,
    gambar: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1200&q=80', // Unsplash URL
    jam: '07:00 - 18:00',
    kategori: 'Alam',
  },
  4: {
    id: 4,
    nama: 'Gunung Sindoro',
    lokasi: 'Magelang, Jawa Tengah',
    deskripsi: 'Gunung berapi aktif dengan pemandangan lautan pasir yang menakjubkan. Tempat terbaik untuk menyaksikan sunrise di atas awan.',
    rating: 4.9,
    harga: 75000,
    gambar: 'https://images.unsplash.com/photo-1627546059253-833e0bc9df5f?w=1200&q=80', // Unsplash URL
    jam: '05:00 - 16:00',
    kategori: 'Alam',
  },
  5: {
    id: 5,
    nama: 'Raja Ampat',
    lokasi: 'Papua Barat',
    deskripsi: 'Destinasi diving terbaik di dunia dengan keanekaragaman terumbu karang dan kehidupan laut yang luar biasa kaya.',
    rating: 4.9,
    harga: 500000,
    gambar: 'https://images.unsplash.com/photo-1516690561799-46d8f74f90f6?w=1200&q=80', // Unsplash URL
    jam: '24 jam',
    kategori: 'Pantai',
  },
  6: {
    id: 6,
    nama: 'Keraton Yogyakarta',
    lokasi: 'Yogyakarta',
    deskripsi: 'Istana tradisional Jawa yang masih dihuni oleh keluarga kerajaan. Menampilkan arsitektur Jawa yang indah dan kaya akan sejarah.',
    rating: 4.5,
    harga: 25000,
    gambar: 'https://images.unsplash.com/photo-1570191913384-7b3ff1f43505?w=1200&q=80', // Unsplash URL
    jam: '08:30 - 14:30',
    kategori: 'Bersejarah',
  },
  7: {
    id: 7,
    nama: 'Kawah Ijen',
    lokasi: 'Banyuwangi, Jawa Timur',
    deskripsi: 'Terkenal dengan fenomena langka Api Biru (Blue Fire) yang mendunia dan keindahan kawah asam berwarna hijau toska.',
    rating: 4.8,
    harga: 'Rp 15.000',
    gambar: 'https://images.unsplash.com/photo-1621271104301-443b7405be1b?w=1200&q=80', // Unsplash URL
    jam: '04:00 - 17:00',
    kategori: 'Gunung',
  },
  8: {
    id: 8,
    nama: 'Desa Penglipuran',
    lokasi: 'Bangli, Bali',
    deskripsi: 'Salah satu desa terbersih di dunia yang mempertahankan tata ruang tradisional dan kelestarian budaya adat Bali.',
    rating: 4.9,
    harga: 'Rp 25.000',
    gambar: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?w=1200&q=80', // Unsplash URL
    jam: '08:00 - 18:00',
    kategori: 'Kebudayaan',
  },
  9: {
    id: 9,
    nama: 'Danau Toba',
    lokasi: 'Sumatera Utara',
    deskripsi: 'Danau vulkanik terbesar di dunia dengan pulau Samosir di tengahnya. Menawarkan pemandangan alam yang memukau dan budaya Batak yang kaya.',
    rating: 4.7,
    harga: 0, // Gratis
    gambar: 'https://images.unsplash.com/photo-1579703444400-d8615b31093c?w=1200&q=80',
    kategori: 'Alam',
    jam: '24 jam',
  },
};

// Data Insight Spesifik per Destinasi untuk efek "Wah"
const aiInsightsData = {
  1: { // Borobudur
    rute: "Datanglah pukul 06:00 WIB. Gunakan sandal khusus (Upanat) yang disediakan untuk menjaga kelestarian struktur batu candi.",
    fasilitas: "Audio guide digital tersedia via QR Code dan lift khusus disabilitas di sisi timur candi.",
    aktivitas: "Sangat disarankan untuk mengikuti paket 'Pradaksina' guna memahami filosofi relief secara mendalam."
  },
  2: { // Pantai Kuta
    rute: "Hindari jalan utama saat sore hari karena macet. Gunakan sepeda motor atau jalan kaki dari area Legian.",
    fasilitas: "Tersedia banyak shower umum gratis dan area parkir luas di sisi utara pantai.",
    aktivitas: "Waktu terbaik untuk belajar surfing bagi pemula adalah pagi hari saat ombak lebih tenang."
  },
  3: { // Komodo
    rute: "Pesan kapal cepat (Speedboat) dari Labuan Bajo pukul 07:00. Pastikan fisik fit untuk trekking di Pulau Padar.",
    fasilitas: "Wajib didampingi Ranger (Naturalist Guide). Tersedia pos kesehatan di Pulau Komodo dan Rinca.",
    aktivitas: "Snorkeling di Pink Beach adalah aktivitas wajib setelah melihat Komodo di habitat aslinya."
  },
  4: { // Sindoro
    rute: "Gunakan jalur Kledung untuk pemula. Mulailah pendakian pukul 01:00 malam untuk mengejar samudera awan.",
    fasilitas: "Basecamp yang nyaman dengan fasilitas logistik lengkap dan ojek gunung hingga Pos 1.",
    aktivitas: "Camping di area sabana sebelum puncak untuk menikmati pemandangan bintang (milky way) yang jernih."
  },
  5: { // Raja Ampat
    rute: "Terbang ke Sorong, lalu lanjut feri ke Waisai. Koordinasikan jemputan homestay jauh-jauh hari.",
    fasilitas: "Homestay apung dengan kearifan lokal. Listrik biasanya tersedia terbatas dari sore hingga malam.",
    aktivitas: "Bird watching burung Cendrawasih di pagi buta dan diving di spot 'Blue Magic' yang ikonik."
  },
  6: { // Keraton
    rute: "Masuk melalui pintu depan Alun-alun Utara. Perhatikan jam tutup yang lebih awal (pukul 14:00).",
    fasilitas: "Pemandu wisata (Abdi Dalem) yang sangat informatif dan pertunjukan seni di bangsal kencana.",
    aktivitas: "Melihat koleksi kereta kencana keraton dan belajar tata krama budaya Jawa secara langsung."
  },
  7: { // Kawah Ijen
    rute: "Mulai pendakian pukul 01:00 dini hari dari Paltuding agar sempat melihat fenomena Api Biru sebelum subuh.",
    fasilitas: "Penyewaan masker gas standar di gerbang masuk. Tersedia jasa troli bagi yang kelelahan.",
    aktivitas: "Menyaksikan aktivitas penambang belerang dan melihat danau asam hijau toska saat matahari terbit."
  },
  8: { // Penglipuran
    rute: "Akses sangat mudah dari Kintamani. Parkir kendaraan di area luar karena desa ini bebas kendaraan bermotor.",
    fasilitas: "Rumah-rumah warga terbuka untuk umum. Toilet bersih tersedia di setiap sudut gang desa.",
    aktivitas: "Mencicipi minuman khas 'Loloh Cemcem' dan berfoto menggunakan pakaian adat Bali di area hutan bambu."
  },
  9: { // Danau Toba
    rute: "Terbang ke Kualanamu (Medan), lalu lanjutkan perjalanan darat sekitar 4-5 jam. Pertimbangkan menginap di Pulau Samosir.",
    fasilitas: "Banyak pilihan penginapan mulai dari homestay hingga resort. Tersedia kapal penyeberangan rutin ke Samosir.",
    aktivitas: "Menjelajahi budaya Batak di Tomok, berenang di danau, atau menyewa sepeda motor untuk keliling Samosir."
  }
};


export default function Detail() {
  const { id } = useParams();
  const parsedId = useMemo(() => {
    const n = parseInt(id, 10);
    return Number.isFinite(n) ? n : null;
  }, [id]);

  const [wisata, setWisata] = useState(null);
  const [allWisata, setAllWisata] = useState([]); // State untuk rekomendasi
  const [loading, setLoading] = useState(true); // State untuk loading

  useEffect(() => {
    window.scrollTo(0, 0);
    setLoading(true); // Set loading true saat mulai fetch
    
    // Mengambil data menggunakan FETCH (Syarat Nilai 90-100)
    fetch('/wisata.json') // Mengambil dari folder public
      .then((res) => res.json())
      .then((data) => {
        const list = data?.wisata || [];
        setAllWisata(list); // Simpan semua data untuk rekomendasi
        
        const found = list.find((w) => Number(w.id) === parsedId);
        if (found) {
          setWisata(found);
        } else {
          setWisata(fallbackWisataById[parsedId] || null); // Gunakan fallback jika tidak ditemukan
        }
        setLoading(false); // Set loading false setelah data didapat
      })
      .catch((err) => {
        console.error("Gagal memuat data:", err);
        setWisata(fallbackWisataById[parsedId] || null); // Gunakan fallback jika fetch gagal
        setLoading(false); // Set loading false meskipun ada error
      });
  }, [parsedId]);

  if (loading) { // Tampilkan loading state
    return <div className="detail-container"><div className="loading">Memuat informasi...</div></div>;
  }

  if (!wisata) { // Jika tidak ada wisata setelah loading
    return (
      <div className="detail-container">
        <div className="loading">
          <p>Wisata tidak ditemukan</p>
          <Link to="/" className="back-button">
            Kembali ke Home
          </Link>
        </div>
      </div>
    );
  }

  // Ambil insight berdasarkan ID, jika tidak ada gunakan default kategori
  const insight = aiInsightsData[wisata.id] || {
    rute: "Rencanakan perjalanan Anda lebih awal untuk menghindari keramaian.",
    fasilitas: "Fasilitas umum seperti toilet dan tempat istirahat tersedia di lokasi.",
    aktivitas: "Jangan lupa membawa kamera untuk mengabadikan momen spesial Anda."
  };

  return (
    <div className="detail-container">
      <Link to="/" className="back-button">
        ← Kembali
      </Link>

      <div className="detail-header">
        <img
          src={wisata.gambar}
          alt={wisata.nama}
          className="detail-image"
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src = fallbackWisataById[parsedId]?.gambar || '';
          }}
        />
        <div className="detail-overlay">
          <h1>{wisata.nama}</h1>
          <div className="header-badges">
            <span className="kategori-badge">{wisata.kategori}</span>
            <span className="rating-badge">⭐ {wisata.rating}</span>
          </div>
        </div>
      </div>

      <div className="detail-content">
        <div className="detail-info">
          <div className="info-item">
            <h3>📍 Lokasi</h3>
            <p>{wisata.lokasi}</p>
          </div>

          <div className="info-item">
            <h3>⭐ Rating</h3>
            <p className="rating">{wisata.rating}/5.0</p>
          </div>

          <div className="info-item">
            <h3>💰 Harga Tiket</h3>
            <p className="harga">
              {typeof wisata.harga === 'number' 
                ? (wisata.harga > 0 ? `Rp ${wisata.harga.toLocaleString('id-ID')}` : 'Gratis')
                : wisata.harga
              }
            </p>
          </div>

          <div className="info-item">
            <h3>🕐 Jam Buka</h3>
            <p>{wisata.jam}</p>
          </div>
        </div>

        <div className="detail-description">
          <h2>Deskripsi</h2>
          <p>{wisata.deskripsi}</p>

          <h3>Fasilitas</h3>
          <ul>
            <li>✅ Area Parkir</li>
            <li>✅ Toilet & Mushola</li>
            <li>✅ Cafe & Restoran</li>
            <li>✅ Guide Profesional</li>
            <li>✅ Area Istirahat</li>
          </ul>

          <div className="action-buttons">
            <button className="btn-pesan">Pesan Tiket</button>
            <button className="btn-hubungi">Hubungi Info</button>
          </div>
        </div>
      </div>

      <section className="ai-insight">
        <div className="ai-header">
          <span className="ai-badge">AI SMART INSIGHT</span>
          <h2>Tips Perjalanan Personal Kamu</h2>
        </div>
        <div className="insight-grid">
          <div className="insight-box">
            <div className="insight-icon">📍</div>
            <h4>Rute & Waktu</h4>
            <p>{insight.rute}</p>
          </div>
          <div className="insight-box">
            <div className="insight-icon">✨</div>
            <h4>Fasilitas Unggulan</h4>
            <p>{insight.fasilitas}</p>
          </div>
          <div className="insight-box">
            <div className="insight-icon">🎯</div>
            <h4>Aktivitas Mood</h4>
            <p>{insight.aktivitas}</p>
          </div>
        </div>
      </section>

      <section className="wisata-serupa">
        <h2>Rekomendasi Lainnya</h2>
        <div className="rekomendasi-grid">
          {allWisata // Menggunakan allWisata yang sudah di-fetch
            .filter((w) => Number(w.id) !== parsedId)
            .slice(0, 3)
            .map((w) => (
              <Link key={w.id} to={`/detail/${w.id}`} className="mini-card" style={{ textDecoration: 'none', color: 'inherit' }}>
                <img
                  src={w.gambar}
                  alt={w.nama}
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = fallbackWisataById[w.id]?.gambar || '';
                  }}
                />
                <h4>{w.nama}</h4>
                <p>{w.lokasi}</p>
              </Link>
            ))}
        </div>
      </section>
    </div>
  );
}
