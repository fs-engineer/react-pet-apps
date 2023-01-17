import React, { Component } from "react";
import { GalleryItem, Image } from "./ImageGalleryItem.styled";

export default class ImageGalleryItem extends Component {
  render() {
    const { id, largeImageURL, webformatURL } = this.props;

    return (
      <GalleryItem>
        <Image src={webformatURL} />
      </GalleryItem>
    );
  }
}
