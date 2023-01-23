import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieCastById } from "../../../helpers/moviesApi";

export default function MovieCast() {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) return;

    getMovieCastById(movieId)
      .then((res) => {
        const {
          data: { cast },
        } = res;

        setCast(cast || []);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [movieId]);

  return (
    <div>
      <p>{cast.map((el) => el.name).join(", ")}</p>
    </div>
  );
}
