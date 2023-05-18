import { useState, useEffect, useCallback, Suspense, useRef } from 'react';
import { Outlet, useLocation, useParams, useNavigate } from 'react-router-dom';
import MovieDetails from '../../сomponents/MovieDetails/MovieDetails';
import AdditionalDetails from '../../сomponents/MovieDetails/AdditionDetailsList/AdditionDetailsList';
import Loader from '../../сomponents/Loader/Loader';
import Message from '../../сomponents/Message/Message';
import MDPStyle from './MovieDetailsPage.module.css';
import api from '../../service/api';
import { IParams, IMovieDetails } from '../../types/interfaces';
import routes from '../../routes';

function MovieDetailsPage() {
  const [movie, setMovie] = useState<IMovieDetails>();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const params = useParams<IParams>();
  const backLink = useRef(location.state?.from ?? routes.movies);

  const getMovieDetails = useCallback(async (movieId: string) => {
    setLoading(true);
    try {
      setMessage('');
      const movie = await api.fetchMovieDetails(movieId);
      setMovie(movie);
    } catch (error: any) {
      setMessage(error.message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    getMovieDetails(params.movieId!);
  }, [getMovieDetails, params.movieId]);

  const handlerGoBack = () => {
    console.log(backLink.current);
    navigate(backLink.current);
  };

  return (
    <>
      {message && <Message message={message} />}
      {loading && <Loader />}

      <button type='button' onClick={handlerGoBack} className={MDPStyle.button}>
        Go Back
      </button>
      <hr />
      {movie && <MovieDetails movie={movie} />}
      {movie && <AdditionalDetails />}
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
}

export default MovieDetailsPage;
