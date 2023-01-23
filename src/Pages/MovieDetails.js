import React, { useState, useEffect, Suspense } from "react";
import { Outlet, useLocation, useNavigate, useParams } from "react-router-dom";
import { RiArrowGoBackLine } from "react-icons/ri";
import IconButton from "../components/Buttons/IconButton/IconButton";
import * as moviesApi from "../helpers/moviesApi";
import { Genres, Img, MovieCard, Overview, Title } from "./MovieDetails.styled";
import { Menu, MenuItem } from "../components/Menu/Menu.styled";
import { makeImgUrl } from "../helpers/makeImgUrl";

const menu = [
  { name: "Cast", href: "cast" },
  { name: "Reviews", href: "reviews" },
];

export default function MovieDetails() {
  const [movieData, setMovieData] = useState({});
  const { state } = useLocation();
  const { movieId } = useParams();

  const navigate = useNavigate();
  const { backdrop_path, overview, genres, title } = movieData;
  const imgUrl = makeImgUrl(backdrop_path);
  const genresString = genres ? genres.map((el) => el.name).join(", ") : "";

  useEffect(() => {
    if (!movieId) return;

    moviesApi
      .getMovieById(movieId)
      .then((res) => {
        const { data } = res;
        const { backdrop_path, overview, genres, title } = data;

        setMovieData({ backdrop_path, overview, genres, title });
      })
      .catch((err) => {
        console.log(err);
      });
  }, [movieId]);

  const onMoveBack = () => {
    navigate(state.from);
  };

  return (
    <>
      <IconButton onClick={onMoveBack}>
        <RiArrowGoBackLine />
      </IconButton>
      <MovieCard>
        <Img src={imgUrl} />
        <Title>{title}</Title>
        <Genres>{genresString}</Genres>
        <Overview>{overview}</Overview>
        <Menu>
          {menu.map(({ name, href }) => (
            <MenuItem key={name} to={href} state={{ ...state }}>
              {name}
            </MenuItem>
          ))}
        </Menu>
      </MovieCard>
      <Suspense>
        <Outlet />
      </Suspense>
    </>
  );
}
