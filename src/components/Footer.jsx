import '../styles/Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>WisataIndo</h3>
          <p>Jelajahi keindahan wisata Indonesia bersama kami.</p>
        </div>
        <div className="footer-section">
          <h4>Tautan</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#wisata">Destinasi</a></li>
            <li><a href="#kontak">Kontak</a></li>
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
        <p>&copy; 2026 WisataIndo. Semua hak dilindungi.</p>
      </div>
    </footer>
  );
}
