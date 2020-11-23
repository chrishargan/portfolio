import React from 'react';
// import Icons and images
import clock from '../img/clock.svg';
import diaphragm from '../img/diaphragm.svg';
import money from '../img/money.svg';
import teamwork from '../img/teamwork.svg';
import home2 from '../img/home2.png';
import styled from 'styled-components';
import { StyledAbout, StyledDescription, StyledImage } from '../styles';

const ServicesSection = () => {
    return (
        <Services>
            <StyledDescription>
                <h2>Bespoke <span>Mixed-Media</span> Works</h2>
                <Cards>
                    <Card>
                        <div className="icon">
                            <img src={clock} alt="clock" />
                            <h3>Deadline Driven</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <img src={diaphragm} alt="diaphragm" />
                            <h3>Eye for Detail</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <img src={money} alt="money" />
                            <h3>Open to Commissions</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <img src={teamwork} alt="teamwork" />
                            <h3>Part of the Team</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                    </Card>
                </Cards>
            </StyledDescription>
            <StyledImage>
                <img src={home2} alt="Homepage" />
            </StyledImage>
        </Services>
    );
};

const Services = styled(StyledAbout)`
h2{
    padding-bottom: 5rem;
}
p {
    width: 70%;
    padding: 2rem 0rem 4rem 0rem;
}
`;

const Cards = styled.div`
  display:flex;
  flex-wrap: wrap;
`;
const Card = styled.div`
flex-basis: 20rem;
.icon {
    display: flex;
    align-items: center;
    h3 {
        margin-left: 1rem;
        background: white;
        color: black;
        padding: 1rem;
    }
}
`;

export default ServicesSection;