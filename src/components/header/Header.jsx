import React from "react";
import "./header.css";
import CTA from "./CTA";
import photo from "../../assets/photo.svg";
import HeaderSocials from "./HeaderSocials";
import gye from "../../assets/gye_nyame.svg";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h1 className="text">
          Richmond <img src={gye} alt="Gye Nyame" className="logo" />{" "}
        </h1>
        <h5 className="text-light">Full Stack Developer</h5>
        <CTA />
        <h2>
          Is it an interesting Project ?
          <span className="in"> Count me in !</span>
        </h2>
        <h1>
          <HeaderSocials />
        </h1>
        <div className="me">
          <img src={photo} alt="svg" />
        </div>
        <a href="#contact" className="scroll__down">
          Scroll down
        </a>
      </div>
    </header>
  );
};

export default Header;
