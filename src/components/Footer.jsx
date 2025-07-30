import './Footer.css';
import linkedinLogo from '../assets/icons/linkedin-logo.png';
import gmailLogo from '../assets/icons/gmail-logo.png';
import websiteLogo from '../assets/icons/internet-logo.png';
import instagramLogo from '../assets/icons/instagram-logo.png';
import productLogo from '/logo.png';
import logo from '../assets/logo.png';
import logoDark from '../assets/logo-black.png';
import logoremovebg from '../assets/logo-removebg.png';
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="footer-logo">
              <img src={productLogo} alt="Attorney-I Logo" className="footer-logo-img" />
              {/* <img src={logo} alt="Attorney-I Logo" className="footer-logo-img" />
              <img src={logoDark} alt="Attorney-I Logo" className="footer-logo-img" />
              <img src={logoremovebg} alt="Attorney-I Logo" className="footer-logo-img" /> */}
              <h3>Attorney-I</h3>
            </div>
            <p>Your AI Legal Assistant. Reimagined.</p>
            <div className="social-links-footer">
              {/* <a href="https://www.linkedin.com/in/syed-mohammad-ayaan-30302b271/" className="social-link">
                <img src={linkedinLogo} alt="LinkedIn" className="social-icon" />
              </a> */}
              <a href="https://attorney-i.vercel.app" className="social-link">
                <img src={websiteLogo} alt="Website" className="social-icon" />
              </a>
              {/* <a href="https://instagram.com" className="social-link">
                <img src={instagramLogo} alt="Instagram" className="social-icon" />
              </a> */}
              <a href="mailto:jaanvipande02@gmail.com" className="social-link">
                <img src={gmailLogo} alt="Gmail" className="social-icon" />
              </a>
            </div>
          </div>   
          <div className="footer-links">
            <div className="footer-column">
              <h4>About Us</h4>
              <div className="about-lists">
                <ul>
                  <li><a href="#features">Features</a></li>
                  <li><a href="#about">Our Vision</a></li>
                </ul>
                <ul>
                  <li><a href="#contact">Contact Us</a></li>
                  <li><a href="#hero">Download</a></li>
                </ul>
              </div>
            </div>
            
            {/* <div className="footer-column">
              <h4>Support</h4>
              <ul>
                <li><a href="#">Help Center</a></li>
                <li><a href="#">Documentation</a></li>
                <li><a href="#">Contact Support</a></li>
                <li><a href="#">System Status</a></li>
              </ul>
            </div> */}
            
            {/* <div className="footer-column">
              <h4>Legal</h4>
              <ul>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms of Service</a></li>
                <li><a href="#">Cookie Policy</a></li>
                <li><a href="#">Compliance</a></li>
              </ul>
            </div> */}
            
            <div className="footer-column contact-section">
              <h4>Contact</h4>
              {/* <div className="contact-address">
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam odit quo id qui adipisci hic, eaque officiis! Dicta, ut obcaecati?</p>
              </div> */}
              <ul>
                <li><a href="mailto:jaanvipande02@gmail.com">jaanvipande02@gmail.com</a></li>
                <li><a href="tel:+919311524600"> +91 9311524600</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>&copy; {currentYear} Attorney-I. All rights reserved.</p>
            <p className="disclaimer">
              Attorney-I provides general legal information and should not be considered as legal advice. 
              Always consult with qualified legal professionals for specific legal matters.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
