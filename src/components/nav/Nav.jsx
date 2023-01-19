import React, { useState } from "react";
import "./nav.css";
import { ImHome3 } from "react-icons/im";
import { FaUserCircle } from "react-icons/fa";
import { BiBook } from "react-icons/bi";
import { AiTwotoneFolderOpen, AiFillMessage } from "react-icons/ai";

const Nav = () => {
  const [isActive, setIsActive] = useState("#");
  return (
    <nav>
      <a
        href="#"
        className={isActive === "#" && "active"}
        onClick={() => setIsActive("#")}
      >
        <ImHome3 />
      </a>
      <a
        href="#about"
        onClick={() => setIsActive("#about")}
        className={isActive === "#about" && "active"}
      >
        <FaUserCircle />
      </a>
      <a
        href="#experience"
        onClick={() => setIsActive("#experience")}
        className={isActive === "#experience" && "active"}
      >
        <BiBook />
      </a>
      <a
        href="#portfolio"
        className={isActive === "#portfolio" && "active"}
        onClick={() => setIsActive("#portfolio")}
      >
        <AiTwotoneFolderOpen />
      </a>
      <a
        href="#contact"
        onClick={() => setIsActive("#contact")}
        className={isActive === "#contact" && "active"}
      >
        <AiFillMessage />
      </a>
    </nav>
  );
};

export default Nav;
