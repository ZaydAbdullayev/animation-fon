import React from "react";
import "./home.css";
import { BiArrowToRight } from "react-icons/bi";

const icons = {
  react: require("../../components/assets/react.png"),
  html: require("../../components/assets/html.png"),
  css: require("../../components/assets/css.png"),
  node: require("../../components/assets/1_bc9pmTiyKR0WNPka2w3e0Q.png"),
  js: require("../../components/assets/JavaScript-logo.png"),
  mongo: require("../../components/assets/Mongodb-PNG-Image-HD.png"),
  express: require("../../components/assets/express-5-logo-png-transparent.png"),
  socket: require("../../components/assets/socket-logo-png-transparent.png"),
  materialui: require("../../components/assets/material-ui-logo-5BDCB9BA8F-seeklogo.com.png"),
  reactn: require("../../components/assets/react-native.png"),
};

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
          See More <BiArrowToRight />
        </button>
      </div>
      <div className="skills projects">
        <h1 className="text_3d">
          <span>My Projects</span>
        </h1>
        <figure className="projects_item"></figure>
        <figure className="projects_item"></figure>
        <figure className="projects_item"></figure>
        <figure className="projects_item"></figure>
        <figure className="projects_item"></figure>
        <figure className="projects_item"></figure>
      </div>
    </div>
  );
};
