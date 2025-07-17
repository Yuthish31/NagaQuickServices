import React from 'react';
import './EP_ServicesHome.css';
import { FaTools, FaBolt, FaTint, FaClock, FaUserTie, FaMoneyBillWave, FaShieldAlt } from 'react-icons/fa';

const EP_ServicesHome = () => {
  return (
    <div className="ep-services-home">
      {/* Hero Section */}
      <div className="ep-hero">
        <div className="ep-hero-content">
          <h1 className="ep-main-title">Electrical and Plumbing Services</h1>
          <p className="ep-tagline">On Time, Every Time.</p>
          <a
            href="https://wa.me/917598060503"
            target="_blank"
            rel="noopener noreferrer"
            className="ep-contact-button"
          >
            Book a Service
          </a>
        </div>
      </div>

      {/* Services Section */}
      <div className="ep-services-section">
        <h2 className="ep-section-title">Our Services</h2>
        <div className="ep-section-overview">
          <h3>Overview</h3>
          <p>We offer a wide range of electrical and plumbing services to meet your needs.</p>
        </div>

        <div className="ep-services-grid">
          <div className="ep-service-card">
            <div className="ep-service-icon">
              <FaBolt />
            </div>
            <h3>Electrical Services</h3>
            <p>Comprehensive electrical solutions including wiring, repairs, and installations.</p>
          </div>

          <div className="ep-service-card">
            <div className="ep-service-icon">
              <FaTint />
            </div>
            <h3>Plumbing Repairs</h3>
            <p>Reliable plumbing repairs, pipe installations, and maintenance services.</p>
          </div>

          <div className="ep-service-card">
            <div className="ep-service-icon">
              <FaClock />
            </div>
            <h3>Emergency Services</h3>
            <p>24/7 emergency services for urgent electrical and plumbing repairs.</p>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="ep-why-choose">
        <h2 className="ep-section-title">Why Choose Us</h2>
        <div className="ep-section-overview">
          <h3>Reasons to Choose Our Service</h3>
          <p>We are committed to providing the best electrical and plumbing services.</p>
        </div>

        <div className="ep-benefits-grid">
          <div className="ep-benefit-card">
            <div className="ep-benefit-icon">
              <FaUserTie />
            </div>
            <h4>Certified Technicians</h4>
            <p>Our technicians are highly trained and certified in electrical and plumbing work.</p>
          </div>

          <div className="ep-benefit-card">
            <div className="ep-benefit-icon">
              <FaMoneyBillWave />
            </div>
            <h4>Transparent Pricing</h4>
            <p>We provide clear and upfront pricing with no hidden fees.</p>
          </div>

          <div className="ep-benefit-card">
            <div className="ep-benefit-icon">
              <FaClock />
            </div>
            <h4>Quick Response</h4>
            <p>We respond quickly to your service requests, often same-day.</p>
          </div>

          <div className="ep-benefit-card">
            <div className="ep-benefit-icon">
              <FaShieldAlt />
            </div>
            <h4>Guaranteed Workmanship</h4>
            <p>We stand behind our work with a satisfaction guarantee.</p>
          </div>
        </div>
      </div>

      {/* Contact Info */}
      <div className="ep-contact-info">
        <h2 className="ep-section-title">Contact Us</h2>
        <div className="ep-contact-details">
          <p><strong>Phone:</strong> 75980 60503 / 96774 22040</p>
          <p><strong>Location:</strong> Pollachi – 642123</p>
          <a
            href="https://wa.me/919677422040"
            target="_blank"
            rel="noopener noreferrer"
            className="ep-whatsapp-button"
          >
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
};

export default EP_ServicesHome;