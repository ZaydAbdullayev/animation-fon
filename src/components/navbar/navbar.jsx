import React, { useState, useEffect } from "react";
import "./navbar.css";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  const [navBg, setNavBg] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setNavBg(false);
      } else {
        setNavBg(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={navBg ? "navbar navbar_bg" : "navbar"}>
      <h1 className="text_3d">
        <span>Logo</span>
      </h1>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About me</NavLink>
      <NavLink to="/project">Project</NavLink>
      <NavLink to="/contact">Contact</NavLink>
    </nav>
  );
};
