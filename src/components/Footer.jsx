import { Link, useLocation } from "react-router-dom";
import './Footer.css';

const Footer = () => {
  const location = useLocation();
  const isEP = location.pathname.startsWith("/ep_services");

  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="footer-logo">
          {isEP ? "Electrical & Plumbing Services" : "Kani Travels"}
        </p>
        <nav className="footer-nav">
          <Link 
            to={isEP ? "/ep_services" : "/"} 
            className="footer-link"
          >
            Home
          </Link>
          <Link 
            to={isEP ? "/ep_services/services" : "/taxi/services"} 
            className="footer-link"
          >
            Services
          </Link>
          <Link 
            to={isEP ? "/ep_services/about" : "/taxi/about"} 
            className="footer-link"
          >
            About
          </Link>
          <Link 
            to={isEP ? "/ep_services/contact" : "/taxi/contact"} 
            className="footer-link"
          >
            Contact
          </Link>
        </nav>
        <p className="footer-copy">&copy; {new Date().getFullYear()} {isEP ? "Yuthish-3117" : "Yuthish-3117"} | All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
