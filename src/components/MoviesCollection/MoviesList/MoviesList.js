import React from "react";
import { Link, useLocation } from "react-router-dom";
import { ItemImg, List, ListItem } from "./MoviesList.styled";
import { makeImgUrl } from "../../../helpers/makeImgUrl";

export default function MoviesList({ movies }) {
  const { pathname } = useLocation();

  const getLinkPath = (id) => {
    return pathname === "/movies-collection" ? `movies/${id}` : `${id}`;
  };

  return (
    <List>
      {movies &&
        movies.map(({ id, release_date, title, poster_path }) => {
          return (
            <ListItem key={id}>
              <Link
                to={getLinkPath(id)}
                state={{ from: pathname }}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                {poster_path ? (
                  <ItemImg src={makeImgUrl(poster_path)} />
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
