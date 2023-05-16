import { useState, useEffect, useCallback, Suspense, useRef } from 'react';
import { Outlet, useLocation, useParams, useNavigate } from 'react-router-dom';
import MovieDetails from '../../сomponents/MovieDetails/MovieDetails';
import AdditionalDetails from '../../сomponents/MovieDetails/AdditionDetailsList/AdditionDetailsList';
import Loader from '../../сomponents/Loader/Loader';
import Error from '../../сomponents/Error/Error';
import MDPStyle from './MovieDetailsPage.module.css';
import api from '../../service/api';
import { IParams, IMovieDetails } from '../../types/interfaces';
import routes from '../../routes';

function MovieDetailsPage() {
  const [movie, setMovie] = useState<IMovieDetails>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  console.log('location: ', location);
  const params = useParams<IParams>();
  console.log(location);
  const backLink = useRef(location.state?.from ?? routes.movies);
  console.log('backLink: ', backLink);

  const getMovieDetails = useCallback(async (movieId: string) => {
    setLoading(true);
    try {
      const movie = await api.fetchMovieDetails(movieId);
      setMovie(movie);
    } catch (error: any) {
      setError(error);
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
      {error && <Error error={error} />}
      {loading && <Loader />}
      {/* onClick={handlerGoBack} */}
      <button type='button' onClick={handlerGoBack} className={MDPStyle.button}>
        Go Back
      </button>
      <hr />
      {movie && <MovieDetails movie={movie} />}
      {movie && <AdditionalDetails />}
      <Outlet />
      <Suspense fallback={<Loader />}></Suspense>
    </>
  );
}

export default MovieDetailsPage;
