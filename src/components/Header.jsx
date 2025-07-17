import { Link, useLocation } from "react-router-dom";
import './Header.css';

const Header = () => {
  const location = useLocation();
  const isEP = location.pathname.startsWith("/ep_services");

  return (
    <header className="header">
      <div className="header-container">
        <h1 className="logo">
          {isEP ? "Electrical & Plumbing Services" : "Kani Travels"}
        </h1>
        <nav className="nav">
          <Link 
            to={isEP ? "/ep_services" : "/"} 
            className={`nav-link ${location.pathname === (isEP ? "/ep_services" : "/") ? "active" : ""}`}
          >
            Home
          </Link>
          <Link 
            to={isEP ? "/ep_services/services" : "/taxi/services"} 
            className={`nav-link ${location.pathname === (isEP ? "/ep_services/services" : "/taxi/services") ? "active" : ""}`}
          >
            Services
          </Link>
          <Link 
            to={isEP ? "/ep_services/about" : "/taxi/about"} 
            className={`nav-link ${location.pathname === (isEP ? "/ep_services/about" : "/taxi/about") ? "active" : ""}`}
          >
            About
          </Link>
          <Link 
            to={isEP ? "/ep_services/contact" : "/taxi/contact"} 
            className={`nav-link ${location.pathname === (isEP ? "/ep_services/contact" : "/taxi/contact") ? "active" : ""}`}
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;