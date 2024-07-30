import React, { useState } from "react";
import "./MyProjects.css";

export const MyProjects = () => {
  const [taskValue, setTaskValue] = useState("");

  return (
    <div>
      <section className="addtask">
        <form>
          <input
            className="large-input"
            onChange={(e) => setTaskValue(e.target.value)}
            type="text"
            name="task"
            id="task"
            placeholder="Task Name"
            autoComplete="off"
            value={taskValue}
          />
          <button type="submit"> Add Task </button>
          <span className="reset" onClick={() => setTaskValue("")}>
            Reset
          </span>
        </form>
      </section>
    </div>
  );
};
