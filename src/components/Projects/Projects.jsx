import React from "react";
import "./Projects.scss";
import project1 from "../../assets/images/project1.png";
import project2 from "../../assets/images/project2.png";
import project3 from "../../assets/images/project3.png";
import project4 from "../../assets/images/project4.png";
import project5 from "../../assets/images/project5.png";
import project6 from "../../assets/images/project6.png";

function Projects() {
  return (
    <section className="projects" id="projects">
      <h2 className="heading">Projects</h2>
      <div className="projects-box">
        <div className="project-card">
          <img src={project1} alt="" />
          <h3>Project 1</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
            libero, velit voluptas et explicabo id dolores amet consectetur
            iure, molestiae quas suscipit commodi cum non corporis quaerat
            labore hic culpa.
          </p>
          <div className="btn">Review Project</div>
        </div>
        <div className="project-card">
          <img src={project2} alt="" />
          <h3>Project 2</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
            libero, velit voluptas et explicabo id dolores amet consectetur
            iure, molestiae quas suscipit commodi cum non corporis quaerat
            labore hic culpa.
          </p>
          <div className="btn">Review Project</div>
        </div>
        <div className="project-card">
          <img src={project3} alt="" />
          <h3>Project 3</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
            libero, velit voluptas et explicabo id dolores amet consectetur
            iure, molestiae quas suscipit commodi cum non corporis quaerat
            labore hic culpa.
          </p>
          <div className="btn">Review Project</div>
        </div>
        <div className="project-card">
          <img src={project4} alt="" />
          <h3>Project 4</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
            libero, velit voluptas et explicabo id dolores amet consectetur
            iure, molestiae quas suscipit commodi cum non corporis quaerat
            labore hic culpa.
          </p>
          <div className="btn">Review Project</div>
        </div>
        <div className="project-card">
          <img src={project5} alt="" />
          <h3>Project 5</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
            libero, velit voluptas et explicabo id dolores amet consectetur
            iure, molestiae quas suscipit commodi cum non corporis quaerat
            labore hic culpa.
          </p>
          <div className="btn">Review Project</div>
        </div>
        <div className="project-card">
          <img src={project6} alt="" />
          <h3>Project 6</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
            libero, velit voluptas et explicabo id dolores amet consectetur
            iure, molestiae quas suscipit commodi cum non corporis quaerat
            labore hic culpa.
          </p>
          <div className="btn">Review Project</div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
