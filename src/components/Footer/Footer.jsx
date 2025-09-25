import React from "react";
import "./Footer.scss";

function Footer() {
  return (
    <footer className="footer">
      <div className="social-icons">
        <a href="#">
          <i className="bx bxl-github"></i>
        </a>
        <a href="#">
          <i className="bx bxl-linkedin-square"></i>
        </a>
        <a href="#">
          <i className="bx bxl-instagram-alt"></i>
        </a>
        <a href="#">
          <i className="bx bxl-twitter"></i>
        </a>
      </div>
      <ul className="list">
        <li>
          <a href="#">FAQ</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#about">About Me</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <p className="copyright">Huy TDN | All Rights Reserved</p>
    </footer>
  );
}

export default Footer;
