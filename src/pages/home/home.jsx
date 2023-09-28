import React from "react";
import "./home.css";
import { BiArrowToRight } from "react-icons/bi";
import { icons, images } from "./imgs";

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
        <figure className="skills_item">
          <img src={icons.html} alt="icons" />
        </figure>
        <figure className="skills_item">
          <img src={icons.css} alt="icons" />
        </figure>
        <figure className="skills_item">
          <img src={icons.js} alt="icons" />
        </figure>
        <figure className="skills_item">
          <img src={icons.react} alt="icons" />
        </figure>
        <figure className="skills_item">
          <img src={icons.node} alt="icons" />
        </figure>
        <button>
          See More <BiArrowToRight className="arrow" />
        </button>
      </div>
      <div className="skills projects">
        <h1 className="text_3d">
          <span>My Projects</span>
        </h1>
        {images.map((project) => {
          return (
            <figure className="projects_item">
              <img src={project.img} alt="icons" />
              <figcaption className="projects_item__info">
                <p>
                  <span>{project.name}</span>
                  <span>{project.describe}</span>
                </p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  See web - site <BiArrowToRight className="arrow" />
                </a>
              </figcaption>
            </figure>
          );
        })}
      </div>
    </div>
  );
};
