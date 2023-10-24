import React from "react";
import "./home.css";
import { BiArrowToRight } from "react-icons/bi";
import { images } from "./imgs";
import { Corusel } from "../../components/corusel/corusel";

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
      <div className="skills c3d">
        <h1 className="text_3d">
          <span>Skills</span>
        </h1>
        <div className="carusel_container">
          <div className="carusel_3d">
            <Corusel />
          </div>
        </div>
        <button>
          Learn More <BiArrowToRight className="arrow" />
        </button>
      </div>
      <div className="skills projects">
        <h1 className="text_3d">
          <span>My Projects</span>
        </h1>
        {images.map((project) => {
          return (
            <figure className="projects_item" key={project.id}>
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
