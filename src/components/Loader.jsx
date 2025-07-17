import React from 'react';
import './Loader.css';

const Loader = () => {
  return (
    <div className="loader-container">
      <div className="spinner">
        <div className="spinner-circle spinner-circle-outer"></div>
        <div className="spinner-circle spinner-circle-inner"></div>
        <div className="spinner-circle spinner-circle-single"></div>
      </div>
      <h2 className="loader-text">Loading...</h2>
    </div>
  );
};

export default Loader;