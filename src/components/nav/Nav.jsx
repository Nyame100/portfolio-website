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
        className={isActive === "#" ? "active" : null}
        onClick={() => setIsActive("#")}
      >
        <ImHome3 />
      </a>
      <a
        href="#about"
        onClick={() => setIsActive("#about")}
        className={isActive === "#about" ? "active" : null}
      >
        <FaUserCircle />
      </a>
      <a
        href="#experience"
        onClick={() => setIsActive("#experience")}
        className={isActive === "#experience" ? "active" : null}
      >
        <BiBook />
      </a>
      <a
        href="#portfolio"
        className={isActive === "#portfolio" ? "active" : null}
        onClick={() => setIsActive("#portfolio")}
      >
        <AiTwotoneFolderOpen />
      </a>
      <a
        href="#contact"
        onClick={() => setIsActive("#contact")}
        className={isActive === "#contact" ? "active" : null}
      >
        <AiFillMessage />
      </a>
    </nav>
  );
};

export default Nav;
