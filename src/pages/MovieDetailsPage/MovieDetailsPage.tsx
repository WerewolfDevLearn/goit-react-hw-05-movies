import { useState, useEffect, useCallback, Suspense } from 'react';
import { Outlet, useLocation, useParams, useNavigate } from 'react-router-dom';
import MovieDetails from '../../сomponents/MovieDetails/MovieDetails';
import AdditionalDetails from '../../сomponents/MovieDetails/AdditionDetailsList/AdditionDetailsList';
import Loader from '../../сomponents/Loader/Loader';
import Error from '../../сomponents/Error/Error';
import MDPStyle from './MovieDetailsPage.module.css';
import api from '../../service/api';
import { IParams, IMovieDetails } from '../../types/interfaces';

function MovieDetailsPage() {
  const [movie, setMovie] = useState<IMovieDetails>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const location = useLocation();
  const params = useParams<IParams>();

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
  // history.push(location?.state?.from ?? routes.home);
  const handlerGoBack = () => {
    console.log('location', location.state.from);
    navigate(location.state.from);
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
