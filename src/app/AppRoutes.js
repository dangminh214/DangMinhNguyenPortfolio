import React from "react";
import { Route, Routes } from "react-router-dom";

import { Home } from "../pages/Home";
import { MyProjects } from "../pages/MyProjects";
import { MySkills } from "../pages/MySkills";
import { Overview } from "../pages/Overview";
import { WorkingExperiences } from "../pages/WorkingExperiences";

import { CSSTransition, TransitionGroup } from "react-transition-group";

const AnimatedRoutes = ({ location }) => (
  <TransitionGroup>
    <CSSTransition
      key={location}
      timeout={{
        enter: 400,
        exit: 400,
      }}
      classNames="page"
      unmountOnExit
    >
      <Routes location={location}>
        <Route exact path="/" element={<Home />} />
        <Route path="/overview" element={<Overview />} />
        <Route path="/projects" element={<MyProjects />} />
        <Route path="/workexperiences" element={<WorkingExperiences />} />
        <Route path="/skills" element={<MySkills />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </CSSTransition>
  </TransitionGroup>
);

function AppRoutes() {
  return (
    <div className="s_c">
      <AnimatedRoutes />
    </div>
  );
}

export default AppRoutes;
