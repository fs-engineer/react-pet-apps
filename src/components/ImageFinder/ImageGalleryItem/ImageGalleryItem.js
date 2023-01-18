import React from "react";
import { GalleryItem, Image } from "./ImageGalleryItem.styled";

const ImageGalleryItem = ({ id, largeImageURL, webformatURL, toggleModal }) => {
  return (
    <GalleryItem>
      <Image
        onClick={toggleModal}
        src={webformatURL}
        data-large-image={largeImageURL}
        id={id}
      />
    </GalleryItem>
  );
};

export default ImageGalleryItem;
