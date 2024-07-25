import { useState } from "react";
import { Overview } from "../Overview/Overview";

export const Quote = () => {
  const defaultTitle = "Welcome to my portfolio";
  const [sectionName, setSectionName] = useState(defaultTitle);

  const [activated, setActivated] = useState(false);

  const handleOverview = () => {
    setActivated(true);
    setSectionName("Overview");
  };

  const handleWorkingExprience = () => {
    setActivated(true);
    setSectionName("Working Experiences");
  };

  const handleMyProjects = () => {
    setActivated(true);
    setSectionName("My Projects");
  };

  const handleMyHardskills = () => {
    setActivated(true);
    setSectionName("My Hardskills");
  };

  const handleMyCertificates = () => {
    setActivated(true);
    setSectionName("My Certificates");
  };

  const handleBackButton = () => {
    setActivated(false);
    setSectionName(defaultTitle);
  };
  return (
    <div>
      <p>{sectionName}</p>
      {sectionName === "Overview" ? <Overview /> : ""}
      {activated ? (
        <button onClick={handleBackButton}>Back</button>
      ) : (
        <p>
          <p>
            {" "}
            <button className="section-button" onClick={handleOverview}>
              Overview about me
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
