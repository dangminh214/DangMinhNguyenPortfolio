import { useState } from "react";
import { Overview } from "../Overview/Overview";
import "./Quote.css";

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
