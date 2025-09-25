import React from "react";
import "./Home.scss";
import avatar from "../../assets/images/huy.jpg";

function Home() {
  return (
    <section className="home" id="home">
      <div className="home-content">
        <h1>
          Hi, It's <span>Huy</span>
        </h1>
        <h3>
          I'm a <span>Web Developer</span>
        </h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad harum
          fugit beatae impedit provident eaque, deserunt aliquid commodi, dolore
          reiciendis consectetur culpa eveniet illo velit aspernatur debitis
          voluptate laudantium a.
        </p>
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
        <div className="btn-group">
          <a href="#" className="btn">
            Hire
          </a>
          <a href="#contact" className="btn">
            Contact
          </a>
        </div>
      </div>
      <div className="home-img">
        <img src={avatar} alt="avatar" />
      </div>
    </section>
  );
}

export default Home;
