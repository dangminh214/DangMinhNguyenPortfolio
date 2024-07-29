import React, { useState } from "react";
import { Contents } from "./components/Contents/Contents";
import { SidePhoto } from "./components/SidePhoto/SidePhoto";
import { Header } from "./components/Header/Header";
import "./App.css";

export default function App() {
  const [selectedSection, setSelectedSection] = useState("Homepage");

  const handleSectionChange = (section) => {
    setSelectedSection(section);
  };

  return (
    <>
      <Header />
      <div className="main-content">
        {/* <SidePhoto selectedSection={selectedSection} /> */}
        <Contents onSectionChange={handleSectionChange} />
      </div>
    </>
  );
}
