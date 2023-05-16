import MovieCastsStyle from './MovieCats.module.css';
import Loader from '../../Loader/Loader';
import Error from '../../Error/Error';
import Cast from '../Cast/Cast';
import api from '../../../service/api';
import { useEffect, useState, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { ICast } from '../../../types/interfaces';

function MovieCasts() {
  const [casts, setCasts] = useState<ICast[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const params = useParams();

  const getCasts = useCallback(async () => {
    setLoading(true);
    try {
      const casts = await api.fetchMovieCredits(params.movieId!);
      console.log('casts: ', casts);

      setCasts([...casts]);
    } catch (error: any) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }, [params.movieId]);

  useEffect(() => {
    getCasts();
  }, [getCasts]);
  console.log(casts);
  return (
    <>
      <h3>Casts</h3>
      {loading && <Loader />}
      {error && <Error error={error} />}
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
