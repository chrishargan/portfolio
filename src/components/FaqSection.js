import React from 'react';
import styled from 'styled-components';
import { StyledAbout } from '../styles';

const FaqSection = () => {
    return (
        <Faq>
            <h2>Any Questions? <span>FAQ</span></h2>
            <div className="question">
                <h4>How do I start?</h4>
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit ipsam molestias numquam.</p>
                </div>
                <div className="faq-line"></div>
            </div>
            <div className="question">
                <h4>Checking Availability</h4>
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit ipsam molestias numquam.</p>
                </div>
                <div className="faq-line"></div>
            </div>
            <div className="question">
                <h4>Different Payment Methods</h4>
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit ipsam molestias numquam.</p>
                </div>
                <div className="faq-line"></div>
            </div>
            <div className="question">
                <h4>What products do you offer?</h4>
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit ipsam molestias numquam.</p>
                </div>
                <div className="faq-line"></div>
            </div>
            <div className="question">
                <h4>What is your Process?</h4>
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit ipsam molestias numquam.</p>
                </div>
                <div className="faq-line"></div>
            </div>
        </Faq>
    )
};

const Faq = styled(StyledAbout)`
display: block;
span {
    display: block;
}
h2{
    padding-bottom: 2rem;
    font-weight: lighter;
}
.faq-line{
    background: #cccccc;
    height: 0.2rem;
    margin:2rem 0rem;
    width: 100%auto;
}
.question{
    padding: 3rem;
    cursor: pointer;
}
.answer{
    padding: 2rem 0rem;
    p{
     padding: 1rem 0rem;
    }
}

`;

export default FaqSection;