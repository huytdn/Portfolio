import React from "react";
import "./About.scss";
import avatar from "../../assets/images/huy.jpg";

function About() {
  return (
    <section className="about" id="about">
      <div className="about-img">
        <img src={avatar} alt="avatar" />
      </div>

      <div className="about-content">
        <h2>
          About <span>Me</span>
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
          dolor a laboriosam officiis quaerat culpa consectetur nisi est ab eum
          blanditiis voluptatem, optio velit deleniti! Ipsa quisquam assumenda
          aut maxime.
        </p>
        <a href="#" className="btn">
          Read More
        </a>
      </div>
    </section>
  );
}

export default About;
