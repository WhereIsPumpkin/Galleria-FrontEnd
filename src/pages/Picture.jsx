import { useContext } from "react";
import { useParams } from "react-router-dom";
import { DataContext } from "../DataContext";
import viewIcon from "../assets/icon-view-image.svg";

import styles from "./picture.module.scss";

const Picture = () => {
  const data = useContext(DataContext);
  const { id } = useParams();

  if (!data) {
    return null;
  }

  const painting = data.find((item) => item.name === id.replaceAll("-", " "));
  return (
    <div className={styles.slideShow}>
      <div className={styles.imgInfoWrap}>
        <img
          src={`https://galleriabackend.onrender.com${painting.images.hero.small}`}
        />
        <div className={styles.viewImage}>
          <img src={viewIcon} />
          <p>VIEW IMAGE</p>
        </div>
        <div className={styles.authorName}>
          <h2>{painting.name}</h2>
          <p>{painting.artist.name}</p>
        </div>
        <img
          className={styles.artistImage}
          src={`https://galleriabackend.onrender.com${painting.artist.image}`}
        />
      </div>
      <div className={styles.imgDescription}>
        <h3>{painting.year}</h3>
        <p>{painting.description}</p>
        <a href={painting.source}>GO TO SOURCE</a>
      </div>
    </div>
  );
};

export default Picture;
