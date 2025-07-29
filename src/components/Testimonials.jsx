import './Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Corporate Lawyer",
      company: "Goldman & Associates",
      content: "Attorney-I has revolutionized our contract review process. What used to take hours now takes minutes, with unprecedented accuracy and insight.",
      rating: 5
    },
    {
      name: "Michael Rodriguez",
      role: "Small Business Owner",
      company: "TechStart Innovations",
      content: "As a startup, having access to instant legal guidance has been invaluable. Attorney-I helped us navigate complex regulations with confidence.",
      rating: 5
    },
    {
      name: "Dr. Emily Watson",
      role: "Legal Scholar",
      company: "Harvard Law School",
      content: "The depth of legal knowledge and research capabilities of Attorney-I is remarkable. It's like having a team of legal experts at your fingertips.",
      rating: 5
    }
  ];

  const renderStars = (rating) => {
    return Array(rating).fill(0).map((_, i) => (
      <span key={i} className="star">★</span>
    ));
  };

  return (
    <section id="testimonials" className="testimonials">
      <div className="container">
        <div className="testimonials-header">
          <h2>What Our Users Say</h2>
          <p>Trusted by legal professionals and businesses worldwide</p>
        </div>
        
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="testimonial-content">
                <div className="rating">
                  {renderStars(testimonial.rating)}
                </div>
                <p>"{testimonial.content}"</p>
              </div>
              <div className="testimonial-author">
                <div className="author-avatar">
                  {testimonial.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div className="author-info">
                  <h4>{testimonial.name}</h4>
                  <p>{testimonial.role}</p>
                  <p className="company">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
