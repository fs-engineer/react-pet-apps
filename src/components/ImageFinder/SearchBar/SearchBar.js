import React from "react";
import IconButton from "../../Buttons/IconButton/IconButton";
import { SiIconfinder } from "react-icons/si";

import { Header, SearchForm, SearchInput } from "./SearchBar.styled";
import { useSearchParams } from "react-router-dom";

const SearchBar = ({ onChangeQuery }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query") || "";

  const handleChangeSearchInput = (e) => {
    const query = e.target.value;
    setSearchParams(query !== "" ? { query } : {});
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();

    onChangeQuery(query);
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
