import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./ApprRoutes";
import "./App.css";

export default function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <AppRoutes />
    </Router>
  );
}
