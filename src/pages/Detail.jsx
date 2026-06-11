import { useParams, Link } from 'react-router-dom';
import { useEffect, useMemo, useState } from 'react';
import '../styles/Detail.css';
 
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

    
    // Mengambil data dari API Produksi dengan filter kategori 'wisata'
    fetch('https://listing-webki-production.up.railway.app/api/listings?category=wisata')
      .then((res) => {
        if (!res.ok) throw new Error('Gagal memuat data dari API');
        return res.json();
      })
      .then((resJson) => {
        // Memetakan data API ke format yang dikenali UI (nama, lokasi, harga, dll)
        const mappedList = (resJson.data || []).map(item => ({
          id: item.id,
          nama: item.title, // API menggunakan 'title'
          lokasi: item.metadata?.destination || 'Lokasi tidak tersedia', 
          deskripsi: item.description,
          rating: item.rating || 4.5,
          harga: item.metadata?.price || 0, // Mengambil dari metadata price
          gambar: item.imageUrl, // API menggunakan 'imageUrl'
          jam: item.metadata?.opening_hours || '08:00 - 17:00',
          kategori: item.category?.name || 'Wisata'
        }));

        setAllWisata(mappedList);

        const found = mappedList.find((w) => Number(w.id) === parsedId);
        if (found) {
          setWisata(found);
        }
        setLoading(false); // Set loading false setelah data didapat
      })
      .catch((err) => {
        console.error("Gagal memuat data:", err);
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
            e.currentTarget.src = 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800'; // Default fallback image
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
                    e.currentTarget.src = 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800';
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
