import React, { useState, useEffect } from "react";
import defaultImage from "../../assets/logo.webp";
import WorkingExperiencesImage from "../../assets/htv_logo.png";
import JavascriptLogo from "../../assets/JavaScript-logo.png";
import avatar from "../../assets/avatar.png";
import hda from "../../assets/hda.png";
import { Viewpager } from "./Viewpager/Viewpager";

export const SidePhoto = ({ selectedSection }) => {
  const [images, setImages] = useState([defaultImage]);

  useEffect(() => {
    switch (selectedSection) {
      case "Overview":
        setImages([defaultImage, avatar, hda]);
        break;
      case "Working Experiences":
        setImages([
          WorkingExperiencesImage,
          JavascriptLogo,
          "https://images.pexels.com/photos/24446093/pexels-photo-24446093/free-photo-of-ly-c-c-chen-kinh.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        ]);
        break;
      case "My Projects":
        setImages([
          "https://images.pexels.com/photos/3194519/pexels-photo-3194519.jpeg",
          "https://images.pexels.com/photos/62689/pexels-photo-62689.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
          "https://images.pexels.com/photos/924675/pexels-photo-924675.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        ]);
        break;
      case "My Skills":
        setImages([
          "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          "https://images.pexels.com/photos/351265/pexels-photo-351265.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
          "https://images.pexels.com/photos/924675/pexels-photo-924675.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        ]);
        break;
      case "My Certificates":
        setImages([
          "https://images.pexels.com/photos/4016596/pexels-photo-4016596.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
          "https://images.pexels.com/photos/351265/pexels-photo-351265.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
          "https://images.pexels.com/photos/924675/pexels-photo-924675.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        ]);
        break;
      default:
        setImages([defaultImage]);
    }
  }, [selectedSection]);

  return <Viewpager images={images} />;
};
