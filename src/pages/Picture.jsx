import { useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { DataContext } from "../DataContext";
import viewIcon from "../assets/icon-view-image.svg";
import backIcon from "../assets/icon-back-button.svg";
import nextIcon from "../assets/icon-next-button.svg";
import styles from "./picture.module.scss";

const Picture = () => {
  const { data, viewImage, setViewImage } = useContext(DataContext);

  const { id } = useParams();

  if (!data) {
    return null;
  }

  const painting = data.find((item) => item.name === id.replaceAll("-", " "));

  const paintingIndex = data.indexOf(painting) + 1;
  const paintingCount = data.length;
  const blackBorderWidth = (paintingIndex / paintingCount) * 100;

  return (
    <div className={styles.slideShow}>
      <div className={styles.imgInfoWrap}>
        <picture>
          <source
            media="(min-width: 768px)"
            srcSet={`https://galleriabackend.onrender.com${painting.images.hero.large}`}
          />
          <img
            className="large-image"
            src={`https://galleriabackend.onrender.com${painting.images.hero.small}`}
            alt="Painting"
          />
        </picture>

        <div
          className={styles.viewImage}
          onClick={() => setViewImage(!viewImage)}
        >
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
      <div className={styles.borderTop}>
        <div
          className={styles.blackBorder}
          style={{ width: `${blackBorderWidth}%` }}
        />
      </div>
      <div className={styles.slideShowSwitch}>
        <div className={styles.paintingName}>
          <h4>{painting.name}</h4>
          <p>{painting.artist.name}</p>
        </div>
        <div className={styles.slideShowButtons}>
          <Link
            to={
              paintingIndex !== 1
                ? `/${data[
                    (paintingIndex - 2 + paintingCount) % paintingCount
                  ].name.replaceAll(" ", "-")}`
                : undefined
            }
          >
            <img
              src={backIcon}
              style={{ opacity: paintingIndex === 1 ? 0.15 : 1 }}
            />
          </Link>
          <Link
            to={
              paintingIndex !== paintingCount
                ? `/${data[paintingIndex % paintingCount].name.replaceAll(
                    " ",
                    "-"
                  )}`
                : undefined
            }
          >
            <img
              src={nextIcon}
              style={{ opacity: paintingIndex === paintingCount ? 0.15 : 1 }}
            />
          </Link>
        </div>
      </div>
      {viewImage && (
        <div className={styles.viewImageBig}>
          <h3 onClick={() => setViewImage(!viewImage)}>CLOSE</h3>
          <img
            src={`https://galleriabackend.onrender.com${painting.images.gallery}`}
          />
        </div>
      )}
    </div>
  );
};

export default Picture;
