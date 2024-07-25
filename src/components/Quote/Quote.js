import { useState } from "react";

export const Quote = () => {
  const [sectionName, setSectionName] = useState(
    "Welcome to my portfolio, let's find out who I am"
  );
  return (
    <div>
      <p>{sectionName}</p>
      <p>
        {" "}
        <button
          className="section-button"
          onClick={() => setSectionName("Overview")}
        >
          Overview about me
        </button>
      </p>
      <p>
        {" "}
        <button
          className="section-button"
          onClick={() => setSectionName("My Working Experiences")}
        >
          My Working Experiences
        </button>
      </p>
      <p>
        {" "}
        <button
          className="section-button"
          onClick={() => setSectionName("My Projects")}
        >
          My Projects
        </button>
      </p>
      <p>
        {" "}
        <button
          className="section-button"
          onClick={() => setSectionName("My Hardskills")}
        >
          My Hardskills
        </button>
      </p>
      <p>
        <button
          className="section-button"
          onClick={() => setSectionName("My Certificates")}
        >
          My Certificates
        </button>
      </p>
    </div>
  );
};
