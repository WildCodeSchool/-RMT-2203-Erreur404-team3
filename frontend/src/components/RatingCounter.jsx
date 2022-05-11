import { useState } from "react";
import { Rating } from "react-simple-star-rating";

export default function RatingCounter() {
  const [rating, setRating] = useState(100);

  const handleRating = (rate) => {
    setRating(rate);
  };

  return (
    <Rating
      fillColor="#F72585"
      tooltipArray={["No Comment", "Bof", "Pas Mal", "Cool", "Orgasmique"]}
      transition
      showTooltip
      onClick={handleRating}
      ratingValue={rating}
    />
  );
}
