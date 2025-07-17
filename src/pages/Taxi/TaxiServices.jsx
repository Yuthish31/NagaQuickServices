import React from 'react';
import './TaxiServices.css';
import { 
  FaCheck, FaTaxi, FaPlane, FaRoad, FaBox, 
  FaMapMarkerAlt, FaClock, FaStar,
  FaWhatsapp, FaPhone, FaLaptop
} from 'react-icons/fa';

const TaxiServices = () => {
  return (
    <div className="TS-container">
      {/* Services Header */}
      <div className="TS-header">
        <h1 className="TS-title">Our Premium Services</h1>
        <p className="TS-subtitle">Experience the best in transportation solutions</p>
      </div>
      
      {/* Services Section */}
      <div className="TS-section">
        <div className="TS-section-header">
          <FaTaxi className="TS-section-icon" />
          <h2 className="TS-section-title">Taxi Services</h2>
        </div>
        <p className="TS-section-description">
          We offer comprehensive transportation solutions tailored to your needs:
        </p>

        <div className="TS-grid">
          <div className="TS-card">
            <div className="TS-icon">
              <FaTaxi />
            </div>
            <div className="TS-content">
              <h3>City Rides</h3>
              <p><FaMapMarkerAlt /> Coverage: Entire city area</p>
              <p><FaClock /> Availability: 24/7</p>
              <p><FaStar /> Features: AC vehicles, professional drivers</p>
            </div>
            <div className="TS-status">
              <span className="TS-status-available">
                <FaCheck /> Available
              </span>
            </div>
          </div>

          <div className="TS-card TS-featured">
            <div className="TS-badge">Most Booked</div>
            <div className="TS-icon">
              <FaPlane />
            </div>
            <div className="TS-content">
              <h3>Airport Transfers</h3>
              <p><FaMapMarkerAlt /> All major airports</p>
              <p><FaClock /> Flight tracking included</p>
              <p><FaStar /> Features: Meet & greet, luggage assistance</p>
            </div>
            <div className="TS-status">
              <span className="TS-status-available">
                <FaCheck /> Available
              </span>
            </div>
          </div>

          <div className="TS-card">
            <div className="TS-badge">Popular</div>
            <div className="TS-icon">
              <FaRoad />
            </div>
            <div className="TS-content">
              <h3>Outstation Trips</h3>
              <p><FaMapMarkerAlt /> Any destination</p>
              <p><FaClock /> Flexible durations</p>
              <p><FaStar /> Features: Multi-city options</p>
            </div>
            <div className="TS-status">
              <span className="TS-status-available">
                <FaCheck /> Available
              </span>
            </div>
          </div>

          <div className="TS-card">
            <div className="TS-icon">
              <FaBox />
            </div>
            <div className="TS-content">
              <h3>Parcel Delivery</h3>
              <p><FaMapMarkerAlt /> Citywide delivery</p>
              <p><FaClock /> Same-day service</p>
              <p><FaStar /> Features: Real-time tracking</p>
            </div>
            <div className="TS-status">
              <span className="TS-status-available">
                <FaCheck /> Available
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Booking Information Section */}
      <div className="TS-section TS-booking-section">
        <div className="TS-section-header">
          <FaTaxi className="TS-section-icon" />
          <h2 className="TS-section-title">How to Book</h2>
        </div>
        <p className="TS-section-description">
          You can book a ride through the following methods:
        </p>

        <div className="TS-booking-methods">
          <div className="TS-booking-card">
            <div className="TS-booking-icon">
              <FaWhatsapp />
            </div>
            <div className="TS-booking-content">
              <h3>WhatsApp</h3>
              <p>Send us a message on WhatsApp with your pickup and drop-off locations.</p>
              <a 
                href="https://wa.me/919677422040" 
                className="TS-booking-button TS-whatsapp-button"
                target="_blank"
                rel="noopener noreferrer"
              >
                Message Us
              </a>
            </div>
          </div>

          <div className="TS-booking-card">
            <div className="TS-booking-icon phone">
              <FaPhone />
            </div>
            <div className="TS-booking-content">
              <h3>Phone Call</h3>
              <p>Call us directly to book your ride.</p>
              <a 
                href="tel:+919677422040" 
                className="TS-booking-button TS-call-button"
              >
                Call Now
              </a>
            </div>
          </div>

          <div className="TS-booking-card">
            <div className="TS-booking-icon">
              <FaLaptop />
            </div>
            <div className="TS-booking-content">
              <h3>Online Booking System</h3>
              <p>Coming soon! We are working on an online booking system for your convenience.</p>
              <button className="TS-booking-button TS-comingsoon-button" disabled>
                Coming Soon
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaxiServices;