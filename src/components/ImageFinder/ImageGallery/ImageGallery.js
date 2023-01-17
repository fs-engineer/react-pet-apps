import React, { Component } from "react";
import { toast } from "react-toastify";
import { PER_PAGE } from "../../../constants";
import * as pixabayApi from "../../../helpers/imageApi";
import Button from "../../Buttons/Button/Button";
import { Modal } from "../../Modal";
import { ImageGalleryItem } from "../ImageGalleryItem";
import { BtnContainer, Gallery } from "./ImageGallery.styled";

export default class ImageGallery extends Component {
  state = {
    gallery: [],
    galleryMeta: { totalImages: null, totalPages: null },
    isModalOpen: false,
    imgData: "",
    currentPage: 1,
  };

  async componentDidUpdate(prevProps, _) {
    const { searchQuery: prevSearchQuery } = prevProps;
    const { searchQuery: currentSearchQuery } = this.props;

    if (
      prevSearchQuery !== currentSearchQuery &&
      currentSearchQuery.trim() !== ""
    ) {
      const { currentPage } = this.state;
      const { toggleSpinner } = this.props;

      this.getGalleryData({ currentSearchQuery, toggleSpinner, currentPage });
    }
  }

  getGalleryData = async ({
    currentSearchQuery,
    toggleSpinner,
    currentPage,
  }) => {
    try {
      toggleSpinner();

      const { hits: data, totalHits } = await pixabayApi.getImages(
        currentSearchQuery,
        currentPage
      );

      if (!data || !data.length) {
        toast.warn("No images found for your request");
        toggleSpinner();
        return;
      }

      this.setState((prevState) => ({
        gallery: [...prevState.gallery, ...data],
        galleryMeta: {
          totalImages: totalHits,
          totalPages: Math.ceil(totalHits / PER_PAGE),
        },
      }));

      if (totalHits.length > 1) {
        this.setState(({ currentPage }) => ({ currentPage: currentPage + 1 }));
      }

      toggleSpinner();
    } catch (error) {
      toast.warn("Ups....something wrong!!!");
      toggleSpinner();
    }
  };

  toggleModal = (imgData) => {
    this.setState(({ isModalOpen }) => ({
      isModalOpen: !isModalOpen,
      imgData: imgData || {},
    }));
  };

  handleClickMoreButton = () => {
    const { currentSearchQuery, currentPage } = this.state;
    const { toggleSpinner } = this.props;

    this.getGalleryData({ currentSearchQuery, toggleSpinner, currentPage });
  };

  render() {
    const { gallery, isModalOpen, imgData, galleryMeta, currentPage } =
      this.state;
    const imgOnLastPage = galleryMeta.totalImages % PER_PAGE;

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
        {gallery.length ? (
          <BtnContainer>
            <Button
              onClick={this.handleClickMoreButton}
              textColor="blue"
              text={
                currentPage !== galleryMeta.totalPages
                  ? `load next ${PER_PAGE} images`
                  : `load last ${imgOnLastPage}`
              }
            />
          </BtnContainer>
        ) : null}
        {isModalOpen && (
          <Modal toggleModal={this.toggleModal}>
            <img src={imgData.largeImageURL} alt={imgData.tags} />
          </Modal>
        )}
      </>
    );
  }
}
