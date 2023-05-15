import MovieCastsStyle from './MovieCats.module.css';
import Loader from '../../Loader/Loader';
import Cast from '../Cast/Cast';
import api from '../../../service/api';
import { useEffect, useState } from 'react';

function MovieCasts() {
  const [casts, setCasts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    setLoading(true);
  }, []);

  api
    .fetchMovieCredits(this.props.match.params.movieId)
    .then((data) => this.setState({ casts: [...data.cast] }))
    .catch((error) => this.setState({ error }))
    .finally(() => this.setState({ loading: false }));

  return (
    <>
      <h3>Casts</h3>
      {loading && <Loader />}
      {casts.length > 0 ? (
        <>
          <ul className={MovieCastsStyle.list}>
            {casts &&
              casts.map((cast) => (
                <li key={cast.cast_id} className={MovieCastsStyle.item}>
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
