import React from "react";
import "./Header.css";

export const Header = () => {
  return (
    <div className="header-container">
      <a
        href="https://www.google.de/maps/place/64285+Eberstadt/@49.8518646,8.6200775,6843m/data=!3m2!1e3!4b1!4m6!3m5!1s0x47bd7a997167eac1:0x1c224353694a9300!8m2!3d49.8537341!4d8.656811!16s%2Fg%2F1tdzf383?entry=ttu"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src=" https://cdn.vectorstock.com/i/1000v/65/30/address-icon-home-location-vector-47106530.jpg"
          alt="GitHub"
          className="logo"
        />
        64285 Darmstadt
      </a>
      <a href="tel:+491786175110">
        {" "}
        <img
          src="https://www.shutterstock.com/image-vector/phone-icon-trendy-flat-style-600nw-1189157305.jpg"
          alt="mobile-logo"
          className="logo"
        />
        +491786175110
      </a>

      <a
        href="https://github.com/dangminh214"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="https://i.pinimg.com/originals/b5/1b/78/b51b78ecc9e5711274931774e433b5e6.png"
          alt="GitHub"
          className="logo"
        />
        dangminh214
      </a>
      <a href="mailto:dangminh214@gmail.com">
        <img
          src="https://static.vecteezy.com/system/resources/previews/022/647/958/non_2x/email-icon-for-your-website-mobile-presentation-and-logo-design-free-vector.jpg"
          alt="gmail-logo"
          className="logo"
        />
        dangminh214@gmail.com
      </a>
    </div>
  );
};
