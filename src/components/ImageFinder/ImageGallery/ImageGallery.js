import React, { Component } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as pixabayApi from "../../../helpers/imageApi";
import { ImageGalleryItem } from "../ImageGalleryItem";
import { Gallery } from "./ImageGallery.styled";

export default class ImageGallery extends Component {
  state = {
    gallery: [],
    totalImages: null,
  };

  async componentDidUpdate(prevProps, prevState) {
    const { searchQuery: prevSearchQuery } = prevProps;
    const { searchQuery: currentSearchQuery } = this.props;

    try {
      if (
        prevSearchQuery !== currentSearchQuery &&
        currentSearchQuery.trim() !== ""
      ) {
        const { hits: data, totalHits: totalImages } =
          await pixabayApi.getImages(currentSearchQuery);

        if (!data || !data.length) {
          toast.warn("No images found for your request");
          return;
        }

        this.setState({
          gallery: data,
          totalImages,
        });
      }
    } catch (error) {}
  }

  render() {
    const { gallery } = this.state;

    return (
      <>
        <Gallery>
          {gallery.length
            ? gallery.map(({ id, largeImageURL, webformatURL }) => (
                <ImageGalleryItem
                  key={id}
                  id={id}
                  largeImageURL={largeImageURL}
                  webformatURL={webformatURL}
                />
              ))
            : null}
        </Gallery>
      </>
    );
  }
}
