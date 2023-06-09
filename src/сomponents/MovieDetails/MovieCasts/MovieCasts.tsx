import MovieCastsStyle from './MovieCats.module.css';
import Loader from '../../Loader/Loader';
import Message from '../../Message/Message';
import Cast from '../Cast/Cast';
import api from '../../../service/api';
import { useEffect, useState, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { ICast } from '../../../types/interfaces';

function MovieCasts() {
  const [casts, setCasts] = useState<ICast[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [message, setMessage] = useState('');
  const params = useParams();

  const getCasts = useCallback(async () => {
    setLoading(true);
    setMessage('');
    try {
      const casts = await api.fetchMovieCredits(params.movieId!);
      setCasts([...casts]);
    } catch (error: any) {
      setMessage(error.message);
    } finally {
      setLoading(false);
    }
  }, [params.movieId]);

  useEffect(() => {
    getCasts();
  }, [getCasts]);

  return (
    <>
      <h3>Casts</h3>
      {loading && <Loader />}
      {message && <Message message={message} />}
      {casts.length > 0 ? (
        <>
          <ul className={MovieCastsStyle.list}>
            {casts &&
              casts.map((cast) => (
                <li key={cast.id} className={MovieCastsStyle.item}>
                  <Cast cast={cast} />
                </li>
              ))}
          </ul>
        </>
      ) : (
        <p>No data</p>
      )}
    </>
  );
}

export default MovieCasts;
