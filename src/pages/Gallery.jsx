import { Link } from "react-router-dom";
import styles from "./gallery.module.scss";
import { v4 as uuidv4 } from "uuid";
import { useContext } from "react";
import { DataContext } from "../DataContext";

const Gallery = () => {
  const data = useContext(DataContext);
  return (
    <ul>
      {data &&
        data.map((item) => (
          <Link to={`/${item.name.replace(/ /g, "-")}`} key={uuidv4()}>
            <li key={uuidv4()}>
              <img
                src={`https://galleriabackend.onrender.com${item.images.thumbnail}`}
              />
              <div className={styles.filter}>
                <div className={styles.paintingNameWrap}>
                  <h3>{item.name}</h3>
                  <p>{item.artist.name}</p>
                </div>
              </div>
            </li>
          </Link>
        ))}
    </ul>
  );
};

export default Gallery;
