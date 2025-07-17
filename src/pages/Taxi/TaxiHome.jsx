import React from 'react';
import './TaxiHome.css';
import { FaClock, FaMapMarkerAlt, FaPhone, FaWhatsapp, FaCar, FaShieldAlt, FaUserTie, FaMoneyBillAlt } from 'react-icons/fa';

const TaxiHome = () => {
  return (
    <div className="taxi-home">
      <div className="image-container">
        <h1 className="section-title">Kani Travels</h1>
        <p className="st-p1">Ride Smart. Ride Safe. Ride with Us.</p>
        <a
          href="https://wa.me/919677422040"
          target="_blank"
          rel="noopener noreferrer"
          className="Book-Now"
        >
          Book Now!
        </a>
      </div>

      <div className="taxi-content">
        <h1>Welcome to Kani Travels!</h1>
        <p>Reliable. Comfortable. On Time.</p>
        <p>We're glad you're here! Whether you're heading to the airport, work, or a special event, our trusted taxi service is ready to take you there—safely and on time.
        Book your ride now and experience the comfort of a smooth journey with friendly drivers and clean vehicles.</p>

        {/* Quick Info Section */}
        <div className="info-section">
          <h2 className="section-header">Quick Info</h2>
          <div className="info-grid">
            <div className="info-card">
              <div className="info-icon-container">
                <FaClock className="info-icon" />
              </div>
              <h3>Operating Hours</h3>
              <p>24/7</p>
            </div>

            <div className="info-card">
              <div className="info-icon-container">
                <FaMapMarkerAlt className="info-icon" />
              </div>
              <h3>Service Areas</h3>
              <p>Pollachi & Surrounding Areas with all Over Tamil Nadu</p>
            </div>

            <div className="info-card">
              <div className="info-icon-container">
                <FaPhone className="info-icon phone" />
              </div>
              <h3>Contact Number</h3>
              <p>+91 75980 60503<br />+91 96774 22040</p>
            </div>

            <div className="info-card">
              <div className="info-icon-container">
                <FaWhatsapp className="info-icon" />
              </div>
              <h3>WhatsApp</h3>
              <a href="https://wa.me/919677422040" className="whatsapp-link">Chat on WhatsApp</a>
            </div>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="features-section">
          <h2 className="section-header">Why Choose Us?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon-container">
                <FaShieldAlt className="feature-icon" />
              </div>
              <h3>Safe & Clean Rides</h3>
              <p>Our vehicles are regularly maintained and safety is our top priority.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon-container">
                <FaClock className="feature-icon" />
              </div>
              <h3>On-Time Pickup</h3>
              <p>We ensure timely pickups, so you're never late.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon-container">
                <FaUserTie className="feature-icon" />
              </div>
              <h3>Experienced Drivers</h3>
              <p>Our drivers are highly skilled and know the area well.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon-container">
                <FaMoneyBillAlt className="feature-icon" />
              </div>
              <h3>Affordable Rates</h3>
              <p>We offer competitive pricing without compromising quality.</p>
            </div>
          </div>
        </div>

        <div className="contact-info">
          <p><strong>Location:</strong> Pollachi – 642123</p>
        </div>

        <a
          href="https://wa.me/919677422040"
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-button"
        >
          Book on WhatsApp
        </a>
      </div>
    </div>
  );
};

export default TaxiHome;