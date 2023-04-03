import React from 'react';

import Avatar from "../assets/avatar.png";

const About = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>About Me</h1>
                <p>I prefer to be called Vicky and I am a full stack developer. 
                   I have an MBA degree from Westcliff University.
                   I create and maintain responsive secure websites
                </p>
        </div>
        <div className="right">
            <div className="img-container">
              <img src={Avatar} className="img" alt="true"/>
            </div>
        </div>

    </div>
  );
}

export default About;