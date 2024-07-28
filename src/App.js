import { Quote } from "./components/Quote/Quote";
import { SidePhoto } from "./components/SidePhoto/SidePhoto";
import "./App.css";

import React from "react";

export default function App() {
  return (
    <>
      <div className="main-content">
        <SidePhoto />
        <Quote />
      </div>
    </>
  );
}
