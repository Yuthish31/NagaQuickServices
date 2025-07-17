import React from 'react';
import './TaxiAbout.css';
import AboutImage from '../../assets/img/taxi_about.jpg'; // Optional image import

const TaxiAbout = () => {
  return (
    <div className="taxi-about-container">
      <h1 className="taxi-about-title">About Us</h1>
      
      {/* Optional Image - Remove if not needed */}
      <div className="about-image-container">
        <img src={AboutImage} alt="Our Taxi Fleet" className="about-image" />
      </div>

      <div className="about-section">
        <h2 className="section-subtitle">Company Introduction</h2>
        <p className="about-text">
          We're a small, family-owned taxi business operating since 2020. With a fleet of 3 reliable cars and trusted local drivers, we aim to deliver safe and timely rides for our community.
        </p>
      </div>

      <div className="about-section">
        <h2 className="section-subtitle">Our Mission</h2>
        <p className="about-text">
          Our mission is to provide reliable, safe, and efficient transportation services to our community, ensuring every ride is a pleasant experience.
        </p>
      </div>

      <div className="about-section">
        <h2 className="section-subtitle">Our Vision</h2>
        <p className="about-text">
          Our vision is to become the preferred taxi service in the area, known for our commitment to customer satisfaction and community involvement.
        </p>
      </div>

      <div className="about-section">
        <h2 className="section-subtitle">Meet Our Team</h2>
        <p className="about-text">
          Our team consists of experienced and friendly drivers who are dedicated to providing excellent service. Each driver is thoroughly vetted and trained to ensure your safety and comfort.
        </p>
      </div>

      <div className="about-contact">
        <h2 className="section-subtitle">Contact Us</h2>
        <p className="contact-info">
          <strong>Phone:</strong> 75980 60503 / 96774 22040<br />
          <strong>Location:</strong> Pollachi – 642123
        </p>
      </div>
    </div>
  );
};

export default TaxiAbout;