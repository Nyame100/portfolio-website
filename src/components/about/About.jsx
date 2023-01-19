import React from "react";
import "./about.css";
import download from "../../assets/download.jpeg";
import { RiAwardFill } from "react-icons/ri";
import { IoIosFolder } from "react-icons/io";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h1>About Me</h1>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={download} alt="image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <RiAwardFill className="about__icon" />
              <h5>Experience</h5>
              <small>2+ years</small>
            </article>
            <article className="about__card">
              <IoIosFolder className="about__icon" />
              <h5>Projects</h5>
              <small>20+ completed projects</small>
            </article>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
            doloremque natus accusamus perspiciatis eum vitae harum repudiandae
            ab modi libero et autem recusandae, labore, deleniti dolore,
            delectus culpa eius itaque?
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
