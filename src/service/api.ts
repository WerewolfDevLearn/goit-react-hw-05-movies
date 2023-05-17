import axios from 'axios';
import filter from '../utils/datafilter';

const apiKey = '7f0dad748ff7b4eb073bc2aebbf95174';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

const fetchPopMovies = async () => {
  const response = await axios.get(`/trending/movie/day?api_key=${apiKey}`);
  const filteredPopMoivies = filter.datFilter(response.data);
  return filteredPopMoivies;
};

const fetchMovieByKeyword = async (keyword: string, page: number) => {
  const response = await axios.get(
    `/search/movie?api_key=${apiKey}&query=${keyword}&language=en-US&page=${page}&include_adult=false`,
  );
  if (response.data.results.length === 0) {
    throw new Error('Sorry. There is no photos on your request.');
  }
  const filteredQueryMovies = filter.datFilter(response.data);
  return filteredQueryMovies;
};

const fetchMovieDetails = async (movieId: string) => {
  const response = await axios.get(`/movie/${movieId}?api_key=${apiKey}&language=en-US`);
  const filteredMovieDetails = filter.movieDataFilter(response.data);
  return filteredMovieDetails;
};

const fetchMovieCredits = async (movieId: string) => {
  const response = await axios.get(`/movie/${movieId}/credits?api_key=${apiKey}&language=en-US`);
  const filteredMovieCasts = filter.castDataFilter(response.data);
  return filteredMovieCasts;
};

const fetchMovieReviews = async (movieId: string) => {
  const response = await axios.get(
    `/movie/${movieId}/reviews?api_key=${apiKey}&language=en-US&page=1`,
  );
  const filteredMovieReviews = filter.ReviewDataFilter(response.data);
  return filteredMovieReviews;
};
const moviesAPI = {
  fetchPopMovies,
  fetchMovieByKeyword,
  fetchMovieDetails,
  fetchMovieCredits,
  fetchMovieReviews,
};

export default moviesAPI;
