import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { MovieSearchBar } from "../components/MoviesCollection/MovieSearchBar";
import { MoviesList } from "../components/MoviesCollection/MoviesList";
import * as moviesApi from "../helpers/moviesApi";

export default function MoviesCollection() {
  const [movies, setMovies] = useState([]);
  const [searchParams] = useSearchParams();

  const query = searchParams.get("query");

  const getMovies = () => {
    moviesApi
      .getMoviesByName(query, 1)
      .then((res) => {
        const moviesData = res?.data?.results;
        setMovies(moviesData);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <MovieSearchBar onClick={getMovies} />
      <MoviesList movies={movies} />
    </>
  );
}
