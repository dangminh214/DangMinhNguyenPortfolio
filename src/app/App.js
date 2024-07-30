import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import AppRoutes from "./AppRoutes.js";
import { Header } from "../components/Header/Header";
import { BackButton } from "../components/BackButton";
import "./App.css";

const AppContent = () => {
  const location = useLocation();

  return (
    <>
      <Header />
      <AppRoutes />
      {location.pathname !== "/" && <BackButton />}
    </>
  );
};

const App = () => (
  <Router basename={process.env.PUBLIC_URL}>
    <AppContent />
  </Router>
);

export default App;
