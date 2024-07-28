import { useState } from "react";
import { Overview } from "../Overview/Overview";
import "./Quote.css";

export const Quote = () => {
  const defaultTitle = "Welcome to my portfolio";
  const [sectionName, setSectionName] = useState(defaultTitle);
  const [changedSection, setChangedSection] = useState(false);
  const [activated, setActivated] = useState(false);

  const handleOverview = () => {
    setActivated(true);
    setSectionName("Overview");
    setChangedSection(true);
  };

  const handleWorkingExprience = () => {
    setActivated(true);
    setSectionName("Working Experiences");
    setChangedSection(true);
  };

  const handleMyProjects = () => {
    setActivated(true);
    setSectionName("My Projects");
    setChangedSection(true);
  };

  const handleMyHardskills = () => {
    setActivated(true);
    setSectionName("My Hardskills");
    setChangedSection(true);
  };

  const handleMyCertificates = () => {
    setActivated(true);
    setSectionName("My Certificates");
    setChangedSection(true);
  };

  const handleBackButton = () => {
    setActivated(false);
    setSectionName(defaultTitle);
    setChangedSection(false);
  };

  let styles = { color: changedSection ? "#1c1c84" : "black" };

  return (
    <div>
      <h2 style={styles}>{sectionName}</h2>
      {sectionName === "Overview" ? <Overview /> : ""}
      {activated ? (
        <button onClick={handleBackButton}>Back</button>
      ) : (
        <p>
          <p>
            {" "}
            <button className="section-button" onClick={handleOverview}>
              Overview
            </button>
          </p>
          <p>
            {" "}
            <button className="section-button" onClick={handleWorkingExprience}>
              My Working Experiences
            </button>
          </p>
          <p>
            {" "}
            <button className="section-button" onClick={handleMyProjects}>
              My Projects
            </button>
          </p>
          <p>
            {" "}
            <button className="section-button" onClick={handleMyHardskills}>
              My Hardskills
            </button>
          </p>
          <p>
            <button className="section-button" onClick={handleMyCertificates}>
              My Certificates
            </button>
          </p>
        </p>
      )}
    </div>
  );
};
