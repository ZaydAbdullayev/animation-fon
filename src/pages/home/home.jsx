import React from "react";
import "./home.css";
import { BiArrowToRight } from "react-icons/bi";
import { images } from "./imgs";
import { Corusel } from "../../components/corusel/corusel";

import img from "../../assets/sticker.png";
import { BsInstagram, BsLinkedin, BsTelegram } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";

export const Home = () => {
  return (
    <div className="home">
      <div className="my_info">
        <div className="sosyal_media">
          <a
            href="https://instagram.com/zayyad_07"
            target="_blank"
            rel="noopener noreferrer"
            className="instagram"
          >
            <BsInstagram />
          </a>
          <a
            href="https://www.facebook.com/Zayd.Huseyn.5"
            target="_blank"
            rel="noopener noreferrer"
            className="facebook"
          >
            <BsFacebook />
          </a>
          <a
            href="https://t.me/zayyad_07"
            target="_blank"
            rel="noopener noreferrer"
            className="telegram"
          >
            <BsTelegram />
          </a>
          <a
            href="https://www.linkedin.com/in/abdullayev-abdulbosit-1b4b7b1b9/"
            target="_blank"
            rel="noopener noreferrer"
            className="linkedin"
          >
            <BsLinkedin />
          </a>
        </div>
        <div className="paragraf">
          <h1 className="text_3d">
            <span>Hello I'm Abdullayev Abdulbosit</span>
          </h1>
          <h1 className="text_3d">
            <span>I'm FullStack Developer</span>
          </h1>
        </div>
        <img src={img} alt="my_photo" />
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
