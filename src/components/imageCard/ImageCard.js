import React from "react";
import "./imageCard.css";

const ImageCard = ({ image }) => {
  return (
    
        <img
          alt="imagen de pexels"
          className="imageCard"
          src={image.src.large}
        />
    
  );
};

export default ImageCard;
