import { Link } from "react-router-dom";
import { useContext } from "react";
import { DataContext } from "./DataContext";
import logo from "./assets/logo.svg";
import styles from "./header.module.scss";

const Header = () => {
  const { startSlideshow, setStartSlideshow } = useContext(DataContext);

  return (
    <header>
      <img src={logo} alt="logo" />
      <Link
        to={startSlideshow ? "/" : "/Starry-Night"}
        onClick={() => {
          setStartSlideshow(!startSlideshow);
        }}
      >
        {startSlideshow ? "STOP SLIDESHOW" : "START SLIDESHOW"}
      </Link>
    </header>
  );
};

export default Header;
