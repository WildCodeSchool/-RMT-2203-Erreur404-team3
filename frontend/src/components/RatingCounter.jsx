import { useState } from "react";
import { Rating } from "react-simple-star-rating";

export default function RatingCounter() {
  const [rating, setRating] = useState(100); /* valeur initiale */

  /* recuperation de la valeur */
  const handleRating = (rate) => {
    console.warn(rate);
    setRating(rate);
  };

  return (
    <Rating
      fillColor="#F72585"
      tooltipArray={["No Comment", "Bof", "Pas Mal", "Cool", "J'adore"]}
      transition
      showTooltip
      onClick={handleRating}
      ratingValue={rating} /* Props */
    />
  );
}
