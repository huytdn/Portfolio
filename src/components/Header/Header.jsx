import React from "react";
import "./Header.scss";

function Header() {
  return (
    <header className="header">
      <a href="#home" className="logo">
        Huy <span>TDN</span>
      </a>
      <i className="bx bx-menu" id="menu-icon"></i>
      <nav className="navbar">
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
