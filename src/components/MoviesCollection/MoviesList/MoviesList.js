import React from "react";
import { Link, useLocation } from "react-router-dom";
import { ItemImg, List, ListItem } from "./MoviesList.styled";

export default function MoviesList({ movies }) {
  const { pathname } = useLocation();

  return (
    <List>
      {movies &&
        movies.map(({ id, release_date, title, poster_path }) => {
          return (
            <ListItem key={id}>
              <Link
                to={`${pathname}/${id}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                {poster_path ? (
                  <ItemImg
                    src={`https://image.tmdb.org/t/p/w342${poster_path}`}
                  />
                ) : (
                  <p>No images</p>
                )}
                <p>
                  <b>Release date: </b> {release_date}
                </p>
                <h2>{title}</h2>
              </Link>
            </ListItem>
          );
        })}
    </List>
  );
}
