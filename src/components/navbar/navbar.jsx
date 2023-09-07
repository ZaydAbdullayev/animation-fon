import React from "react";
import "./navbar.css";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Logo</h1>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About me</NavLink>
      <NavLink to="/project">Project</NavLink>
      <NavLink to="/contact">Contact</NavLink>
    </nav>
  );
};
