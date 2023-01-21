import React from "react";
import { useSearchParams } from "react-router-dom";
import { MovieSearchBar } from "../components/MoviesCollection/MovieSearchBar";

export default function MoviesCollection() {
  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get("query");

  return <MovieSearchBar />;
}
