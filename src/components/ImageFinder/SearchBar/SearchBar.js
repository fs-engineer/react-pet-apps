import React, { useState } from "react";
import IconButton from "../../Buttons/IconButton/IconButton";
import { SiIconfinder } from "react-icons/si";

import { Header, SearchForm, SearchInput } from "./SearchBar.styled";

const SearchBar = ({ onChangeQuery }) => {
  const [query, setQuery] = useState("");

  const handleChangeSearchInput = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();

    const {
      searchQuery: { value },
    } = e.target.elements;

    onChangeQuery(value);
  };

  return (
    <Header>
      <SearchForm onSubmit={handleSubmitForm}>
        <IconButton type="submit" text="Search">
          <SiIconfinder size="20" />
        </IconButton>

        <SearchInput
          type="text"
          autoComplete="off"
          value={query}
          autoFocus
          name="searchQuery"
          onChange={handleChangeSearchInput}
          placeholder="Search images and photos"
        />
      </SearchForm>
    </Header>
  );
};

export default SearchBar;
