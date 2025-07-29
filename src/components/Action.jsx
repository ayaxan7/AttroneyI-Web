import './Action.css';

const Action = () => {
  return (
    <section id="action" className="action">
      <div className="container">
        <div className="action-content">
          <div className="action-text">
            <h2>See AttorneyAI in Action</h2>
            <p>
              Watch how our AI legal assistant transforms complex legal queries into clear, actionable insights. Experience the future of legal consultation through our interactive demo.
            </p>
            <div className="action-features">
              <div className="action-feature">
                <span className="feature-bullet">✓</span>
                <span>Real-time document analysis</span>
              </div>
              <div className="action-feature">
                <span className="feature-bullet">✓</span>
                <span>Instant legal recommendations</span>
              </div>
              <div className="action-feature">
                <span className="feature-bullet">✓</span>
                <span>Professional document generation</span>
              </div>
            </div>
            <button className="btn btn-large">Request Demo</button>
          </div>
          
          <div className="demo-container">
            <div className="video-placeholder">
              <div className="play-button">
                <div className="play-icon">▶</div>
              </div>
              <div className="video-overlay">
                <h3>Interactive Demo</h3>
                <p>3 minutes • HD Quality</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Action;
