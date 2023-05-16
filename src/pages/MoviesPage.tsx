import { useState, useEffect, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';

import Error from '../сomponents/Error/Error';
import Moiveslist from '../сomponents/MovieGallery/MoviesList';
import Searchbar from '../сomponents/Searchbar/Searchbar';
import Loader from '../сomponents/Loader/Loader';
import api from '../service/api';

import { IMovie } from '../types/interfaces';

function MoviesPage() {
  const [movies, setMovies] = useState<IMovie[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  // const navigate = useNavigate();
  // const location = useLocation();
  const [searchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  const getMovies = useCallback(async (query: string) => {
    setLoading(true);
    try {
      const moviesByKeyword = await api.fetchMovieByKeyword(query);
      setMovies([...moviesByKeyword]);
    } catch (error: any) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (query) {
      getMovies(query);
    }
  }, [getMovies, query]);

  return (
    <>
      <Searchbar />
      {error && <Error error={error} />}
      {loading && <Loader />}
      {movies && <Moiveslist movieArr={movies} />}
    </>
  );
}

export default MoviesPage;
