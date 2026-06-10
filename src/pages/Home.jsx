import { useState, useEffect } from 'react';
import Card from '../components/Card';
import '../styles/Home.css';

export default function Home() {
  const [wisata, setWisata] = useState([]);
  const [kategoriFilter, setKategoriFilter] = useState('Semua');

  useEffect(() => {
    fetch('/wisata.json')
      .then(response => response.json())
      .then(data => setWisata(data.wisata || []))
      .catch(error => {
        console.error('Gagal memuat data wisata:', error);
        setWisata([]);
      });
  }, []);

  // Ambil kategori unik
  const kategori = ['Semua', ...new Set(wisata.map(w => w.kategori))];

  // Filter berdasarkan kategori
  const wisataFiltered = kategoriFilter === 'Semua' 
    ? wisata 
    : wisata.filter(w => w.kategori === kategoriFilter);

  return (
    <div className="home">
      <section className="hero" id="home">
        <div className="hero-content">
          <p className="hero-tag">Wisata pintar dengan sentuhan AI</p>
          <h1>Jelajahi Keindahan Indonesia dengan Rekomendasi Cerdas</h1>
          <p>Temukan destinasi wisata terbaik dan rencana perjalanan yang dibuat otomatis untuk kamu dan keluarga.</p>
          <div className="hero-actions">
            <a href="#ai" className="hero-cta">Lihat Rekomendasi AI</a>
            <a href="#wisata" className="hero-secondary">Jelajahi Destinasi</a>
          </div>
        </div>
      </section>

      <section className="ai-highlights" id="ai">
        <div className="ai-card">
          <div className="ai-card-icon">🤖</div>
          <h3>AI Travel Assistant</h3>
          <p>Analisis cerdas untuk pilih destinasi yang sesuai dengan minat, budget, dan waktu liburanmu.</p>
        </div>
        <div className="ai-card">
          <div className="ai-card-icon">📍</div>
          <h3>Rencana Perjalanan Instan</h3>
          <p>Rekomendasi itinerary, tempat makan, dan kegiatan terbaik langsung tersedia.</p>
        </div>
        <div className="ai-card">
          <div className="ai-card-icon">✨</div>
          <h3>Pengalaman Lebih Gacor</h3>
          <p>Desain modern, animasi halus, dan navigasi intuitif untuk tampil layaknya platform premium.</p>
        </div>
      </section>

      <section className="filter-section">
        <h2>Kategori</h2>
        <div className="filter-buttons">
          {kategori.map(kat => (
            <button
              key={kat}
              className={`filter-btn ${kategoriFilter === kat ? 'active' : ''}`}
              onClick={() => setKategoriFilter(kat)}
            >
              {kat}
            </button>
          ))}
        </div>
      </section>

      <section className="wisata-section" id="wisata">
        <h2>Destinasi Wisata ({wisataFiltered.length})</h2>
        <div className="wisata-grid">
          {wisataFiltered.map(w => (
            <Card key={w.id} wisata={w} />
          ))}
        </div>
      </section>

      <section className="about-section" id="tentang">
        <div className="about-card">
          <h2>Tentang WisataIndo AI</h2>
          <p>Kami menggabungkan teknologi AI dan desain modern untuk memberikan pengalaman browsing wisata yang lebih cerdas, cepat, dan memukau.</p>
          <ul>
            <li>Rekomendasi destinasi berdasarkan kategori favorit</li>
            <li>Info harga, rating, dan fasilitas tampil rapi</li>
            <li>Desain responsif, terstruktur, dan elegan</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
