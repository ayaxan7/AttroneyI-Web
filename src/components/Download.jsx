import './Download.css';

const Download = () => {
  return (
    <section id="download" className="download">
      <div className="container">
        <div className="download-content">
          <div className="download-text">
            <h2>Get AttorneyAI Today</h2>
            <p>
              Join thousands of legal professionals and businesses who trust AttorneyAI for their legal needs. Download our app and experience the future of legal assistance.
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
            <button className="btn btn-bronze btn-large download-btn">
              <span className="btn-icon">📱</span>
              <div className="btn-content">
                <span className="btn-subtitle">Download on the</span>
                <span className="btn-title">App Store</span>
              </div>
            </button>
            
            <button className="btn btn-bronze btn-large download-btn">
              <span className="btn-icon">🤖</span>
              <div className="btn-content">
                <span className="btn-subtitle">Get it on</span>
                <span className="btn-title">Google Play</span>
              </div>
            </button>
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
