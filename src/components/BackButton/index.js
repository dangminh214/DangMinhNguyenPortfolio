import React from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";

export const BackButton = () => {
  const navigate = useNavigate();

  return (
    <button className="back-button" onClick={() => navigate(-1)}>
      Back
    </button>
  );
};
