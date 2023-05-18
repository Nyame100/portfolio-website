import React from "react";
import { IoLogoLinkedin } from "react-icons/io";
import { VscGithub } from "react-icons/vsc";
import { AiOutlineDribbbleSquare } from "react-icons/ai";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/nyame-richmond/" target="_blank">
        <IoLogoLinkedin />
      </a>
      <a href="https://github.com/Nyame100" target="_blank">
        <VscGithub />
      </a>
      {/* <a href="https://dribbles.com" target="_blank">
        <AiOutlineDribbbleSquare />
      </a> */}
    </div>
  );
};

export default HeaderSocials;
