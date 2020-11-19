import React from 'react';
import home1 from '../img/home1.png';

const AboutSection = () => {
    return (
        <div className="description">
            <div className="title">
                <div className="hide">
                    <h2>I love to create</h2>
                </div>
                <div className="hide">
                    <h2>Artworks <span>Web-Development</span> & </h2>
                </div>
                <div className="hide">
                    <h2>Fashion</h2>
                </div>
            </div>
            <p>Get in contact and let's make great things</p>
            <button>Contacts Us</button>
            <div className="image">
                <img src={home1} alt="profile" />
            </div>
        </div>
    )
}

export default AboutSection;