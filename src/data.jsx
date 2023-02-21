import React from "react";
import download from "../src/assets/download.jpeg";
import fabregat from "../src/assets/fabregat.jpg";
import download2 from "../src/assets/download2.jpeg";
import download3 from "../src/assets/download3.jpeg";
import download4 from "../src/assets/download4.jpeg";
import cocktails from "../src/assets/cocktails2.JPG";
import stockphotos from "../src/assets/stockphotos.JPG";
import movies from "../src/assets/movies.JPG";
import joseph from "../src/assets/joseph.jpg";

export const portfolios = [
  {
    id: 1,
    img: cocktails,
    title: "Cocktails Project",
    git_url: "https://github.com/Nyame100/cocktails-project",
    demo_url: "https://cocktailsproject-1.netlify.app/",
  },
  {
    id: 2,
    img: stockphotos,
    title: "Stock-Photo Project",
    git_url: "https://github.com/Nyame100/stock-photos-project",
    demo_url: "https://stock-photoss.netlify.app",
  },
  {
    id: 3,
    img: movies,
    title: "Movies-DB Project",
    git_url: "https://github.com/Nyame100/movieDB-project",
    demo_url: "https://movies-db-1.netlify.app",
  },
  {
    id: 4,
    img: download4,
    title: "some title",
    git_url: "https://github.com",
    demo_url: "https://dribbble.com/Alien_pixels",
  },
  {
    id: 5,
    img: download,
    title: "some title",
    git_url: "https://github.com",
    demo_url: "https://dribbble.com/Alien_pixels",
  },
  {
    id: 6,
    img: download,
    title: "some title",
    git_url: "https://github.com",
    demo_url: "https://dribbble.com/Alien_pixels",
  },
];

export const testimonials = [
  {
    id: 1,
    name: "Xavier Fabregat",
    img: fabregat,
    comment:
      "Richmond is a driven developer. He is motivated to always learn and implement new ideas in projects. He is also a good team player.",
  },
  {
    id: 2,
    name: "Joseph Djaba",
    img: joseph,
    comment:
      "Richmond is dedicated to whatever he sets his mind on. He is enthusiastic, commited and creative in finding solutions to problems.",
  },
  {
    id: 3,
    name: "Joseph Djaba",
    img: joseph.jpg,
    comment:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit, rem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium nemo aut ad distinctio beatae quo dolorem, voluptates consequuntur natus in.",
  },
];
