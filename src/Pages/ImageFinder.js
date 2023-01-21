import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import * as pixabayApi from "../helpers/imageApi";
import { SearchBar } from "../components/ImageFinder/SearchBar";
import { Container } from "./ImageFinder.styled";
import { ImageGallery } from "../components/ImageFinder/ImageGallery";
import { LoadingSpinner } from "../components/LoadingSpinner";
import { PER_PAGE } from "../constants";
import { useSearchParams } from "react-router-dom";

const ImageFinder = () => {
  const [gallery, setGallery] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [totalImages, setTotalImages] = useState(null);
  const [totalPages, setTotalPages] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams({ currentPage: 1 });
  const query = searchParams.get("query");
  const currentPage = searchParams.get("currentPage");

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

  const changeCurrentPage = () => {
    setSearchParams({ currentPage: Number(currentPage) + 1, query });
  };

  return (
    <Container>
      <SearchBar onChangeQuery={handleChangeQuery} />
      <ImageGallery
        currentPage={currentPage}
        onChangePage={changeCurrentPage}
        totalPages={totalPages}
        totalImg={totalImages}
        gallery={gallery}
      />
      {isLoading && <LoadingSpinner />}
    </Container>
  );
};

export default ImageFinder;
