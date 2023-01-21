import React from "react";
import "./portfolio.css";
import { portfolios } from "../../data";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Works</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {portfolios.map((portfolio) => {
          const { id, img, git_url, demo_url, title } = portfolio;
          return (
            <article className="portfolio__item" key={id}>
              <div className="portfolio__item-image">
                <img src={img} alt="" />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={git_url} className="btn" target="_blank">
                  Github
                </a>
                <a href={demo_url} className="btn btn-primary" target="_blank">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
