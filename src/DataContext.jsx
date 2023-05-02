import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [data, setData] = useState(null);
  const [viewImage, setViewImage] = useState(false);

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
    <DataContext.Provider value={{ data, viewImage, setViewImage }}>
      {children}
    </DataContext.Provider>
  );
};
