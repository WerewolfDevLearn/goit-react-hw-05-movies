import { useState, useEffect, useCallback } from 'react';
import MovieList from '../../сomponents/MovieGallery/MoviesList';
import Message from '../../сomponents/Message/Message';
import Loader from '../../сomponents/Loader/Loader';
import api from '../../service/api';
import { IMovie } from '../../types/interfaces';

function HomePage() {
  const [trendingMovies, setTrendingMovies] = useState<IMovie[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [message, setMessage] = useState('');

  const getTrendingMovies = useCallback(async () => {
    setLoading(true);
    setMessage('');
    try {
      const filteredData = await api.fetchPopMovies();
      setTrendingMovies([...filteredData.results]);
    } catch (error: any) {
      setMessage(error.message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    getTrendingMovies();
  }, [getTrendingMovies]);

  return (
    <>
      {message && <Message message={message} />}
      {loading && <Loader />}
      <MovieList movieArr={trendingMovies} />
    </>
  );
}

export default HomePage;
