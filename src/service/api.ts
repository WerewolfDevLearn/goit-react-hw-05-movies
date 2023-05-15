import axios from 'axios';
import filter from '../utils/datafilter';

const apiKey = '7f0dad748ff7b4eb073bc2aebbf95174';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

const fetchPopMovies = async () => {
  const response = await axios.get(`/trending/movie/day?api_key=${apiKey}`);
  const filteredData = filter.datFilter(response.data);
  return filteredData;
};

const fetchMovieByKeyword = async (keyword: string) => {
  const response = await axios.get(
    `/search/movie?api_key=${apiKey}&query=${keyword}&language=en-US&page=1&include_adult=false`,
  );
  const filteredData = filter.datFilter(response.data);
  return filteredData;
};

const fetchMovieDetails = async (movieId: string) => {
  const response = await axios.get(`/movie/${movieId}?api_key=${apiKey}&language=en-US`);
  const filteredMovieDetails = filter.movieDataFilter(response.data);
  return filteredMovieDetails;
};

const fetchMovieCredits = async (movieId: string) => {
  const response = await axios.get(`/movie/${movieId}/credits?api_key=${apiKey}&language=en-US`);
  return response;
};

const fetchMovieReviews = async (movieId: string) => {
  const response = await axios.get(
    `/movie/${movieId}/reviews?api_key=${apiKey}&language=en-US&page=1`,
  );

  return response;
};
const moviesAPI = {
  fetchPopMovies,
  fetchMovieByKeyword,
  fetchMovieDetails,
  fetchMovieCredits,
  fetchMovieReviews,
};

export default moviesAPI;
