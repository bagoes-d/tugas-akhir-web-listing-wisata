import React from 'react';

// Gambar dipindahkan ke sini agar bisa diakses oleh objek styles di luar fungsi
const bgHero = "https://images.unsplash.com/photo-1596402184320-417e7178b2cd?auto=format&fit=crop&w=1920&q=80";

export default function Hero() {
  const scrollToExplore = () => {
    const element = document.getElementById('explore-section');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section style={styles.heroContainer}>
      <style>{animations}</style>
      {/* Lapisan gelap agar foto menyatu dengan background web */}
      <div style={styles.overlay}></div>

      <div style={styles.heroContent}>
        <div style={{ ...styles.badge, animation: 'fadeInUp 0.8s ease-out' }}>
          <span>✨ Pesona Indonesia</span>
        </div>
        
        <h1 style={{ ...styles.mainTitle, animation: 'float 6s ease-in-out infinite' }}>
          Jelajahi Kemegahan Alam <br />
          <span style={styles.highlightText}>& Budaya Indonesia</span>
        </h1>
        
        <p style={styles.subTitle}>
          Temukan destinasi bersejarah, surga tersembunyi, dan pengalaman <br />
          petualangan tak terlupakan di seluruh penjuru negeri bersama BagoesExplore.
        </p>

        <div style={styles.buttonGroup}>
          <button onClick={scrollToExplore} style={styles.primaryBtn}>Mulai Petualangan</button>
          <button onClick={scrollToExplore} style={styles.secondaryBtn}>Lihat Destinasi</button>
        </div>
      </div>
    </section>
  );
}

const animations = `
  @keyframes float {
    0% { transform: translateY(0px); }
    50% { transform: translateY(-15px); }
    100% { transform: translateY(0px); }
  }
  @keyframes fadeInUp {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }
  button:hover {
    transform: scale(1.05) translateY(-2px);
    filter: brightness(1.2);
  }
`;

const styles = {
  heroContainer: {
    position: 'relative',
    backgroundImage: `url(${bgHero})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    minHeight: '85vh', 
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0 20px',
    overflow: 'hidden',
  },
  overlay: {
    position: 'absolute',
    top: 0, left: 0, right: 0, bottom: 0,
    background: 'linear-gradient(180deg, rgba(7, 11, 24, 0.2) 0%, rgba(7, 11, 24, 0.8) 50%, #070b18 100%)', 
    zIndex: 1,
  },
  heroContent: {
    position: 'relative',
    zIndex: 2,
    textAlign: 'center',
    maxWidth: '850px',
  },
  badge: {
    display: 'inline-block',
    padding: '8px 20px',
    backgroundColor: 'rgba(94, 234, 212, 0.15)',
    border: '1px solid rgba(94, 234, 212, 0.4)',
    borderRadius: '20px',
    color: '#5eead4',
    fontSize: '14px',
    marginBottom: '24px',
    fontWeight: '600',
    letterSpacing: '0.05em',
  },
  mainTitle: {
    color: '#ffffff',
    fontSize: 'clamp(2.8rem, 5vw, 4.5rem)',
    fontWeight: '900',
    lineHeight: '1.1',
    marginBottom: '20px',
    letterSpacing: '-0.02em',
  },
  highlightText: {
    color: '#5eead4', /* Warna hijau cyan toska yang segar khas alam malam */
  },
  subTitle: {
    color: '#98a7d4',
    fontSize: '1.15rem',
    lineHeight: '1.8',
    marginBottom: '40px',
  },
  buttonGroup: {
    display: 'flex',
    gap: '16px',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  primaryBtn: {
    padding: '14px 32px',
    backgroundColor: '#14b8a6',
    color: '#070b18',
    border: 'none',
    borderRadius: '12px',
    fontWeight: '700',
    fontSize: '16px',
    cursor: 'pointer',
    boxShadow: '0 10px 25px rgba(20, 184, 166, 0.4)',
    transition: 'all 0.3s ease',
  },
  secondaryBtn: {
    padding: '14px 32px',
    backgroundColor: 'rgba(255, 255, 255, 0.04)',
    color: '#ffffff',
    border: '1px solid rgba(255, 255, 255, 0.15)',
    borderRadius: '12px',
    fontWeight: '600',
    fontSize: '16px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  },
};