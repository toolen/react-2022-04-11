import { Review } from "../review/component";

export const Reviews = ({ reviews }) => {
  return (
    <>
      {reviews.map((review) => (
        <Review
          key={review.id}
          user={review.user}
          text={review.text}
          rating={review.rating}
        />
      ))}
    </>
  );
};