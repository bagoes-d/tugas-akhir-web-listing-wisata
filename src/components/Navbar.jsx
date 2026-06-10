import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          🍀 JelajahRaya
        </Link>
        <ul className="navbar-menu">
          <li>
            <Link to="/" className="navbar-link">Home</Link>
          </li>
          <li>
            <a href="#ai" className="navbar-link">AI Assist</a>
          </li>
          <li>
            <a href="#tentang" className="navbar-link">Tentang</a>
          </li>
          <li>
            <a href="#kontak" className="navbar-link">Kontak</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
