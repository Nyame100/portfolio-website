import React from "react";
import "./portfolio.css";
import { portfolios } from "../../data";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Works</h5>
      <h2>Personal Projects</h2>
      {portfolios.map((portfolio) => {
        const { id, img, git_url, demo_url, title, desc } = portfolio;
        return (
          <div key={id} className="cont portfolio__container">
            <div className="portfolio__me">
              <div className="portfolio__me-image">
                <img src={img} alt="image" />
              </div>
            </div>
            <div className="portfolio__content">
              <h3>{title}</h3>
              <p>
                Self-motivated and competent frontend developer with a focus on
                responsive web design. Has successfully completed 30+ frontend
                development projects. Skilled in designing webpages and
                providing functionality to websites using modern technologies.
              </p>
              <div className="portfolio__item-cta">
                <a href={git_url} className="btn" target="_blank">
                  Github
                </a>
                <a href={demo_url} className="btn btn-primary" target="_blank">
                  Live Demo
                </a>
              </div>
              {/* <a href="#contact" className="btn btn-primary">
                Let's talk
              </a> */}
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Portfolio;
