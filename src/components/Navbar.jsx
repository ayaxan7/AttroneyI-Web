import './Navbar.css';
import { useState } from 'react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    // Close mobile menu after navigation
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-content">
          <div className="navbar-logo">
            <img src="/logo.png" alt="Attorney-I Logo" className="navbar-logo-img" />
          </div>
          
          <ul className={`navbar-links ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}>
              <li><a href="#hero" style={{ fontWeight: 'bold' }} onClick={(e) => { e.preventDefault(); scrollToSection('hero'); }}>Home</a></li>
  <li><a href="#features" style={{ fontWeight: 'bold' }} onClick={(e) => { e.preventDefault(); scrollToSection('features'); }}>Features</a></li>
  <li><a href="#about" style={{ fontWeight: 'bold' }} onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>About</a></li>
            {/* <li><a href="#action" onClick={(e) => { e.preventDefault(); scrollToSection('action'); }}>Demo</a></li>
            <li><a href="#testimonials" onClick={(e) => { e.preventDefault(); scrollToSection('testimonials'); }}>Testimonials</a></li> */}
  <li><a href="#contact" style={{ fontWeight: 'bold' }} onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Contact</a></li>
          </ul>
          
          <button 
            className="mobile-menu-toggle"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            <span className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`}>
              <span></span>
              <span></span>
              <span></span>
            </span>
          </button>
          
          {/* <button 
            className="btn btn-start"
            onClick={() => scrollToSection('hero')}
          >
            Start
          </button> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
