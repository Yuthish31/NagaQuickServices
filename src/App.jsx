import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";
import TaxiHome from "./pages/Taxi/TaxiHome";
import TaxiAbout from "./pages/Taxi/TaxiAbout";
import TaxiServices from "./pages/Taxi/TaxiServices";
import TaxiContact from "./pages/Taxi/TaxiContact";
import EP_ServicesHome from "./pages/EP_Services/EP_ServicesHome";
import EP_ServicesAbout from "./pages/EP_Services/EP_ServicesAbout";
import EP_ServicesServices from "./pages/EP_Services/EP_ServicesServices";
import EP_ServicesContact from "./pages/EP_Services/EP_ServicesContact";
import SwitchButton from "./components/SwitchButton";
import Header from "./components/Header";
import Footer from "./components/Footer";
import './App.css';

function AppRoutes() {
  const location = useLocation();
  const showSwitchButton = location.pathname === "/" || location.pathname === "/ep_services";

  return (
    <div className="app-container">
        <Header />
          <main className="main-content">
            {showSwitchButton && <SwitchButton />}
            <Routes>
              <Route path="/" element={<TaxiHome />} />
              <Route path="/taxi/about" element={<TaxiAbout />} />
              <Route path="/taxi/services" element={<TaxiServices />} />
              <Route path="/taxi/contact" element={<TaxiContact />} />
              <Route path="/ep_services" element={<EP_ServicesHome />} />
              <Route path="/ep_services/about" element={<EP_ServicesAbout />} />
              <Route path="/ep_services/services" element={<EP_ServicesServices />} />
              <Route path="/ep_services/contact" element={<EP_ServicesContact />} />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </main>
        <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

export default App;