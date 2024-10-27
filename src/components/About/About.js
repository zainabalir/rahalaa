import React from 'react';
import './About.css';
import iraqiArtifacts from '../Attractioncard/citadel-of-erbi.jpg'; // استبدل بالمسار الصحيح للصورة

const About = () => {
    return (
        <section className="about-section">
            <div className="about-container">
                <h2 className="about-title">About Rahaala</h2>
                <p className="about-description">
                    Welcome to "Rahaala," where we offer you a glimpse into Iraq's rich artifacts and ancient history. 
                    From tourist attractions to religious sites, we are here to help you explore all that this magnificent country has to offer.
                </p>
                <h3 className="about-subtitle">Our Services</h3>
                <ul className="about-services">
                    <li>Exploration of archaeological sites</li>
                    <li>Guided tours of religious sites</li>
                    <li>Company booking services</li>
                    <li>Coming soon: Hotel booking services</li>
                </ul>
            </div>
        </section>
    );
};

export default About;
