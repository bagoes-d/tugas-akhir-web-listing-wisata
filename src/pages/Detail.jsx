import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import wisataData from '../data/wisata.json';
import '../styles/Detail.css';

export default function Detail() {
  const { id } = useParams();
  const [wisata, setWisata] = useState(null);

  useEffect(() => {
    // Cari wisata berdasarkan ID
    const foundWisata = wisataData.wisata.find(w => w.id === parseInt(id));
    setWisata(foundWisata);
  }, [id]);

  if (!wisata) {
    return (
      <div className="detail-container">
        <div className="loading">
          <p>Wisata tidak ditemukan</p>
          <Link to="/" className="back-button">Kembali ke Home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="detail-container">
      <Link to="/" className="back-button">← Kembali</Link>
      
      <div className="detail-header">
        <img src={wisata.gambar} alt={wisata.nama} className="detail-image" />
        <div className="detail-overlay">
          <h1>{wisata.nama}</h1>
          <span className="kategori-badge">{wisata.kategori}</span>
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
              {wisata.harga > 0 ? `Rp ${wisata.harga.toLocaleString('id-ID')}` : 'Gratis'}
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
        <div className="insight-card">
          <h3>🚀 Insight AI Untuk Perjalananmu</h3>
          <p>Platform kami menggunakan rekomendasi pintar dan presentasi visual modern untuk membuat destinasi wisata terasa seperti aplikasi premium.</p>
          <div className="insight-items">
            <span>• Saran rute terbaik</span>
            <span>• Fasilitas unggulan</span>
            <span>• Pilihan sesuai mood liburan</span>
          </div>
        </div>
      </section>

      <section className="wisata-serupa">
        <h2>Rekomendasi Lainnya</h2>
        <div className="rekomendasi-grid">
          {wisataData.wisata.slice(0, 3).map(w => (
            <div key={w.id} className="mini-card">
              <img src={w.gambar} alt={w.nama} />
              <h4>{w.nama}</h4>
              <p>{w.lokasi}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
