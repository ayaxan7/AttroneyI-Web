import './Contact.css';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

const handleSubmit = (e) => {
  e.preventDefault();
  
  // Create the email content with fallback for empty subject
  const selectedSubject = formData.subject || 'General Inquiry';
  const subject = `Query related to : ${selectedSubject} `;
  const body = `Hello,

My name is ${formData.name}.

${formData.message}

Best regards,
${formData.name}`;

  // Create Gmail URL with correct parameter order
  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=syedayaan9376@gmail.com&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  
  // Open Gmail in a new window
  window.open(gmailUrl, '_blank');
  
  // Reset form
  setFormData({
    name: '',
    subject: '',
    message: ''
  });
};

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="contact-content">
          <div className="contact-header">
            <h2>Get In Touch</h2>
            <p>Have a question or need legal assistance? We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
          </div>
          
          <div className="contact-form-container">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter your full name"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select a service...</option>
                  <option value="Contract Review">Contract Review</option>
                  <option value="Legal Consultation">Legal Consultation</option>
                  <option value="Document Drafting">Document Drafting</option>
                  <option value="Business Law">Business Law</option>
                  <option value="Employment Law">Employment Law</option>
                  <option value="Intellectual Property">Intellectual Property</option>
                  <option value="Real Estate Law">Real Estate Law</option>
                  <option value="Family Law">Family Law</option>
                  <option value="Criminal Law">Criminal Law</option>
                  <option value="Personal Injury">Personal Injury</option>
                  <option value="Estate Planning">Estate Planning</option>
                  <option value="General Inquiry">General Inquiry</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  placeholder="Tell us about your legal needs or ask any questions..."
                ></textarea>
              </div>
              
              <button type="submit" className="btn btn-large contact-submit-btn">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
