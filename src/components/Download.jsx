import './Download.css';

const Download = () => {
  return (
    <section id="download" className="download">
      <div className="container">
        <div className="download-content">
          <div className="download-text">
            <h2>Get Attorney-I Today</h2>
            <p>
              Join thousands of legal professionals and businesses who trust Attorney-I for their legal needs. Download our app and experience the future of legal assistance.
            </p>
            <div className="download-features">
              <div className="download-feature">
                <span>✓ Free 14-day trial</span>
              </div>
              <div className="download-feature">
                <span>✓ No credit card required</span>
              </div>
              <div className="download-feature">
                <span>✓ Premium support included</span>
              </div>
            </div>
          </div>
          
          <div className="download-buttons">
            <a 
              href="https://apps.apple.com/placeholder-app-store-link" 
              target="_blank" 
              rel="noopener noreferrer"
              className="download-store-btn"
            >
              <img 
                src="/src/assets/appstorebutton.png" 
                alt="Download on the App Store" 
                className="store-btn-img"
              />
            </a>
            
            <a 
              href="https://play.google.com/placeholder-play-store-link" 
              target="_blank" 
              rel="noopener noreferrer"
              className="download-store-btn"
            >
              <img 
                src="/src/assets/playstorebutton.png" 
                alt="Get it on Google Play" 
                className="store-btn-img"
              />
            </a>
          </div>
        </div>
        
        <div className="download-stats">
          <div className="stat">
            <h3>50,000+</h3>
            <p>Downloads</p>
          </div>
          <div className="stat">
            <h3>4.9/5</h3>
            <p>App Store Rating</p>
          </div>
          <div className="stat">
            <h3>98%</h3>
            <p>User Satisfaction</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Download;
