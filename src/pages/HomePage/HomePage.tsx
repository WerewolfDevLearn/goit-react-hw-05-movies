import { useState, useEffect, useCallback } from 'react';
import MovieList from '../../сomponents/MovieGallery/MoviesList';
import Error from '../../сomponents/Error/Error';
import Loader from '../../сomponents/Loader/Loader';
import api from '../../service/api';
import { IMovie } from '../../types/interfaces';

function HomePage() {
  const [trendingMovies, setTrendingMovies] = useState<IMovie[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const getTrendingMovies = useCallback(async () => {
    setLoading(true);
    try {
      const movies = await api.fetchPopMovies();
      setTrendingMovies((trendingMovies) => [...trendingMovies, ...movies]);
    } catch (error: any) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    getTrendingMovies();
  }, [getTrendingMovies]);

  return (
    <>
      {loading && <Loader />}
      {error && <Error error={error} />}
      <MovieList movieArr={trendingMovies} />
    </>
  );
}

export default HomePage;
