import React from "react";
import "./layout.css";
import { Navbar } from "../navbar/navbar";
import { Outlet } from "react-router-dom";
import { BG } from "../background/bg";
import { TextV } from "../text/text";

export const Layout = () => {
  return (
    <main className="layout">
      <TextV />
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
