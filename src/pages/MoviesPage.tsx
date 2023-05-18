import { useState, useEffect, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';

import Searchbar from '../сomponents/Searchbar/Searchbar';
import Moiveslist from '../сomponents/MovieGallery/MoviesList';
import Pagination from '../сomponents/Pagintion/Pagination';
import Message from '../сomponents/Message/Message';
import Loader from '../сomponents/Loader/Loader';
import api from '../service/api';

import { IMovie } from '../types/interfaces';

function MoviesPage() {
  const [movies, setMovies] = useState<IMovie[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [message, setMessage] = useState('');
  const [totalPages, setTotalPages] = useState(0);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';
  const qpage = searchParams.get('qpage') ?? '';

  const getMovies = useCallback(async (query: string, page: number) => {
    setLoading(true);
    try {
      setMessage('');
      const filteredData = await api.fetchMovieByKeyword(query, page);
      setMovies([...filteredData.results]);
      setTotalPages(filteredData.total_pages);
    } catch (error: any) {
      // console.dir(error);
      setMessage(error.message);
    } finally {
      setLoading(false);
    }
  }, []);
  const setPagiPage = (page: number) => {
    setSearchParams({ query, qpage: `${page}` });
  };

  useEffect(() => {
    if (query) {
      getMovies(query, Number(qpage));
    }
  }, [getMovies, query, qpage]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => console.log(query), []);

  return (
    <>
      <Searchbar />
      {message && <Message message={message} />}
      {loading && <Loader />}
      {movies && <Moiveslist movieArr={movies} />}
      {movies.length >= 20 && (
        <Pagination total_pages={totalPages} getPageNumber={setPagiPage} currentPage={qpage} />
      )}
    </>
  );
}

export default MoviesPage;
