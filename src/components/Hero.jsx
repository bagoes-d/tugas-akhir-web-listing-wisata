import React from 'react';
// JALUR DIKOREKSI: Mengambil gambar Raja Ampat langsung dari folder image kamu
import bgHero from '../image/raja ampat.png'; 

export default function Hero() {
  return (
    <section style={styles.heroContainer}>
      <div style={styles.overlay}></div>

      <div style={styles.heroContent}>
        <div style={styles.badge}>
          <span>Eksplorasi Nusantara Indonesia</span>
        </div>
        
        <h1 style={styles.mainTitle}>
          Jelajahi Pesona & Keindahan <br />
          <span style={styles.highlightText}>Destinasi Indonesia</span>
        </h1>
        
        <p style={styles.subTitle}>
          Temukan destinasi wisata terbaik, surga tersembunyi, dan ragam <br />
          budaya kaya di seluruh penjuru negeri bersama BagoesExplore.
        </p>

        <div style={styles.buttonGroup}>
          <button style={styles.primaryBtn}>Mulai Petualangan</button>
        </div>
      </div>
    </section>
  );
}

const styles = {
  heroContainer: {
    position: 'relative',
    backgroundImage: `url(${bgHero})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    minHeight: '70vh', 
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0 20px',
    overflow: 'hidden',
  },
  overlay: {
    position: 'absolute',
    top: 0, left: 0, right: 0, bottom: 0,
    backgroundColor: 'rgba(7, 11, 24, 0.55)', 
    zIndex: 1,
  },
  heroContent: {
    position: 'relative',
    zIndex: 2,
    textAlign: 'center',
    maxWidth: '800px',
  },
  badge: {
    display: 'inline-block',
    padding: '6px 14px',
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    border: '1px solid rgba(255, 255, 255, 0.15)',
    borderRadius: '20px',
    color: '#98a7d4',
    fontSize: '14px',
    marginBottom: '20px',
  },
  mainTitle: {
    color: '#ffffff',
    fontSize: '3.2rem',
    fontWeight: '800',
    lineHeight: '1.2',
    marginBottom: '20px',
  },
  highlightText: {
    color: '#4ade80', // Menggunakan warna hijau alam segar agar senada dengan logo semanggi kamu
  },
  subTitle: {
    color: '#98a7d4',
    fontSize: '1.2rem',
    lineHeight: '1.6',
    marginBottom: '36px',
  },
  buttonGroup: {
    display: 'flex',
    justifyContent: 'center',
  },
  primaryBtn: {
    padding: '14px 32px',
    backgroundColor: '#ffffff',
    color: '#070b18',
    border: 'none',
    borderRadius: '30px',
    fontWeight: '700',
    fontSize: '16px',
    cursor: 'pointer',
  },
};