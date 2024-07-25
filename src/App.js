import { Header } from "./components/Header/Header";
import { Quote } from "./components/Quote/Quote";
import "./App.css";

import React from "react";

export default function App() {
  const userName = "Dang Minh Nguyen";
  return (
    <>
      <Header />
      <div>
        <h1>{userName}</h1>
      </div>
      <Quote />
    </>
  );
}
