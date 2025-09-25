import React from "react";
import "./Services.scss";

function Services() {
  return (
    <section className="services" id="services">
      <h2 className="heading">Services</h2>

      <div className="services-container">
        <div className="service-box">
          <div className="service-info">
            <i className="bx bxl-figma"></i>
            <h4>UI / UX Design</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde
              quam iure ipsam voluptate voluptas illum aspernatur quidem
              delectus harum consectetur veniam, facilis blanditiis et
              consequatur! Iste eos aliquam necessitatibus dolore!
            </p>
          </div>
        </div>
        <div className="service-box">
          <div className="service-info">
            <i className="bx bx-code"></i>
            <h4>FrontEnd Development</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde
              quam iure ipsam voluptate voluptas illum aspernatur quidem
              delectus harum consectetur veniam, facilis blanditiis et
              consequatur! Iste eos aliquam necessitatibus dolore!
            </p>
          </div>
        </div>
        <div className="service-box">
          <div className="service-info">
            <i className="bx bx-code-curly"></i>
            <h4>Backend Development</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde
              quam iure ipsam voluptate voluptas illum aspernatur quidem
              delectus harum consectetur veniam, facilis blanditiis et
              consequatur! Iste eos aliquam necessitatibus dolore!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
