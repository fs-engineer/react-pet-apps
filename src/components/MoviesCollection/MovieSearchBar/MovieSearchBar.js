import React from "react";
import { useSearchParams } from "react-router-dom";
import { FilterByName } from "../../InputFields";
import { Section } from "../../Section";

export default function MovieSearchBar() {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query") || "";

  const changeSearchParams = (value) => {
    setSearchParams(value !== "" ? { query: value } : {});
  };

  return (
    <Section>
      <FilterByName onChange={changeSearchParams} filter={query} />
    </Section>
  );
}
