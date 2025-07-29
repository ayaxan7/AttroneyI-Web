import './Navbar.css';

const Navbar = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-content">
          <div className="navbar-logo">
            <h3>Attorney-I</h3>
          </div>
          
          <ul className="navbar-links">
            <li><a href="#features" onClick={(e) => { e.preventDefault(); scrollToSection('features'); }}>Features</a></li>
            <li><a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>About</a></li>
            <li><a href="#action" onClick={(e) => { e.preventDefault(); scrollToSection('action'); }}>Demo</a></li>
            <li><a href="#testimonials" onClick={(e) => { e.preventDefault(); scrollToSection('testimonials'); }}>Testimonials</a></li>
            <li><a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Contact</a></li>
          </ul>
          
          <button 
            className="btn btn-start"
            onClick={() => scrollToSection('hero')}
          >
            Start
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
