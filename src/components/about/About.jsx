import React from "react";
import "./about.css";
import code from "../../assets/code.jpg";
import { RiAwardFill } from "react-icons/ri";
import { IoIosFolder } from "react-icons/io";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={code} alt="image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <RiAwardFill className="about__icon" />
              <h5>Experience</h5>
              <small>1+ year</small>
            </article>
            <article className="about__card">
              <IoIosFolder className="about__icon" />
              <h5>Projects</h5>
              <small>30+ completed projects</small>
            </article>
          </div>
          <p>
            Self-motivated and competent frontend developer with a focus on
            responsive web design. Has successfully completed 30+ frontend
            development projects. Skilled in designing webpages and providing
            functionality to websites using modern technologies.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
