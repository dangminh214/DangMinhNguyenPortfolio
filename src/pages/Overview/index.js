import React from "react";

export const Overview = () => {
  const userName = "Dang Minh Nguyen";
  return (
    <>
      <p className="personal-data">{userName}</p>
      <p className="personal-data">21.04.2000</p>
      <p className="personal-data">Course of Study: Computer Science</p>
      <p className="personal-data">Darmstadt University of Applied Science</p>
    </>
  );
};
