import React from 'react';
import './EP_ServicesServices.css';
import { FaBolt, FaFan, FaPlug, FaTools, FaTint, FaFaucet, FaToilet, FaWater, FaClock } from 'react-icons/fa';

const EP_ServicesServices = () => {
  return (
    <div className="ep-ss-services-container">
      {/* Hero Section */}
      <section className="ep-ss-hero">
        <div className="ep-ss-hero-content">
          <h1 className="ep-ss-main-title">Swift Electrical & Plumbing</h1>
          <p className="ep-ss-tagline">Your one-stop solution for all your home service needs. From electrical repairs to plumbing installations, we've got you covered.</p>
          <a
            href="https://wa.me/917598060503"
            target="_blank"
            rel="noopener noreferrer"
            className="ep-ss-book-button"
          >
            Book Now
          </a>
        </div>
      </section>

      {/* Services Section */}
      <section className="ep-ss-services-section">
        <h2 className="ep-ss-section-title">Our Services</h2>

        {/* Electrical Services */}
        <div className="ep-ss-service-category">
          <div className="ep-ss-category-header">
            <FaBolt className="ep-ss-category-icon" />
            <h3 className="ep-ss-category-title">Electrical Services</h3>
          </div>
          <p className="ep-ss-category-description">Our certified electricians handle everything from minor repairs to major installations, ensuring safety and efficiency.</p>

          <div className="ep-ss-service-grid">
            <div className="ep-ss-service-card">
              <FaFan className="ep-ss-service-icon" />
              <h4>Fan & Light Installation</h4>
              <p>Professional installation of ceiling fans, exhaust fans, and all types of lighting fixtures.</p>
            </div>

            <div className="ep-ss-service-card">
              <FaPlug className="ep-ss-service-icon" />
              <h4>Switchboard Repairs</h4>
              <p>Repair and maintenance of switchboards, including fuse replacements and safety checks.</p>
            </div>

            <div className="ep-ss-service-card">
              <FaTools className="ep-ss-service-icon" />
              <h4>Wiring & Rewiring</h4>
              <p>Complete wiring and rewiring services for homes and offices, ensuring safety and compliance.</p>
            </div>

            <div className="ep-ss-service-card">
              <FaBolt className="ep-ss-service-icon" />
              <h4>Inverter & Solar Panel Setup</h4>
              <p>Installation and maintenance of inverters and solar panel for uninterrupted power supply.</p>
            </div>
          </div>
        </div>

        {/* Plumbing Services */}
        <div className="ep-ss-service-category">
          <div className="ep-ss-category-header">
            <FaTint className="ep-ss-category-icon" />
            <h3 className="ep-ss-category-title">Plumbing Services</h3>
          </div>
          <p className="ep-ss-category-description">Our skilled plumbers provide comprehensive plumbing solutions, from fixing leaks to installing new systems.</p>

          <div className="ep-ss-service-grid">
            <div className="ep-ss-service-card">
              <FaFaucet className="ep-ss-service-icon" />
              <h4>Tap & Pipe Repairs</h4>
              <p>Repair and replacement of taps and pipes, addressing leaks and ensuring proper water flow.</p>
            </div>

            <div className="ep-ss-service-card">
              <FaToilet className="ep-ss-service-icon" />
              <h4>Bathroom Fittings</h4>
              <p>Installation and repair of bathroom fixtures, including showers, sinks, and toilets.</p>
            </div>

            <div className="ep-ss-service-card">
              <FaWater className="ep-ss-service-icon" />
              <h4>Leak Fixing</h4>
              <p>Expert leak detection and repair services, preventing water damage and wastage.</p>
            </div>

            <div className="ep-ss-service-card">
              <FaTint className="ep-ss-service-icon" />
              <h4>Water Tank Cleaning</h4>
              <p>Thorough cleaning of water tanks to ensure clean and safe water supply.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Services */}
      <section className="ep-ss-emergency-section">
        <div className="ep-ss-emergency-content">
          <FaClock className="ep-ss-emergency-icon" />
          <h3 className="ep-ss-emergency-title">Emergency Services</h3>
          <p className="ep-ss-emergency-text">We offer 24/7 emergency services for urgent electrical and plumbing repair needs. Contact us anytime for immediate assistance.</p>
          <a href="tel:7598060503" className="ep-ss-emergency-button">Call Now: 75980 60503</a>
        </div>
      </section>
    </div>
  );
};

export default EP_ServicesServices;
