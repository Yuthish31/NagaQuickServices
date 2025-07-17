import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { MorphSVGPlugin } from 'gsap/MorphSVGPlugin';
import './TaxiContact.css';
import { FaPhone, FaWhatsapp, FaMapMarkerAlt, FaCalendarAlt, FaClock } from 'react-icons/fa';

gsap.registerPlugin(MorphSVGPlugin);

const TaxiContact = () => {
  const buttonRef = useRef(null);
  const pathRef = useRef(null);
  const tl = useRef(gsap.timeline());

  const handleSubmit = (e) => {
    e.preventDefault();
    const button = buttonRef.current;
    const path = pathRef.current;
    const ul = button.querySelector('ul');
    const liItems = ul.querySelectorAll('li');

    if (button.classList.contains('active')) return;

    const name = document.getElementById('name').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const pickup = document.getElementById('pickup').value.trim();
    const drop = document.getElementById('drop').value.trim();
    const datetime = document.getElementById('datetime').value;

    if (!name || !phone || !pickup || !drop || !datetime) {
      alert("Please fill in all fields.");
      return;
    }

    if (!/^[0-9]{10}$/.test(phone)) {
      alert("Enter a valid 10-digit phone number.");
      return;
    }

    const message = `🚕 Taxi Booking Request%0A%0A👤 Name: ${name}%0A📞 Phone: ${phone}%0A📍 Pickup: ${pickup}%0A📍 Drop: ${drop}%0A🕒 Date/Time: ${datetime}`;
    const whatsappURL = `https://wa.me/919677422040?text=${message}`;

    // Animate button
    button.classList.add('active');
    liItems[0].textContent = 'Redirecting...';
    liItems[1].textContent = 'Sent';

    tl.current.to(path, {
      morphSVG:
        'M136,77.5h-1H4.8H4c-2.2,0-4-1.8-4-4v-47c0-2.2,1.8-4,4-4c0,0,0.6,0,0.9,0C44,22.5,66,10,66,10  s3,12.5,69.1,12.5c0.2,0,0.9,0,0.9,0c2.2,0,4,1.8,4,4v47C140,75.7,138.2,77.5,136,77.5z',
      duration: 0.3,
      delay: 0.3,
    }).to(path, {
      morphSVG:
        'M136,77.5c0,0-11.7,0-12,0c-90,0-94.2,0-94.2,0s-10.8,0-25.1,0c-0.2,0-0.8,0-0.8,0c-2.2,0-4-1.8-4-4v-47  c0-2.2,1.8-4,4-4c0,0,0.6,0,0.9,0c39.1,0,61.1,0,61.1,0s3,0,69.1,0c0.2,0,0.9,0,0.9,0c2.2,0,4,1.8,4,4v47  C140,75.7,138.2,77.5,136,77.5z',
      duration: 1.7,
      ease: 'elastic.out(1, .15)',
      onComplete() {
        liItems[0].textContent = 'Submit';
        button.classList.remove('active');
        window.open(whatsappURL, '_blank');
      },
    });
  };

  return (
    <div className="TC-container">
      <div className="TC-header">
        <h1 className="TC-title">Contact Us</h1>
        <p className="TC-subtitle">
          For any inquiries or to book our services, please contact us using the methods below. 
          We are available 24/7 to assist you with your needs.
        </p>
      </div>

      <div className="TC-content">
        <div className="TC-info-section">
          <h2 className="TC-section-title">Contact Information</h2>
          <div className="TC-contact-methods">
            <div className="TC-contact-item">
              <div className="TC-contact-icon phone"><FaPhone /></div>
              <div className="TC-contact-details">
                <h3>Phone</h3>
                <p>75980 60503 / 96774 22040</p>
              </div>
            </div>
            <div className="TC-contact-item">
              <div className="TC-contact-icon"><FaWhatsapp /></div>
              <div className="TC-contact-details">
                <h3>WhatsApp</h3>
                <a href="https://wa.me/919677422040" className="TC-whatsapp-link">Chat with us</a>
              </div>
            </div>
          </div>
        </div>

        <div className="TC-form-section">
          <h2 className="TC-section-title">Contact Form</h2>
          <form className="TC-form" onSubmit={handleSubmit}>
            <div className="TC-form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" placeholder="Enter your name" className="TC-form-input" required />
            </div>
            <div className="TC-form-group">
              <label htmlFor="phone">Phone</label>
              <input type="tel" id="phone" placeholder="Enter your phone number" className="TC-form-input" required />
            </div>
            <div className="TC-form-group">
              <label htmlFor="pickup"><FaMapMarkerAlt /> Pickup Address</label>
              <input type="text" id="pickup" placeholder="Enter pickup address" className="TC-form-input" required />
            </div>
            <div className="TC-form-group">
              <label htmlFor="drop"><FaMapMarkerAlt /> Drop Address</label>
              <input type="text" id="drop" placeholder="Enter drop address" className="TC-form-input" required />
            </div>
            <div className="TC-form-group">
              <label htmlFor="datetime"><FaCalendarAlt /> <FaClock /> Date/Time</label>
              <input type="datetime-local" id="datetime" className="TC-form-input" required />
            </div>

            <button type="submit" className="TC-submit-button button" ref={buttonRef}>
              <svg className="btn-layer">
                <path ref={pathRef} d="M136,77.5c0,0-11.7,0-12,0c-90,0-94.2,0-94.2,0s-10.8,0-25.1,0c-0.2,0-0.8,0-0.8,0c-2.2,0-4-1.8-4-4v-47c0-2.2,1.8-4,4-4c0,0,0.6,0,0.9,0c39.1,0,61.1,0,61.1,0s3,0,69.1,0c0.2,0,0.9,0,0.9,0c2.2,0,4,1.8,4,4v47C140,75.7,138.2,77.5,136,77.5z" />
              </svg>
              <svg className="plane">
                <path d="M5.25,15.24,18.42,3.88,7.82,17l0,4.28a.77.77,0,0,0,1.36.49l3-3.68,5.65,2.25a.76.76,0,0,0,1-.58L22,.89A.77.77,0,0,0,20.85.1L.38,11.88a.76.76,0,0,0,.09,1.36Z" />
              </svg>
              <ul>
                <li>Submit</li>
                <li>Sent</li>
              </ul>
            </button>
          </form>
        </div>

        <div className="TC-location-section">
          <h2 className="TC-section-title">Our Location</h2>
          <div className="TC-location-content">
            <div className="TC-location-icon"><FaMapMarkerAlt /></div>
            <p className="TC-location-address">Pollachi, Tamil Nadu - 642123</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaxiContact;
