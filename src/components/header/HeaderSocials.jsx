import React from "react";
import { IoLogoLinkedin } from "react-icons/io";
import { VscGithub } from "react-icons/vsc";
import { AiOutlineDribbbleSquare } from "react-icons/ai";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://linkedin.com" target="_blank">
        <IoLogoLinkedin />
      </a>
      <a href="https://github.com" target="_blank">
        <VscGithub />
      </a>
      <a href="https://dribbles.com" target="_blank">
        <AiOutlineDribbbleSquare />
      </a>
    </div>
  );
};

export default HeaderSocials;
