import React, { Component } from "react";
import { SearchBar } from "./SearchBar";
import { Container } from "./ImageFinder.styled";
import { ImageGallery } from "./ImageGallery";

export default class ImageFinder extends Component {
  state = {
    searchQuery: "",
  };

  getSearchQuery = (query) => {
    this.setState({ searchQuery: query });
  };

  render() {
    const { searchQuery } = this.state;

    return (
      <Container>
        <SearchBar onChangeQuery={this.getSearchQuery} />
        <ImageGallery searchQuery={searchQuery} />
      </Container>
    );
  }
}
