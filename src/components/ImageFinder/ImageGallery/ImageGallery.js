import React, { useState } from "react";
import { PER_PAGE } from "../../../constants";
import Button from "../../Buttons/Button/Button";
import { Modal } from "../../Modal";
import { ImageGalleryItem } from "../ImageGalleryItem";
import { BtnContainer, Gallery } from "./ImageGallery.styled";

const ImageGallery = ({
  gallery,
  totalImg,
  totalPages,
  currentPage,
  onChangePage,
}) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [imgData, setImgData] = useState("");

  const toggleModal = (imgData) => {
    setIsOpenModal(!isOpenModal);
    setImgData(imgData || {});
  };

  const imgOnLastPage = totalImg % PER_PAGE;

  const loadingBtnText =
    currentPage !== totalPages - 1
      ? `load next ${PER_PAGE} images`
      : `load last ${imgOnLastPage}`;

  return (
    <>
      <Gallery>
        {gallery.length
          ? gallery.map(({ id, largeImageURL, webformatURL, tags }) => (
              <ImageGalleryItem
                toggleModal={() => toggleModal({ largeImageURL, tags })}
                key={id + tags}
                id={id}
                webformatURL={webformatURL}
              />
            ))
          : null}
      </Gallery>
      {gallery.length && currentPage !== totalPages ? (
        <BtnContainer>
          <Button
            onClick={() => onChangePage((prevState) => prevState + 1)}
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
