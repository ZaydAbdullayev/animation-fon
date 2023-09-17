import React from "react";
import "./home.css";
import { TextV } from "../../components/text/text";

export const Home = () => {
  return (
    <div className="home">
      <div className="my_info">
        <h1 className="text">
          <span>Hello I'm Abdullayev Abdulbosit</span>
        </h1>
        <h1 className="text">
          <span>I'm FullStack Developer</span>
        </h1>
      </div>
      <TextV />
    </div>
  );
};
