import React, { useState, useEffect } from "react";
import "./navbar.css";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  const [navBg, setNavBg] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Sayfa yukarı kaydırıldığında navbar'ın pozisyonunu kontrol edin
      if (window.scrollY === 0) {
        setNavBg(false); // Navbar en üstteyse arka planı şeffaf yapın
      } else {
        setNavBg(true); // Navbar kaydırıldığında arka planı beyaz yapın (örneğin)
      }
    };

    // Sayfa kaydırıldığında handleScroll işlevini çağırın
    window.addEventListener("scroll", handleScroll);

    // Komponent sona erdiğinde olay dinleyicisini kaldırın
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={navBg ? "navbar navbar_bg" : "navbar"}>
      <h1>Logo</h1>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About me</NavLink>
      <NavLink to="/project">Project</NavLink>
      <NavLink to="/contact">Contact</NavLink>
    </nav>
  );
};
