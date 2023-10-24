import React from "react";
import "./corusel.css";

export const Corusel = () => {
  return (
    <div className="carusel_3d__box">
      {icons.map((icon) => {
        return (
          <figure className="skills_item carusel_3d__item" key={icon.key}>
            <img src={icon.img} alt="icons" />
          </figure>
        );
      })}
    </div>
  );
};

export const icons = [
  {
    id: 1,
    img: require("../../components/assets/react.png"),
    name: "React JS",
  },
  {
    id: 2,
    img: require("../../components/assets/html.png"),
    name: "HTML",
  },
  {
    id: 3,
    img: require("../../components/assets/css.png"),
    name: "CSS",
  },
  {
    id: 4,
    img: require("../../components/assets/1_bc9pmTiyKR0WNPka2w3e0Q.png"),
    name: "Node JS",
  },
  {
    id: 5,
    img: require("../../components/assets/JavaScript-logo.png"),
    name: "Java Script",
  },
  {
    id: 6,
    img: require("../../components/assets/Mongodb-PNG-Image-HD.png"),
    name: "Mongo DB",
  },
  {
    id: 7,
    img: require("../../components/assets/express-5-logo-png-transparent.png"),
    name: "Express JS",
  },
  {
    id: 8,
    img: require("../../components/assets/socket-logo-png-transparent.png"),
    name: "Socket IO",
  },
  {
    id: 9,
    img: require("../../components/assets/material-ui-logo-5BDCB9BA8F-seeklogo.com.png"),
    name: "Material UI",
  },
];
