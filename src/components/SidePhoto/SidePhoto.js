import React from "react";
import defaultImage from "../../assets/logo.webp";
import WorkingExperiencesImage from "../../assets/htv_logo.png";
import JavascriptLogo from "../../assets/JavaScript-logo.png";
import avatar from "../../assets/avatar.png";
import hda from "../../assets/hda.png";
import { Viewpager } from "./Viewpager/Viewpager";

export const SidePhoto = ({ selectedSection }) => {
  let images;

  switch (selectedSection) {
    case "Overview":
      images = [avatar, hda];
      break;
    case "Working Experiences":
      images = [WorkingExperiencesImage, JavascriptLogo];
      break;
    case "My Projects":
      images = [
        "https://images.pexels.com/photos/62689/pexels-photo-62689.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/924675/pexels-photo-924675.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      ];
      break;
    case "My Skills":
      images = [
        "https://images.pexels.com/photos/351265/pexels-photo-351265.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/924675/pexels-photo-924675.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      ];
      break;
    case "My Certificates":
      images = [
        "https://images.pexels.com/photos/4016596/pexels-photo-4016596.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/351265/pexels-photo-351265.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/924675/pexels-photo-924675.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      ];
      break;
    case "Homepage":
      images = [defaultImage];
      break;
    default:
      images = [defaultImage];
  }

  return <Viewpager images={images} />;
};
