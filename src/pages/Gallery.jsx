import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import styles from "./gallery.module.scss";

const Gallery = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get("https://galleriabackend.onrender.com/")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className={styles.galleryWrapper}>
      <ul>
        {data &&
          data.map((item) => (
            <Link to={`/${item.name.replace(/ /g, "-")}`} key={item.id + 1}>
              <li key={item.id}>
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
    </div>
  );
};

export default Gallery;
