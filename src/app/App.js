import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./ApprRoutes";
import "./App.css";
import { Header } from "../components/Header/Header";

export default function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="cursor__dot"></div>
      <Header />
      <AppRoutes />
    </Router>
  );
}
