import React from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css"; // Ensure you create and import the CSS file

export const BackButton = () => {
  const navigate = useNavigate();

  return (
    <button className="back-button" onClick={() => navigate(-1)}>
      Back
    </button>
  );
};
