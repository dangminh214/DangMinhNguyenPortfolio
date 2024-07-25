import { useState } from "react";
export const Quote = () => {
  const [sectionName, setSectionName] = useState(
    "Welcome to my portfolio, let's find out who I am"
  );
  return (
    <div>
      <p>{sectionName}</p>
      <button onClick={() => setSectionName("Overview")}>
        Overview about me
      </button>
      <button onClick={() => setSectionName("My Working Experience")}>
        My Working Experience
      </button>
      <button onClick={() => setSectionName("My Projects")}>My Projects</button>
      <button onClick={() => setSectionName("My Hardskills")}>
        My Hardskills
      </button>
      <button onClick={() => setSectionName("My Certificates")}>
        My Certificates
      </button>
    </div>
  );
};
