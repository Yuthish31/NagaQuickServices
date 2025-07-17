import React from 'react';
import './EP_ServicesContact.css';
import { FaBolt, FaTint, FaClock, FaUserTie, FaSmile, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const EP_ServicesContact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceType = document.querySelector('.ep-sc-form-select').value;
    const name = document.querySelector('.ep-sc-form-input[type="text"]').value.trim();
    const phone = document.querySelector('.ep-sc-form-input[type="tel"]').value.trim();
    const address = document.querySelector('.ep-sc-form-textarea').value.trim();

    if (!serviceType || !name || !phone || !address) {
      alert("Please fill in all fields.");
      return;
    }

    if (!/^[0-9]{10}$/.test(phone)) {
      alert("Enter a valid 10-digit phone number.");
      return;
    }

    const message = `🔧 Service Booking Request%0A%0A🔧 Service Type: ${serviceType}%0A👤 Name: ${name}%0A📞 Phone: ${phone}%0A📍 Address: ${address}`;
    const whatsappURL = `https://wa.me/919677422040?text=${message}`;
    window.open(whatsappURL, '_blank');
  };

  return (
    <div className="ep-sc-container">
      {/* Hero Section */}
      <section className="ep-sc-hero">
        <h1 className="ep-sc-main-title">Electrical & Plumbing Services</h1>
        <p className="ep-sc-intro">
          Swift Services offers reliable and professional electrical and plumbing services for residential and commercial properties. 
          Our team of certified technicians is equipped to handle a wide range of tasks, from minor repairs to major installations. 
          We prioritize safety, efficiency, and customer satisfaction in every job we undertake.
        </p>
      </section>

      {/* Services Overview */}
      <section className="ep-sc-services-overview">
        <h2 className="ep-sc-section-title">Our Services</h2>
        
        <div className="ep-sc-service-cards">
          <div className="ep-sc-service-card">
            <FaBolt className="ep-sc-service-icon" />
            <h3 className="ep-sc-service-title">Electrical Services</h3>
            <p className="ep-sc-service-desc">Comprehensive electrical solutions for your home or business.</p>
          </div>
          
          <div className="ep-sc-service-card">
            <FaTint className="ep-sc-service-icon" />
            <h3 className="ep-sc-service-title">Plumbing Services</h3>
            <p className="ep-sc-service-desc">Expert plumbing services to keep your water systems running smoothly.</p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="ep-sc-why-choose">
        <h2 className="ep-sc-section-title">Why Choose Us?</h2>
        
        <div className="ep-sc-benefits">
          <div className="ep-sc-benefit">
            <FaClock className="ep-sc-benefit-icon" />
            <div className="ep-sc-benefit-content">
              <h4 className="ep-sc-benefit-title">Fast Response</h4>
              <p className="ep-sc-benefit-desc">We respond quickly to your service requests, ensuring minimal disruption.</p>
            </div>
          </div>
          
          <div className="ep-sc-benefit">
            <FaUserTie className="ep-sc-benefit-icon" />
            <div className="ep-sc-benefit-content">
              <h4 className="ep-sc-benefit-title">Certified Technicians</h4>
              <p className="ep-sc-benefit-desc">Our technicians are highly trained and certified to handle any electrical or plumbing issue.</p>
            </div>
          </div>
          
          <div className="ep-sc-benefit">
            <FaSmile className="ep-sc-benefit-icon" />
            <div className="ep-sc-benefit-content">
              <h4 className="ep-sc-benefit-title">Customer Satisfaction</h4>
              <p className="ep-sc-benefit-desc">We are committed to providing excellent service and ensuring our customers are happy.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="ep-sc-contact-info">
        <h2 className="ep-sc-section-title">Contact Us</h2>
        <p className="ep-sc-contact-desc">
          For any inquiries or to book our services, please contact us. We are available 24/7 to assist you with your electrical and plumbing needs.
        </p>
        
        <div className="ep-sc-contact-methods">
          <div className="ep-sc-contact-method">
            <FaPhone className="ep-sc-contact-icon phone" />
            <span>75980 60503 / 96774 22040</span>
          </div>
          <div className="ep-sc-contact-method">
            <FaEnvelope className="ep-sc-contact-icon" />
            <span>support@epservices.com</span>
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="ep-sc-booking-form">
        <h2 className="ep-sc-section-title">Booking Form</h2>
        
        <form className="ep-sc-form" onSubmit={handleSubmit}>
          <div className="ep-sc-form-group">
            <label className="ep-sc-form-label">Service Type</label>
            <div className="ep-sc-select-wrapper">
              <select className="ep-sc-form-select" required>
                <option value="">Select Service</option>
                <option value="Electrical Services">Electrical Services</option>
                <option value="Plumbing Services">Plumbing Services</option>
              </select>
            </div>
          </div>
          
          <div className="ep-sc-form-group">
            <label className="ep-sc-form-label">Your Name</label>
            <input type="text" className="ep-sc-form-input" placeholder="Enter your name" required />
          </div>
          
          <div className="ep-sc-form-group">
            <label className="ep-sc-form-label">Phone</label>
            <input type="tel" className="ep-sc-form-input" placeholder="Your phone number" required />
          </div>
          
          <div className="ep-sc-form-group">
            <label className="ep-sc-form-label">Address</label>
            <textarea className="ep-sc-form-textarea" placeholder="Your address" required></textarea>
          </div>
          
          {/* 🔧 Normal Submit Button */}
          <button type="submit" className="ep-sc-submit-btn-normal">
            Submit
          </button>
        </form>
      </section>

      {/* Service Areas */}
      <section className="ep-sc-service-areas">
        <FaMapMarkerAlt className="ep-sc-area-icon" />
        <h2 className="ep-sc-section-title">Service Areas Covered</h2>
        <p className="ep-sc-areas-desc">
          We provide services in the following areas: Pollachi, Kinathukadavu, Udumalpet, 
          Coimbatore, and surrounding areas.
        </p>
      </section>
    </div>
  );
};

export default EP_ServicesContact;
