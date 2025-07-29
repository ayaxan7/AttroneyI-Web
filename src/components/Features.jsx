import './Features.css';

const Features = () => {
  const features = [
    {
      title: "AI-Powered Analysis",
      description: "Advanced artificial intelligence provides instant legal document analysis and contract review with unprecedented accuracy.",
      icon: "⚖️"
    },
    {
      title: "24/7 Legal Consultation",
      description: "Get expert legal guidance anytime, anywhere. Our AI assistant is available round the clock for your legal needs.",
      icon: "🕒"
    },
    {
      title: "Document Generation",
      description: "Create professional legal documents, contracts, and agreements with our intelligent document generation system.",
      icon: "📄"
    },
    {
      title: "Case Law Research",
      description: "Access comprehensive legal databases and precedents to strengthen your legal arguments and strategies.",
      icon: "🔍"
    },
    {
      title: "Privacy & Security",
      description: "Bank-level encryption ensures your sensitive legal information remains completely confidential and secure.",
      icon: "🔒"
    },
    {
      title: "Expert Network",
      description: "Connect with qualified attorneys and legal experts when you need human expertise for complex matters.",
      icon: "👥"
    }
  ];

  return (
    <section id="features" className="features">
      <div className="container">
        <div className="features-header">
          <h2>Powerful Features</h2>
          <p>Discover the comprehensive legal tools designed to empower your legal journey</p>
        </div>
        
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">
                <span>{feature.icon}</span>
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
