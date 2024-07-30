import React from "react";
import { Link } from "react-router-dom";
import "./styles.css"; // Ensure you create and import the CSS file

export const Home = () => {
  return (
    <div className="home-container">
      <h1>Home Page</h1>
      <div className="button-container">
        <Link to="/overview" className="nav-button">
          Overview
        </Link>
        <Link to="/projects" className="nav-button">
          My Projects
        </Link>
        <Link to="/workexperiences" className="nav-button">
          Working Experiences
        </Link>
        <Link to="/skills" className="nav-button">
          My Skills
        </Link>
      </div>
    </div>
  );
};
