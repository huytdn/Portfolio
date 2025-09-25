import React, { useState } from "react";
import "./Header.scss";

function Header() {
  const [toggle, setToggle] = useState(false);

  return (
    <header className="header">
      <a href="#home" className="logo">
        Huy <span>TDN</span>
      </a>

      <i
        className={`bx bx-menu ${toggle ? "active" : ""}`}
        id="menu-icon"
        onClick={() => setToggle(!toggle)}
      ></i>

      <nav className={`navbar ${toggle ? "active" : ""}`}>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>

      <button className="gradient-btn">Contact Me</button>
    </header>
  );
}

export default Header;
