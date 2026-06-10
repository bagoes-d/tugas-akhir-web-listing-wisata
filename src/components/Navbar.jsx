import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import '../styles/Navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          🍀 BagoesExplore
        </Link>
        <ul className="navbar-menu">
          <li>
            <Link to="/" className={`navbar-link ${location.pathname === '/' ? 'active' : ''}`}>Home</Link>
          </li>
          <li>
            <a href="#explore-section" className="navbar-link">Destinasi</a>
          </li>
          <li>
            <a href="#footer" className="navbar-link">Tentang</a>
          </li>
          <li>
            <a href="#kontak" className="navbar-link">Kontak</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
