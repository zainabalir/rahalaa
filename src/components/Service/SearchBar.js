import React, { useState } from "react";
import './services.css'

const SearchBar = () => {
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  const [traveler, setTraveler] = useState("");
  const [locationOptions, setLocationOptions] = useState([
    "Center Point, Los Angeles",
    "Center Point, London",
    "Center Point, Tokyo",
  ]);

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  return (
    <div className="form-container">
      {/* Location Dropdown */}
      <div className="input-container">
        <label htmlFor="location">Where</label>
        <input
          list="locationOptions"
          id="location"
          value={location}
          onChange={handleLocationChange}
          placeholder="Choose a location"
        />
        <datalist id="locationOptions">
          {locationOptions.map((option, index) => (
            <option key={index} value={option} />
          ))}
        </datalist>
      </div>

      {/* Date Input */}
      <div className="input-container">
        <label htmlFor="date">Date</label>
        <input
          type="date"
          id="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>

      {/* Traveler Input */}
      <div className="input-container">
        <label htmlFor="traveler">Traveler</label>
        <input
          type="text"
          id="traveler"
          value={traveler}
          onChange={(e) => setTraveler(e.target.value)}
          placeholder="Enter traveler name"
        />
      </div>

      {/* Submit Button */}
      <div className="input-container">
        <button className="submit-btn">Travel Company Booking</button>
      </div>
    </div>
  );
};

export default SearchBar;