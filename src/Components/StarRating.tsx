import React from "react";
import StarRatings from "react-star-ratings";

interface StarRatingProps {
  rating: number;
  onChange?: (newRating: number) => void;
}

const StarRating: React.FC<StarRatingProps> = ({ rating, onChange }) => {
  return (
    <StarRatings
      rating={rating}
      starRatedColor="gold"
      changeRating={onChange}
      numberOfStars={5}
      starDimension="30px"
      starSpacing="5px"
      starEmptyColor="gray"
      starHoverColor="gold"
    />
  );
};

export default StarRating;
