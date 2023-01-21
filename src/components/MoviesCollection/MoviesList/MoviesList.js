import React from "react";
import { ItemImg, List, ListItem } from "./MoviesList.styled";

export default function MoviesList({ movies }) {
  return (
    <List>
      {movies &&
        movies.map(({ id, release_date, title, poster_path }) => {
          return (
            <ListItem key={id}>
              <ItemImg src={`https://image.tmdb.org/t/p/w342${poster_path}`} />
              <p>
                <b>Release date: </b> {release_date}
              </p>
              <h2>{title}</h2>
            </ListItem>
          );
        })}
    </List>
  );
}
