import React from 'react';

import Avatar from "../assets/avatar.png";

const About = () => {
  return (
    <div>
        <h1>About Me</h1>
        <img src={Avatar} className="img" alt="true"/>
        <p>I am a full stack developer. 
           I have an MBA degree from Westcliff University.
           I create and maintain responsive secure websites
        </p>
    </div>
  );
}

export default About;