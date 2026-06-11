import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';

const imgFallbacks = {
  1: 'https://images.unsplash.com/photo-1596402184320-417e7178b2cd?w=600&q=80',
  2: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=600&q=80',
  3: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80',
  4: 'https://images.unsplash.com/photo-1627546059253-833e0bc9df5f?w=600&q=80',
  5: 'https://images.unsplash.com/photo-1516690561799-46d8f74f90f6?w=600&q=80',
  6: 'https://images.unsplash.com/photo-1570191913384-7b3ff1f43505?w=600&q=80',
  7: 'https://images.unsplash.com/photo-1621271104301-443b7405be1b?w=600&q=80',
  8: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?w=600&q=80',
  9: 'https://images.unsplash.com/photo-1579703444400-d8615b31093c?w=600&q=80',
};

export default function Home() {
  const [kategori, setKategori] = useState('Semua');
  const [daftarWisata, setDaftarWisata] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    // Mengambil data dari API Produksi dengan filter kategori 'wisata'
    fetch('https://listing-webki-production.up.railway.app/api/listings?category=wisata')
      .then((res) => {
        if (!res.ok) throw new Error('Gagal memuat data dari API');
        return res.json();
      })
      .then((resJson) => {
        // Memetakan data API (title, imageUrl, metadata) ke format UI (nama, gambar, lokasi)
        const mappedData = (resJson.data || []).map(item => ({
          id: item.id,
          nama: item.title,
          lokasi: item.metadata?.location || 'Indonesia',
          deskripsi: item.description,
          rating: item.rating || 4.5,
          harga: item.metadata?.ticketPrice || 0,
          gambar: item.imageUrl,
          kategori: item.category?.name || 'Wisata'
        }));
        setDaftarWisata(mappedData);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  const kategoriUnik = ['Semua', ...new Set(daftarWisata.map(w => w.kategori))];
  const wisataTerfilter = kategori === 'Semua' 
    ? daftarWisata 
    : daftarWisata.filter(w => w.kategori === kategori);

  if (loading) return <div style={{ backgroundColor: '#070b18', minHeight: '100vh', color: '#fff', padding: '100px', textAlign: 'center' }}>Memuat Destinasi...</div>;

  return (
    <div style={{ backgroundColor: '#070b18', minHeight: '100vh', color: '#fff' }}>
      <style>{cardStyles}</style>
      <Hero />

      <div id="explore-section" style={{ padding: '80px 24px', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ marginBottom: '60px', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '12px', fontWeight: '800', letterSpacing: '-0.02em' }}>
            Destinasi Wisata ({wisataTerfilter.length})
          </h2>
          <p style={{ color: '#98a7d4', marginBottom: '32px', fontSize: '1.1rem' }}>
            Jelajahi keindahan Indonesia dari berbagai kategori pilihan.
          </p>
          
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'center' }}>
            {kategoriUnik.map(kat => (
              <button
                key={kat}
                onClick={() => setKategori(kat)}
                style={{
                  padding: '8px 20px',
                  borderRadius: '20px',
                  border: 'none',
                  cursor: 'pointer', 
                  backgroundColor: kategori === kat ? '#5eead4' : 'rgba(255,255,255,0.05)',
                  color: kategori === kat ? '#070b18' : '#fff',
                  fontWeight: '700',
                  transition: '0.3s'
                }}
              >
                {kat}
              </button>
            ))}
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '28px' }}>
          {wisataTerfilter.map((wisata) => (
            <Link
              key={wisata.id}
              to={`/detail/${wisata.id}`}
              className="wisata-card"
            >
              <img
                src={wisata.gambar}
                alt={wisata.nama}
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = imgFallbacks[wisata.id] || imgFallbacks[3];
                }}
                style={{ width: '100%', height: '200px', objectFit: 'cover' }}
              />
              <div style={{ padding: '20px' }}>
                <span style={{ fontSize: '0.7rem', color: '#5eead4', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                  {wisata.kategori}
                </span>
                <h3 style={{ fontSize: '1.3rem', fontWeight: '700', marginBottom: '6px', color: '#eff6ff' }}>
                  {wisata.nama}
                </h3>
                <p style={{ color: '#98a7d4', fontSize: '0.95rem' }}>📍 {wisata.lokasi}</p>
                <div style={{ marginTop: '12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ color: '#fbbf24', fontWeight: '600' }}>⭐ {wisata.rating}</span>
                  <span style={{ color: '#5eead4', fontWeight: 'bold' }}>
                    {typeof wisata.harga === 'number' ? (wisata.harga > 0 ? `Rp ${wisata.harga.toLocaleString()}` : '') : wisata.harga}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

const cardStyles = `
  .wisata-card {
    text-decoration: none;
    text-align: left;
    background: rgba(255, 255, 255, 0.03);
    border-radius: 24px;
    overflow: hidden;
    border: 1px solid rgba(255, 255, 255, 0.08);
    backdrop-filter: blur(12px);
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    padding: 0;
  }
  .wisata-card:hover {
    transform: translateY(-12px);
    box-shadow: 0 20px 40px rgba(0,0,0,0.4), 0 0 20px rgba(94, 234, 212, 0.1);
    border-color: rgba(94, 234, 212, 0.3);
  }
`;
