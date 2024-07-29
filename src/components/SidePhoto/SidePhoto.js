import React, { useState, useEffect } from "react";
import defaultImage from "../../assets/logo.webp";
import WorkingExperiencesImage from "../../assets/htv_logo.png";
import JavascriptLogo from "../../assets/JavaScript-logo.png";
import avatar from "../../assets/avatar.png";
import hda from "../../assets/hda.png";
import steamFlipCalcImg from "../../assets/steamflipcal.png";
import steamFlipCalcImg2 from "../../assets/steamflipcalc2.png";
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
          steamFlipCalcImg,
          steamFlipCalcImg2,
          "https://static-00.iconduck.com/assets.00/typescript-plain-icon-256x256-ypojgpyj.png",
        ]);
        break;
      case "My Skills":
        setImages([
          "https://media.licdn.com/dms/image/D4E12AQGmeG3bDuWOgA/article-cover_image-shrink_720_1280/0/1688282331421?e=2147483647&v=beta&t=5DAKzEUi8dK_d1ONVDqgUYnTRQmighfwqBiO2Pt0I7w",
          "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          "https://static-00.iconduck.com/assets.00/typescript-icon-icon-1024x1024-vh3pfez8.png",
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
