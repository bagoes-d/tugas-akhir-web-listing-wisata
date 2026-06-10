import { Link } from 'react-router-dom';
import '../styles/Card.css';

export default function Card({ wisata }) {
  return (
    <Link to={`/detail/${wisata.id}`} className="card-link">
      <div className="card">
        <div className="card-image">
          <img src={wisata.gambar} alt={wisata.nama} />
          <span className="card-kategori">{wisata.kategori}</span>
        </div>
        <div className="card-content">
          <h3>{wisata.nama}</h3>
          <p className="card-lokasi">📍 {wisata.lokasi}</p>
          <div className="card-rating">
            <span className="stars">⭐ {wisata.rating}</span>
            <span className="harga">
              {typeof wisata.harga === 'number'
                ? `Rp ${wisata.harga.toLocaleString('id-ID')}`
                : wisata.harga || 'Gratis'}
            </span>
          </div>
          <p className="card-desc">{wisata.deskripsi.substring(0, 100)}...</p>
        </div>
      </div>
    </Link>
  );
}
