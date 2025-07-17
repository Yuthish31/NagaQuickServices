import React from 'react';
import './Loader.css'; // Add animations here

const Loader = () => {
  return (
    <div className="loader-container">
      <div className="spinner" />
      <h2>Loading...</h2>
    </div>
  );
};

export default Loader;
