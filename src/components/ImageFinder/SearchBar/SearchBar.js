import React, { Component } from "react";
import IconButton from "../../Buttons/IconButton/IconButton";
import { SiIconfinder } from "react-icons/si";

import { Header, SearchForm, SearchInput } from "./SearchBar.styled";

export default class SearchBar extends Component {
  render() {
    return (
      <Header>
        <SearchForm>
          <IconButton type="submit" text="Search">
            <SiIconfinder size="20" />
          </IconButton>

          <SearchInput
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </SearchForm>
      </Header>
    );
  }
}
