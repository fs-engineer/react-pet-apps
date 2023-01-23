import React, { useEffect, useState } from "react";
import { MoviesList } from "../components/MoviesCollection/MoviesList";
import * as movieApi from "../helpers/moviesApi";

export default function MoviesTrending() {
  const [moviesData, setMoviesData] = useState([]);

  useEffect(() => {
    movieApi
      .getMoviesTrending()
      .then((res) => {
        const { data } = res;
        const { results } = data;

        setMoviesData(results);
      })
      .catch((err) => console.log(err));
  }, []);

  return <MoviesList movies={moviesData} />;
}
