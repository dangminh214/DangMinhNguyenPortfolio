import React from "react";
import imageSource from "../../assets/logo.png";
import WorkingExperiencesImage from "../../assets/htv_logo.png";
// Import other images if needed

export const SidePhoto = ({ selectedSection }) => {
  let image;

  switch (selectedSection) {
    case "Overview":
      image = imageSource;
      break;
    case "Working Experiences":
      image = WorkingExperiencesImage;
      break;
    // Add other cases for different sections
    default:
      image = imageSource;
  }

  return <img className="section-picture" src={image} alt="side-images" />;
};
