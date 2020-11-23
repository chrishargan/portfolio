import React from 'react';
import home1 from '../img/home1.png';
// Styled 
import styled from 'styled-components';
import { StyledAbout, StyledDescription, StyledHide, StyledImage } from "../styles";

const AboutSection = () => {
    return (
        <StyledAbout>
            <StyledDescription>
                <div className="title">
                    <StyledHide>
                        <h2>I make</h2>
                    </StyledHide>
                    <StyledHide>
                        <h2>Artworks <span>WebDev</span> & </h2>
                    </StyledHide>
                    <StyledHide>
                        <h2>Fashion.</h2>
                    </StyledHide>
                </div>
                <p>
                    Enjoy the site and feel free to get in touch
                </p>
                <button>Contacts Us</button>
            </StyledDescription>
            <StyledImage>
                <img src={home1} alt="profile" />
            </StyledImage>
        </StyledAbout>
    );
};



export default AboutSection;