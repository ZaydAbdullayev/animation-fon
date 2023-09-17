import React from "react";
import "./projects.css";
import { RainBg } from "../../components/background/bg";
import { useLocation } from "react-router-dom";

export const Projects = () => {
  const location = useLocation().pathname;
  return (
    <div className="projects">
      {location === "/project" ? <RainBg /> : null}
    </div>
  );
};
