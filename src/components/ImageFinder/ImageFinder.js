import React, { Component } from "react";
import { SearchBar } from "./SearchBar";
import * as pixabayApi from "../../helpers/imageApi";
import { Container } from "./ImageFinder.styled";

export default class ImageFinder extends Component {
  render() {
    pixabayApi.getImages("rust", 1).then((res) => console.log("res", res));
    return (
      <Container>
        <SearchBar />
      </Container>
    );
  }
}
