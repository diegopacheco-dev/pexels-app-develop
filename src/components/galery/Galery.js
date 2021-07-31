import React, { useRef } from "react";
import "./galery.css";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import ImageCard from "../imageCard/ImageCard";
import LazyLoad from "react-lazyload";

const Galery = ({ images }) => {
  const styles = {
    padding: "1em 2em",
    maxWidth: "1920px",
    margin: "0 auto",
  };
  const galeryContainer = useRef();

  
  return (
    <div style={styles} ref={galeryContainer}>
      <ResponsiveMasonry
        columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3, 1200: 4 }}
      >
        <Masonry gutter="15px">
          {images.map((image) => {
            return <LazyLoad width="100%" offsetVertical={200}>
                <ImageCard image={image} key={image.id} />

            </LazyLoad>
          })}
        </Masonry>
      </ResponsiveMasonry>
    </div>
  );
};

export default Galery;
