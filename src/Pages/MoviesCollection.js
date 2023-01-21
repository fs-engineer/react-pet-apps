import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { MovieSearchBar } from "../components/MoviesCollection/MovieSearchBar";
import * as moviesApi from "../helpers/moviesApi";

export default function MoviesCollection() {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  console.log("movies: ", movies);

  const query = searchParams.get("query");

  const getMovies = () => {
    moviesApi
      .getMoviesByName(query, 1)
      .then((res) => {
        setMovies(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return <MovieSearchBar onClick={getMovies} />;
}
