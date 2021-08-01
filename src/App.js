import React, { useEffect, useState } from "react";
import Galery from "./components/galery/Galery";
import SearchImage from "./components/searchImage/SearchImage";
import { getImages, getImagesBySearch } from "./services/pexelsApi";

const App = () => {
  const [cargando, setCargando] = useState(true);

  const [images, setImages] = useState([]);

  useEffect(() => {
    getImages().then((data) => {
      setImages(data);
      setCargando(false);
    });
  }, []);

  const handleSearchImg = (word) => {
    setCargando(true)
    getImagesBySearch(word).then((data) => {
      setImages(data);
      setCargando(false)
    });
  };

  return (
    <div>
      <SearchImage handleSearchImg={handleSearchImg} />
      {cargando ? (
        <p style={{ fontSize: "1.5em" }}>Cargando...</p>
      ) : images.length > 0 ? (
        <Galery images={images} />
      ) : (
        <p style={{ fontSize: "1.5em" }}>Sin resultados</p>
      )}
    </div>
  );
};

export default App;
