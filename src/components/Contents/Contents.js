import { useState } from "react";
import { Overview } from "../Overview/Overview";
import { WorkingExperiences } from "../WorkingExperiences/WorkingExperiences";
import { MyProjects } from "../MyProjects/MyProjects";
import { MyCertificates } from "../MyCertificates/MyCertificates";
import "./Contents.css";
import { MySkills } from "../MySkills/MySkills";

export const Quote = () => {
  const defaultTitle = "Welcome to my portfolio";
  const [sectionName, setSectionName] = useState(defaultTitle);
  const [changedSection, setChangedSection] = useState(false);
  const [activated, setActivated] = useState(false);
  const [sections] = useState([
    "Overview",
    "Working Experiences",
    "My Projects",
    "My Skills",
    "My Certificates",
  ]);

  const handleSectionChange = (section) => {
    setActivated(true);
    setSectionName(section);
    setChangedSection(true);
  };

  const handleBackButton = () => {
    setActivated(false);
    setSectionName(defaultTitle);
    setChangedSection(false);
  };

  let styles = { color: changedSection ? "#1c1c84" : "black" };

  return (
    <div className="content">
      <h2 style={styles}>{sectionName}</h2>
      {sectionName === "Overview" && <Overview />}
      {sectionName === "Working Experiences" && <WorkingExperiences />}
      {sectionName === "My Projects" && <MyProjects />}
      {sectionName === "My Skills" && <MySkills />}
      {sectionName === "My Certificates" && <MyCertificates />}
      {activated ? (
        <button onClick={handleBackButton}>Back</button>
      ) : (
        sections.map((section, index) => (
          <p key={index}>
            <button
              className="section-button"
              onClick={() => handleSectionChange(section)}
            >
              {section}
            </button>
          </p>
        ))
      )}
    </div>
  );
};