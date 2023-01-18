import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { PER_PAGE } from "../../../constants";
import * as pixabayApi from "../../../helpers/imageApi";
import Button from "../../Buttons/Button/Button";
import { Modal } from "../../Modal";
import { ImageGalleryItem } from "../ImageGalleryItem";
import { BtnContainer, Gallery } from "./ImageGallery.styled";

const ImageGallery = ({ searchQuery, toggleSpinner }) => {
  const [gallery, setGallery] = useState([]);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  console.log("currentPage: ", currentPage);
  const [imgData, setImgData] = useState("");
  const [totalImages, setTotalImages] = useState(null);
  const [totalPages, setTotalPages] = useState(null);

  const imgOnLastPage = totalImages % PER_PAGE;
  const loadingBtnText =
    currentPage !== totalPages
      ? `load next ${PER_PAGE} images`
      : `load last ${imgOnLastPage}`;

  useEffect(() => {
    if (currentPage === totalPages) {
      toast.info("It's the last page");
    }
  }, [currentPage, totalPages]);

  // useEffect(() => {
  //   resetGalleryState(searchQuery);
  // }, [searchQuery]);

  const toggleModal = (imgData) => {
    setIsOpenModal(!isOpenModal);
    setImgData(imgData || {});
  };

  const resetGalleryState = () => {
    setGallery([]);
    setTotalImages(null);
    setTotalPages(null);
    setImgData("");
    setCurrentPage(1);
  };

  const fetchImages = async (searchQuery, currentPage) => {
    try {
      toggleSpinner();

      const { hits: data, totalHits } = await pixabayApi.getImages(
        searchQuery,
        currentPage
      );

      if (!data || !data.length) {
        toast.warn("No images found for your request");
        toggleSpinner();
        return;
      }

      setGallery([...gallery, ...data]);
      setTotalImages(totalHits);
      setTotalPages(Math.ceil(totalHits / PER_PAGE));

      toggleSpinner();
    } catch (error) {
      toast.warn("Ups....something wrong!!!");
      toggleSpinner();
    }
  };

  return (
    <>
      <Gallery>
        {gallery.length
          ? gallery.map(({ id, largeImageURL, webformatURL, tags }) => (
              <ImageGalleryItem
                toggleModal={() => this.toggleModal({ largeImageURL, tags })}
                key={id + tags}
                id={id}
                webformatURL={webformatURL}
              />
            ))
          : null}
      </Gallery>
      <BtnContainer>
        <Button
          onClick={() => setCurrentPage((prevState) => prevState + 1)}
          textColor="blue"
          text={loadingBtnText}
        />
      </BtnContainer>
      {gallery.length && currentPage !== totalPages ? (
        <BtnContainer>
          <Button
            onClick={() => setCurrentPage((prevState) => prevState + 1)}
            textColor="blue"
            text={loadingBtnText}
          />
        </BtnContainer>
      ) : null}
      {isOpenModal && (
        <Modal toggleModal={toggleModal}>
          <img src={imgData.largeImageURL} alt={imgData.tags} />
        </Modal>
      )}
    </>
  );
};

export default ImageGallery;
