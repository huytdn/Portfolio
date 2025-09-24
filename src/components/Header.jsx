import React from "react";

function Header() {
  return (
    <div>
      <a href="#home" className="logo">
        Huy<span>TDN</span>
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
    </div>
  );
}

export default Header;
