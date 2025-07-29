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
            <button 
              className="btn btn-large"
              onClick={() => scrollToSection('features')}
            >
              Get Started
            </button>
          </div>
          
          <div className="hero-image">
            <div className="phone-mockup">
              <div className="phone-screen">
                <div className="app-preview">
                  <div className="app-header">
                    <div className="status-bar"></div>
                    <h4>AttorneyAI</h4>
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
