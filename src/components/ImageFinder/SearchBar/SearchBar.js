import React, { Component } from "react";
import IconButton from "../../Buttons/IconButton/IconButton";
import { SiIconfinder } from "react-icons/si";

import { Header, SearchForm, SearchInput } from "./SearchBar.styled";

export default class SearchBar extends Component {
  state = {
    query: "",
  };

  handleChangeSearchInput = (e) => {
    this.setState({ query: e.target.value });
  };

  handleSubmitForm = (e) => {
    e.preventDefault();

    const {
      searchQuery: { value },
    } = e.target.elements;
    const { onChangeQuery } = this.props;

    onChangeQuery(value);
  };

  render() {
    const { query } = this.state;

    return (
      <Header>
        <SearchForm onSubmit={this.handleSubmitForm}>
          <IconButton type="submit" text="Search">
            <SiIconfinder size="20" />
          </IconButton>

          <SearchInput
            type="text"
            autoComplete="off"
            value={query}
            autoFocus
            name="searchQuery"
            onChange={this.handleChangeSearchInput}
            placeholder="Search images and photos"
          />
        </SearchForm>
      </Header>
    );
  }
}
