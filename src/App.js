import React, { useState } from "react";
import { Contents } from "./components/Contents/Contents";
import { SidePhoto } from "./components/SidePhoto/SidePhoto";
import "./App.css";

export default function App() {
  const [selectedSection, setSelectedSection] = useState("Overview");

  const handleSectionChange = (section) => {
    setSelectedSection(section);
  };

  return (
    <div className="main-content">
      <SidePhoto selectedSection={selectedSection} />
      <Contents onSectionChange={handleSectionChange} />
    </div>
  );
}
