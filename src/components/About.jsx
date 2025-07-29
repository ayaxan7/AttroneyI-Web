import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-background">
        <div className="about-overlay">
          <div className="container">
            <div className="about-content">
              <div className="about-text">
                <h2>Redefining Legal Excellence</h2>
                <p>
                  In an era where legal complexity meets technological innovation, AttorneyAI stands as the pinnacle of legal assistance. Our sophisticated artificial intelligence platform combines decades of legal expertise with cutting-edge technology to deliver unparalleled legal guidance.
                </p>
                <p>
                  Founded by legal experts and technology visionaries, we understand that every legal matter deserves meticulous attention and expert insight. Our AI assistant doesn't replace human expertise—it enhances it, providing you with instant access to legal knowledge while maintaining the highest standards of accuracy and confidentiality.
                </p>
                <p>
                  From contract analysis to legal research, from document drafting to strategic planning, AttorneyAI empowers individuals and businesses to navigate the legal landscape with confidence and precision.
                </p>
                <div className="about-stats">
                  <div className="stat">
                    <h3>10,000+</h3>
                    <p>Legal Documents Analyzed</p>
                  </div>
                  <div className="stat">
                    <h3>99.7%</h3>
                    <p>Accuracy Rate</p>
                  </div>
                  <div className="stat">
                    <h3>24/7</h3>
                    <p>Available Support</p>
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

export default About;
