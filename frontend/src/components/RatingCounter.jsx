/* eslint-disable import/no-unresolved */
import { useState } from "react";
import { Rating } from "react-simple-star-rating";

export default function Stars() {
  const [rating, setRating] = useState(100); /* valeur initiale */

  /* recuperation de la valeur */
  const handleRating = (rate) => {
    console.warn(rate);
    setRating(rate);
  };

  return (
    <Rating
      fillColor="#F72585"
      tooltipArray={["dégueu", "mouais", "ça passe", "j'adore", "orgasmique"]}
      transition
      showTooltip
      onClick={handleRating}
      ratingValue={rating} /* Props */
    />
  );
}
