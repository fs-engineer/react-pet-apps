import React, { Component } from "react";
import { GalleryItem, Image } from "./ImageGalleryItem.styled";

export default class ImageGalleryItem extends Component {
  render() {
    const { id, largeImageURL, webformatURL, toggleModal } = this.props;

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
  }
}
