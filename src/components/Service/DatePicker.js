// DatePicker.js
import React from 'react';
import './services.css'

const DatePicker = () => {
  return (
    <div className="date-picker">
      <span role="img" aria-label="calendar" className="icon">📅</span>
      <span className="label">Date</span>
      <input type="date" />
    </div>
  );
};

export default DatePicker;
