import React from "react";
import { useSearchParams } from "react-router-dom";
import { FilterByName } from "../../InputFields";
import { Section } from "../../Section";
import { Button } from "../../Buttons/Button";

export default function MovieSearchBar({ onClick }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query") || "";

  const changeSearchParams = (value) => {
    setSearchParams(value !== "" ? { query: value } : {});
  };

  const submitForm = (e) => {
    e.preventDefault();
    onClick();
  };

  return (
    <Section direction={"row"}>
      <form onSubmit={submitForm}>
        <FilterByName onChange={changeSearchParams} filter={query} />
        <Button
          disabled={!query}
          type="submit"
          text="Search"
          padding={5}
          textColor="blue"
        />
      </form>
    </Section>
  );
}
