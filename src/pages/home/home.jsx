import React from "react";
import "./home.css";

export const Home = () => {
  return (
    <div className="home">
      <div className="my_info">
        <h1 className="text_3d">
          <span>Hello I'm Abdullayev Abdulbosit</span>
        </h1>
        <h1 className="text_3d">
          <span>I'm FullStack Developer</span>
        </h1>
      </div>
      <div className="skills">
        <h1 className="text_3d">
          <span>Skills</span>
        </h1>
        <div className="skills_item"></div>
        <div className="skills_item"></div>
        <div className="skills_item"></div>
        <div className="skills_item"></div>
        <div className="skills_item"></div>
      </div>
      <div className="skills projects">
        <h1 className="text_3d">
          <span>My Projects</span>
        </h1>
        <div className="projects_item"></div>
        <div className="projects_item"></div>
        <div className="projects_item"></div>
        <div className="projects_item"></div>
        <div className="projects_item"></div>
        <div className="projects_item"></div>
      </div>
    </div>
  );
};
