import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

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
import Loader from "./components/Loader";

import './App.css';

function AppRoutes() {
  const location = useLocation();
  const showSwitchButton = location.pathname === "/" || location.pathname === "/ep_services";

  return (
    <div className="app-container">
      <Header />
      <main className="main-content">
        {showSwitchButton && <SwitchButton />}
        <Routes location={location} key={location.pathname}>
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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => setLoading(false);

    if (document.readyState === 'complete') {
      setLoading(false);
    } else {
      window.addEventListener('load', handleLoad);
    }

    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  return (
    <Router>
      <AnimatePresence mode="wait">
        {loading ? (
          <motion.div
            key="loader"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Loader />
          </motion.div>
        ) : (
          <motion.div
            key="app-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <AppRoutes />
          </motion.div>
        )}
      </AnimatePresence>
    </Router>
  );
}

export default App;
