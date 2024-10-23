// Import React and CSS for Header styling
import React from 'react';
import './header.css';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll'; // Renamed to avoid conflict with react-router-dom
import logo from './Untitled_logo_1_free-file__4_-removebg-preview.png';
import Button from '../Button/Button';

// Header Component
const Header = () => {
    return (
        <header className="header">
            {/* Logo Section */}
            <div className="logo">
                <img src={logo} alt="Logo" className="logo-img" />
            </div>

            {/* Navigation Links */}
            <nav className="nav-links">
                <ul className='list'>
                    <li><Link to="/">Home</Link></li>
                    <li><ScrollLink to="culture" smooth={true} duration={500}>Culture</ScrollLink></li>
                    <li><ScrollLink to="Attractions" smooth={true} duration={500}>Attractions</ScrollLink></li>
                    <li><ScrollLink to="services" smooth={true} duration={500}>Services</ScrollLink></li>
                    <li><ScrollLink to="About" smooth={true} duration={500}>About Us</ScrollLink></li>
                </ul>
            </nav>

            {/* Login Button */}
            <div className="login-container">
                <Button>Log In</Button>
            </div>
        </header>
    );
};

// Export the Header component for reuse
export default Header;
