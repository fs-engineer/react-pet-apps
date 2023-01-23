import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { getReviewById } from "../../../helpers/moviesApi";

export default function MovieReview() {
  const [reviews, setReviews] = useState([]);

  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) return;

    getReviewById(movieId)
      .then((res) => {
        const {
          data: { results },
        } = res;

        setReviews(results || []);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [movieId]);

  return (
    <div>
      {reviews.map(({ author, content, id }) => {
        return (
          <div key={id}>
            <b>{author}</b>
            <p>{content}</p>
          </div>
        );
      })}
    </div>
  );
}
