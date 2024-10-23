// Traveler.js
import React from 'react';
import './services.css'

const Traveler = () => {
  return (
    <div className="traveler">
      <span role="img" aria-label="person" className="icon">👤</span>
      <span className="label">Traveler</span>
      <select>
        <option value="1">1 Traveler</option>
        <option value="2">2 Travelers</option>
        <option value="3">3 Travelers</option>
      </select>
    </div>
  );
};

export default Traveler;
