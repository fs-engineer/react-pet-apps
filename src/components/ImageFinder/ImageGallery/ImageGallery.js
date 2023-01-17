import React, { Component } from "react";
import { toast } from "react-toastify";
import * as pixabayApi from "../../../helpers/imageApi";
import { Modal } from "../../Modal";
import { ImageGalleryItem } from "../ImageGalleryItem";
import { Gallery } from "./ImageGallery.styled";

export default class ImageGallery extends Component {
  state = {
    gallery: [],
    totalImages: null,
    isModalOpen: false,
    imgData: "",
  };

  async componentDidUpdate(prevProps, _) {
    const { searchQuery: prevSearchQuery } = prevProps;
    const { searchQuery: currentSearchQuery, toggleSpinner } = this.props;

    try {
      if (
        prevSearchQuery !== currentSearchQuery &&
        currentSearchQuery.trim() !== ""
      ) {
        toggleSpinner();

        const { hits: data, totalHits: totalImages } =
          await pixabayApi.getImages(currentSearchQuery);

        if (!data || !data.length) {
          toast.warn("No images found for your request");
          toggleSpinner();
          return;
        }

        this.setState({
          gallery: data,
          totalImages,
        });
        toggleSpinner();
      }
    } catch (error) {
      toast.warn("Ups....something wrong!!!");
      toggleSpinner();
    }
  }

  toggleModal = (imgData) => {
    this.setState(({ isModalOpen }) => ({
      isModalOpen: !isModalOpen,
      imgData: imgData || {},
    }));
  };

  render() {
    const { gallery, isModalOpen, imgData } = this.state;

    return (
      <>
        <Gallery>
          {gallery.length
            ? gallery.map(({ id, largeImageURL, webformatURL, tags }) => (
                <ImageGalleryItem
                  toggleModal={() => this.toggleModal({ largeImageURL, tags })}
                  key={id}
                  id={id}
                  webformatURL={webformatURL}
                />
              ))
            : null}
        </Gallery>

        {isModalOpen && (
          <Modal toggleModal={this.toggleModal}>
            <img src={imgData.largeImageURL} alt={imgData.tags} />
          </Modal>
        )}
      </>
    );
  }
}
