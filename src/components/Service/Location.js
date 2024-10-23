// Location.js
import React from 'react';
import './services.css'

const Location = () => {
  return (
    <div className="location">
      <span role="img" aria-label="location" className="icon">📍</span>
      <label className="label" htmlFor="location-input">Where</label>
      <input id="location-input" type="text" placeholder="Enter location" />
    </div>
  );
};

export default Location;
