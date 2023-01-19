import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import * as pixabayApi from "../../helpers/imageApi";
import { SearchBar } from "./SearchBar";
import { Container } from "./ImageFinder.styled";
import { ImageGallery } from "./ImageGallery";
import { LoadingSpinner } from "../LoadingSpinner";
import { PER_PAGE } from "../../constants";

const ImageFinder = () => {
  const [gallery, setGallery] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [totalImages, setTotalImages] = useState(null);
  const [totalPages, setTotalPages] = useState(null);

  useEffect(() => {
    if (currentPage === totalPages) {
      toast.info("It's the last page");
    }
  }, [currentPage, totalPages]);

  useEffect(() => {
    if (!searchQuery) return;

    setIsLoading(true);

    pixabayApi
      .getImages(searchQuery, currentPage)
      .then(({ hits: imgData, totalHits: totalImgs }) => {
        if (!imgData || !imgData.length) {
          toast.warn("No images found for your request");

          setIsLoading(false);
          return;
        }

        setGallery((gallery) => [...gallery, ...imgData]);
        setTotalImages(totalImgs);
        setTotalPages(Math.ceil(totalImgs / PER_PAGE));
      })
      .catch((err) => {
        console.log("err: ", err);
        toast.warn("Ups....something wrong!!!");
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [searchQuery, currentPage]);

  const handleChangeQuery = (query) => {
    setSearchQuery(query);
    setGallery([]);
    setTotalImages(null);
    setTotalPages(null);
  };

  return (
    <Container>
      <SearchBar onChangeQuery={handleChangeQuery} />
      <ImageGallery
        currentPage={currentPage}
        onChangePage={setCurrentPage}
        totalPages={totalPages}
        totalImg={totalImages}
        gallery={gallery}
      />
      {isLoading && <LoadingSpinner />}
    </Container>
  );
};

export default ImageFinder;
