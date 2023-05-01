import React from "react";
import { Link } from "react-router-dom";
import logo from "./assets/logo.svg";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header>
      <img src={logo} alt="logo" />
      <Link to="#">START SLIDESHOW</Link>
    </header>
  );
};

export default Header;
