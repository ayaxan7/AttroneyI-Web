import './Hero.css';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Your AI Legal Assistant. Reimagined.</h1>
            <p>Experience the future of legal consultation with our sophisticated AI-powered platform. Get instant, accurate legal guidance tailored to your needs.</p>
            <div className="hero-download-buttons">
              <a 
                href="https://apps.apple.com/placeholder-app-store-link" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hero-store-btn"
              >
                <img 
                  src="/src/assets/icons/appstorebtn.png" 
                  alt="Download on the App Store" 
                  className="hero-store-btn-img"
                />
              </a>
              <a 
                href="https://play.google.com/placeholder-play-store-link" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hero-store-btn"
              >
                <img 
                  src="/src/assets/icons/playstorebtn.png" 
                  alt="Get it on Google Play" 
                  className="hero-store-btn-img"
                />
              </a>
            </div>
          </div>
          
          <div className="hero-image">
            <div className="phone-mockup">
              <div className="phone-screen">
                <div className="app-preview">
                  <div className="app-header">
                    <div className="status-bar"></div>
                    <h4>Attorney-I</h4>
                  </div>
                  <div className="chat-preview">
                    <div className="message ai-message">
                      <p>How can I assist you with your legal questions today?</p>
                    </div>
                    <div className="message user-message">
                      <p>I need help with contract review</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
