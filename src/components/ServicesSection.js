import React from 'react';
// import Icons
import clock from '../img/clock.svg';
import diaphragm from '../img/diaphragm.svg';
import money from '../img/money.svg';
import teamwork from '../img/teamwork.svg';

const ServicesSection = () => {
    return (
        <div className="services">
            <div className="description">
                <h2>Bespoke <span>Mixed-Media</span> Works</h2>
                <div className="cards">
                    <div className="card">
                        <div className="icon">
                            <img src={clock} alt="clock" />
                            <h3>Deadline Driven</h3>
                        </div>
                    </div>
                    <div className="card">
                        <div className="icon">
                            <img src={diaphragm} alt="diaphragm" />
                            <h3>Eye for Detail</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. </p>
                    </div>
                    <div className="card">
                        <div className="icon">
                            <img src={money} alt="money" />
                            <h3>Open to Commissions</h3>
                        </div>
                    </div>
                    <div className="card">
                        <div className="icon">
                            <img src={teamwork} alt="teamwork" />
                            <h3>Part of the Team</h3>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ServicesSection;