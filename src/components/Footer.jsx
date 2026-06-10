import '../styles/Footer.css';

export default function Footer() {
  return (
    <footer id="footer" className="footer"> {/* Tambahkan ID untuk navigasi */}
      <div className="footer-container">
        <div className="footer-section">
          <h3>BagoesExplore</h3>
          <p>BagoesExplore hadir sebagai ruang inspirasi digital untuk menjelajahi ragam destinasi wisata terbaik di Indonesia. Temukan keindahan alam, budaya, dan petualangan impian Anda bersama kami.</p>
        </div>
        <div className="footer-section">
          <h4>Jelajahi</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="#explore-section">Destinasi</a></li>
            <li><a href="#footer">Tentang & Kontak</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Hubungi Kami</h4>
          <p>📧 bagoeswahyu31@gmail.com</p>
          <p>📞 +62 895-1881-1130</p>
          <p>📍 Indonesia</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2026 BagoesExplore. Semua hak dilindungi.</p>
      </div>
    </footer>
  );
}
