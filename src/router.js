import React from "react";
import "./assets/global.css";
import "normalize.css";
import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/layout/layout";
import { Home } from "./pages/home/home";
import { Projects } from "./pages/projects/projects";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<h1>About</h1>} />
        <Route path="/project" element={<Projects />} />
        <Route path="/contact" element={<h1>About</h1>} />
      </Route>
    </Routes>
  );
};
