import React from "react";
import fabregat from "../src/assets/fabregat.jpg";
import cocktail from "../src/assets/cocktail.png";
import photos from "../src/assets/photos.png";
import movie from "../src/assets/movie.png";
import joseph from "../src/assets/joseph.jpg";
import snkr from "../src/assets/snkr.png";

export const portfolios = [
  {
    id: 1,
    img: snkr,
    title: "SneakerHub",
    git_url: "https://github.com/Nyame100/e-commerce-project",
    demo_url: "https://snkrhub.netlify.app/",
    desc: "An online sneaker shop, where users can shop their favourite sneakers from different manufucturers.",
  },
  {
    id: 2,
    img: cocktail,
    title: "Cocktails Project",
    git_url: "https://github.com/Nyame100/cocktails-project",
    demo_url: "https://cocktailsproject-1.netlify.app/",
    desc: "An app which allows users to search and get more information about their favourite cocktails. Details such as ingredients used and the categorisation of each cocktail are provided.",
  },
  {
    id: 3,
    img: movie,
    title: "Movies-DB",
    git_url: "https://github.com/Nyame100/movieDB-project",
    demo_url: "https://movies-db-1.netlify.app",
    desc: "With the Movies-DB app, users can keep track of current movies. Users can get more details about a specific movie by navigating to it.",
  },
  {
    id: 4,
    img: photos,
    title: "Stock-Photos",
    git_url: "https://github.com/Nyame100/stock-photos-project",
    demo_url: "https://stockphoto.netlify.app",
    desc: "An app that allows users to search images fom Unsplash API. Users can also toggle between dark mode and light mode.",
  },
  // {
  //   id: 5,
  //   img: download,
  //   title: "some title",
  //   git_url: "https://github.com",
  //   demo_url: "https://dribbble.com/Alien_pixels",
  // },
  // {
  //   id: 6,
  //   img: download,
  //   title: "some title",
  //   git_url: "https://github.com",
  //   demo_url: "https://dribbble.com/Alien_pixels",
  // },
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
];
