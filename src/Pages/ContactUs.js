import React, { useState } from 'react';
import axios from 'axios';
import './ContactUs.css';

function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate sending data using placeholder URL
    axios.post('https://jsonplaceholder.typicode.com/posts', formData)
      .then(res => {
        alert('Message sent successfully!');
        setFormData({ name: '', email: '', subject: '', message: '' });
      })
      .catch(err => {
        alert('Failed to send message. Please try again.');
      })
      .finally(() => setLoading(false));
  };

  return (
    <div className="contactus-container">
      <h2>Contact Us</h2>

      <div className="contact-content">
        <form className="contact-form" onSubmit={handleSubmit}>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label>Subject</label>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />

          <label>Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />

          <button type="submit" disabled={loading}>
            {loading ? 'Sending...' : 'Send Message'}
          </button>
        </form>

        <div className="contact-info">
          <h3>Contact Information</h3>
          <p><strong>Phone:</strong> +1 234 567 890</p>
          <p><strong>Email:</strong> contact@dentalclinic.com</p>
          <p><strong>Address:</strong> 123 Dental Street, Tooth City, Smile State</p>

          <div className="map-container">
            <iframe
              title="Clinic Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019847245829!2d-122.42184258468153!3d37.77928097975725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808c45af325b%3A0x78c1c028edb0b8a9!2sDental%20Clinic!5e0!3m2!1sen!2sus!4v1684976600000!5m2!1sen!2sus"
              width="100%"
              height="250"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
