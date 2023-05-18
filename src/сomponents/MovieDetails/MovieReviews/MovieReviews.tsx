import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MovieReviewsStyle from './MovieReviews.module.css';
import Loader from '../../Loader/Loader';
import Message from '../../Message/Message';
import Review from '../Review/Review';
import api from '../../../service/api';
import { IReviews } from '../../../types/interfaces';

function MovieReviews() {
  const [reviews, setReviews] = useState<IReviews[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [message, setMessage] = useState('');
  const params = useParams();
  const getReviews = useCallback(async () => {
    setLoading(true);
    setMessage('');
    try {
      const revews = await api.fetchMovieReviews(params.movieId!);
      console.log('revews: ', revews);
      setReviews([...revews]);
    } catch (error: any) {
      setMessage(error.massage);
    } finally {
      setLoading(false);
    }
  }, [params.movieId]);
  useEffect(() => {
    getReviews();
  }, [getReviews]);

  return (
    <>
      <h3>Reviews</h3>

      {message && <Message message={message} />}
      {loading && <Loader />}
      {reviews.length > 0 ? (
        <>
          <ul className={MovieReviewsStyle.list}>
            {reviews.map((review) => (
              <li key={review.id} className={MovieReviewsStyle.item}>
                <Review review={review} />
              </li>
            ))}
          </ul>
        </>
      ) : (
        <p>Nothing to show</p>
      )}
    </>
  );
}

export default MovieReviews;
