import React from 'react';

//import assets
import CodeCollab from '../assets/CodeCollab.png';
import CalendarApp from '../assets/calendar-app.png';
import FifaFever from '../assets/FIFA-Fever.png';
import PortWeb from '../assets/portfolio-website.png';
import WeatherApp from '../assets/weather-app.png';
import PreworkGuide from '../assets/prework-guide.png';



const Portfolio = () => {
  return (
    <div className="work-container">
        <h1 className="project-heading">Projects</h1>
        <div className="project-container">
            <div className="project-card">
                <img src={CodeCollab} alt=""/>
                <h2 className="project-title">CodeCollab</h2>
               <div className="project-details">
                  <p>An application for developers to meet and collaborate with other users. </p>
                  <div className="pro-btns">
                     <a href="https://my-code-collab.herokuapp.com/" className="btn">View</a>
                     <a href="https://github.com/Vickyb94/CodeCollab" className="btn">Source</a>
                  </div>
                </div>
            </div>
            <div className="project-card">
                <img src={CalendarApp} alt=""/>
                <h2 className="project-title">CalendarApp</h2>
               <div className="project-details">
                  <p>An application to add important events for time management. </p>
                  <div className="pro-btns">
                     <a href="https://vickyb94.github.io/cw5-calendar-app/" className="btn">View</a>
                     <a href="https://github.com/Vickyb94/cw5-calendar-app" className="btn">Source</a>
                  </div>
                </div>
            </div>
            <div className="project-card">
                <img src={FifaFever} alt=""/>
                <h2 className="project-title">FifaFever</h2>
               <div className="project-details">
                  <p>A project designed is to pull FIFA World Cup information that is available from different websites into one webpage for easy access. </p>
                  <div className="pro-btns">
                     <a href="https://vickyb94.github.io/FIFA-Fever/" className="btn">View</a>
                     <a href="https://github.com/Vickyb94/FIFA-Fever" className="btn">Source</a>
                  </div>
                </div>
            </div>
            <div className="project-card">
                <img src={PortWeb} alt=""/>
                <h2 className="project-title">Portfolio Website</h2>
               <div className="project-details">
                  <p>An online showcase of my projects and creative skills. </p>
                  <div className="pro-btns">
                     <a href="https://vickyb94.github.io/OA-portfolio-website/" className="btn">View</a>
                     <a href="https://github.com/Vickyb94/OA-portfolio-website" className="btn">Source</a>
                  </div>
                </div>
            </div>
            <div className="project-card">
                <img src={WeatherApp} alt=""/>
                <h2 className="project-title">Weather-App</h2>
               <div className="project-details">
                  <p>A website designed to retrieve weather data for cities. </p>
                  <div className="pro-btns">
                     <a href="https://vickyb94.github.io/cw6-weather-app/" className="btn">View</a>
                     <a href="https://github.com/Vickyb94/cw6-weather-app" className="btn">Source</a>
                  </div>
                </div>
            </div>
            <div className="project-card">
                <img src={PreworkGuide} alt=""/>
                <h2 className="project-title">Prework Guide</h2>
               <div className="project-details">
                  <p>A study guide to bootcamp prework.</p>
                  <div className="pro-btns">
                     <a href="https://vickyb94.github.io/prework-guide/" className="btn">View</a>
                     <a href="https://github.com/Vickyb94/prework-guide" className="btn">Source</a>
                  </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Portfolio;