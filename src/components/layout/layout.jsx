import React from "react";
import "./layout.css";
import { Navbar } from "../navbar/navbar";
import { Outlet } from "react-router-dom";
import { BG, RainBg } from "../background/bg";

export const Layout = () => {
  return (
    <main className="layout">
      <nav>
        <Navbar />
      </nav>
      <section>
        <Outlet />
      </section>
      <BG />
    </main>
  );
};
