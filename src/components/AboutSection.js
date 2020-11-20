import React from 'react';
import home1 from '../img/home1.png';
// Styled 
import styled from 'styled-components';

const AboutSection = () => {
    return (
        <StyledAbout>
            <StyledDescription>
                <div className="title">
                    <div className="hide">
                        <h2>I make</h2>
                    </div>
                    <div className="hide">
                        <h2>Artworks <span>WebDev</span> & </h2>
                    </div>
                    <div className="hide">
                        <h2>Fashion.</h2>
                    </div>
                </div>
                <p>Enjoy the site and feel free to get in touch</p>
                <button>Contacts Us</button>
            </StyledDescription>
            <img src={home1} alt="profile" />
        </StyledAbout>
    );
};

//Styled Component
const StyledAbout = styled.div`
min-height: 90vh;
display: flex;
align-items: center;
justify-content: space-between;
padding: 5rem 10rem;
color: white;
`;
const StyledDescription = styled.div`
flex: 1;
padding-right: 5rem;
h2{
    font-weight: lighter;
}
`;


export default AboutSection;