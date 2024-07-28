import { Header } from "./components/Header/Header";
import { Quote } from "./components/Quote/Quote";
import { SidePhoto } from "./components/SidePhoto/SidePhoto";
import "./App.css";

import React from "react";

export default function App() {
  return (
    <>
      <Header />
      <div className="main-content">
        <SidePhoto />
        <Quote />
      </div>
    </>
  );
}
