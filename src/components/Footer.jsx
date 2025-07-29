import './Footer.css';
import linkedinLogo from '../assets/icons/linkedin-logo.png';
import gmailLogo from '../assets/icons/gmail-logo.png';
import websiteLogo from '../assets/icons/internet-logo.png';
import instagramLogo from '../assets/icons/instagram-logo.png';
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3>Attorney-I</h3>
            <p>Your AI Legal Assistant. Reimagined.</p>
            <div className="social-links">
            <a href="https://www.linkedin.com/in/syed-mohammad-ayaan-30302b271/" aria-label="LinkedIn">
                <img src={linkedinLogo} alt="LinkedIn" width="24" height="24" />
            </a>
            <a href="https://attorney-i.vercel.app" aria-label="Website">
                <img src={websiteLogo} alt="Website" width="24" height="24" />
            </a>
            <a href="https://instagram.com" aria-label="Instagram">
                <img src={instagramLogo} alt="Instagram" width="24" height="24" />
            </a>
            <a href="mailto:syedayaan9376@gmail.com" aria-label="Gmail">
                <img src={gmailLogo} alt="Gmail" width="24" height="24" />
            </a>
            </div>
          </div>   
          <div className="footer-links">
            <div className="footer-column">
              <h4>Product</h4>
              <ul>
                <li><a href="#features">Features</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#action">Demo</a></li>
                <li><a href="#download">Download</a></li>
              </ul>
            </div>
            
            <div className="footer-column">
              <h4>Support</h4>
              <ul>
                <li><a href="#">Help Center</a></li>
                <li><a href="#">Documentation</a></li>
                <li><a href="#">Contact Support</a></li>
                <li><a href="#">System Status</a></li>
              </ul>
            </div>
            
            <div className="footer-column">
              <h4>Legal</h4>
              <ul>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms of Service</a></li>
                <li><a href="#">Cookie Policy</a></li>
                <li><a href="#">Compliance</a></li>
              </ul>
            </div>
            
            <div className="footer-column">
              <h4>Contact</h4>
              <ul>
                <li><a href="mailto:support@attorney-i.com">support@attorney-i.com</a></li>
                <li><a href="tel:+1-555-0123">+1 (555) 012-3456</a></li>
                <li>Legal Tech Plaza<br />123 Innovation Drive<br />San Francisco, CA 94105</li>
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
