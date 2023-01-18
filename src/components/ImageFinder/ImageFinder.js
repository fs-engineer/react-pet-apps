import React, { useState } from "react";
import { SearchBar } from "./SearchBar";
import { Container } from "./ImageFinder.styled";
import { ImageGallery } from "./ImageGallery";
import { LoadingSpinner } from "../LoadingSpinner";

const ImageFinder = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const getSearchQuery = (query) => {
    setSearchQuery(query);
  };

  const toggleSpinner = () => {
    setIsLoading(!isLoading);
  };

  return (
    <Container>
      <SearchBar onChangeQuery={getSearchQuery} />
      <ImageGallery toggleSpinner={toggleSpinner} searchQuery={searchQuery} />
      {isLoading && <LoadingSpinner />}
    </Container>
  );
};

export default ImageFinder;
