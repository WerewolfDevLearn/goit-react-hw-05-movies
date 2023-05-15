import { IReviewsProps } from '../../../types/interfaces';

function Reviews({ review }: IReviewsProps) {
  return (
    <>
      <h4>{review.author}</h4>
      <p>{review.content}</p>
    </>
  );
}

export default Reviews;
