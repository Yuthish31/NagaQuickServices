import React from 'react';
import './EP_ServicesAbout.css';
import { FaCheck, FaBolt, FaTint, FaShieldAlt, FaMoneyBillWave, FaClock } from 'react-icons/fa';

const EP_ServicesAbout = () => {
  return (
    <div className="ep-sa-container">
      {/* Hero Section */}
      <section className="ep-sa-hero">
        <div className="ep-sa-hero-content">
          <h1 className="ep-sa-main-title">Swift Electrical & Plumbing</h1>
          <p className="ep-sa-tagline">Your one-stop solution for all your home service needs. From electrical repairs to plumbing installations, we've got you covered.</p>
          <a
            href="https://wa.me/917598060503"
            target="_blank"
            rel="noopener noreferrer"
            className="ep-sa-book-button"
          >
            Book Now
          </a>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="ep-sa-story">
        <h2 className="ep-sa-section-title">Our Story</h2>
        <div className="ep-sa-story-content">
          <p>We're a professional electrical and plumbing service team serving homes and businesses with over 15 years of experience. Our mission is to solve your problems quickly and efficiently with honesty and skill.</p>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="ep-sa-values">
        <h2 className="ep-sa-section-title">Our Values</h2>
        <div className="ep-sa-values-grid">
          <div className="ep-sa-value-card">
            <div className="ep-sa-value-icon">
              <FaClock />
            </div>
            <h3>Reliability</h3>
            <div className="ep-sa-value-checkbox">
              <FaCheck className="ep-sa-checked" />
            </div>
            <p>We show up on time and complete the job right the first time.</p>
          </div>

          <div className="ep-sa-value-card">
            <div className="ep-sa-value-icon">
              <FaShieldAlt />
            </div>
            <h3>Safety</h3>
            <div className="ep-sa-value-checkbox">
              <FaCheck className="ep-sa-checked" />
            </div>
            <p>All work is performed to the highest safety standards.</p>
          </div>

          <div className="ep-sa-value-card">
            <div className="ep-sa-value-icon">
              <FaMoneyBillWave />
            </div>
            <h3>Affordability</h3>
            <div className="ep-sa-value-checkbox">
              <FaCheck className="ep-sa-checked" />
            </div>
            <p>Competitive pricing without compromising on quality.</p>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="ep-sa-services">
        <h2 className="ep-sa-section-title">Our Services</h2>

        {/* Electrical Services */}
        <div className="ep-sa-service-category">
          <div className="ep-sa-category-header">
            <FaBolt className="ep-sa-category-icon" />
            <h3 className="ep-sa-category-title">Electrical Services</h3>
          </div>
          <p className="ep-sa-category-description">Our certified electricians handle everything from minor repairs to major installations, ensuring safety and efficiency.</p>
          
          <div className="ep-sa-service-list">
            <div className="ep-sa-service-item">
              <div className="ep-sa-service-checkbox">
                <FaCheck className="ep-sa-checked" />
              </div>
              <div className="ep-sa-service-text">
                <h4>Electrical Repairs</h4>
                <p>Quick and reliable repairs for all electrical issues.</p>
              </div>
            </div>
            
            <div className="ep-sa-service-item">
              <div className="ep-sa-service-checkbox">
                <FaCheck className="ep-sa-checked" />
              </div>
              <div className="ep-sa-service-text">
                <h4>Electrical Installations</h4>
                <p>Professional installation of lighting, wiring, and more.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Plumbing Services */}
        <div className="ep-sa-service-category">
          <div className="ep-sa-category-header">
            <FaTint className="ep-sa-category-icon" />
            <h3 className="ep-sa-category-title">Plumbing Services</h3>
          </div>
          <p className="ep-sa-category-description">Our skilled plumbers provide comprehensive plumbing solutions, from fixing leaks to installing new systems.</p>
          
          <div className="ep-sa-service-list">
            <div className="ep-sa-service-item">
              <div className="ep-sa-service-checkbox">
                <FaCheck className="ep-sa-checked" />
              </div>
              <div className="ep-sa-service-text">
                <h4>Plumbing Repairs</h4>
                <p>Efficient repairs for leaks, clogs, and other plumbing problems.</p>
              </div>
            </div>
            
            <div className="ep-sa-service-item">
              <div className="ep-sa-service-checkbox">
                <FaCheck className="ep-sa-checked" />
              </div>
              <div className="ep-sa-service-text">
                <h4>Plumbing Installations</h4>
                <p>Expert installation of pipes, fixtures, and water systems.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EP_ServicesAbout;