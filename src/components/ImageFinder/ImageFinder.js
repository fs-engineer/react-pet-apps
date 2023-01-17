import React, { Component } from "react";
import { SearchBar } from "./SearchBar";
import { Container } from "./ImageFinder.styled";
import { ImageGallery } from "./ImageGallery";
import { LoadingSpinner } from "../LoadingSpinner";

export default class ImageFinder extends Component {
  state = {
    searchQuery: "",
    isLoading: false,
  };

  getSearchQuery = (query) => {
    this.setState({ searchQuery: query });
  };

  toggleSpinner = () => {
    this.setState(({ isLoading }) => ({ isLoading: !isLoading }));
  };

  render() {
    const { searchQuery, isLoading } = this.state;

    return (
      <Container>
        <SearchBar onChangeQuery={this.getSearchQuery} />
        <ImageGallery
          toggleSpinner={this.toggleSpinner}
          searchQuery={searchQuery}
        />
        {isLoading && <LoadingSpinner />}
      </Container>
    );
  }
}
