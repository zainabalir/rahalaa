import React from 'react';
import './button.css';

const Button = ({ label, width, height,fontSize, className }) => {
  return (
    <div className={`butt ${className}`} style={{ width: width,fontSize: fontSize,height: height }}>
      <button style={{ width: '100%', height: '100%'  }}>
        <span className="transition"></span>
        <span className="gradient"></span>
        <span className="label">{label}</span>
      </button>
    </div>
  );
};





export default Button;
