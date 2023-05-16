import {
  IMovie,
  IResponsMovies,
  IMovieDetailsResp,
  IMovieDetails,
  ICastResp,
  ICast,
  IReviewsResp,
  IReviews,
} from '../types/interfaces';
import getGenres from './getGenres';
import getPosterPath from './getPosterPath';
import getAvatarPath from './getAvatarPath';

function datFilter(data: IResponsMovies): IMovie[] {
  const filteredData = data.results.map((result) => {
    return {
      id: result.id,
      adult: result.adult,
      release_date: result.release_date,
      poster_path: getPosterPath(result.poster_path),
      original_title: result.original_title,
      genres: getGenres(result.genre_ids),
    };
  });
  return filteredData;
}

function movieDataFilter(data: IMovieDetailsResp): IMovieDetails {
  return {
    genres: data.genres.map((genre) => genre.name),
    overview: data.overview,
    popularity: data.popularity,
    poster_path: getPosterPath(data.poster_path),
    title: data.title,
  };
}

function castDataFilter(data: ICastResp): ICast[] {
  const filteredData = data.cast.map((cast) => {
    return {
      id: cast.cast_id,
      name: cast.name,
      profile_path: getAvatarPath(cast.profile_path),
    };
  });
  return filteredData;
}
function ReviewDataFilter(data: IReviewsResp): IReviews[] {
  const filteredData = data.results.map((review) => {
    return {
      id: review.id,
      author: review.author,
      content: review.content,
    };
  });
  return filteredData;
}

export default { datFilter, movieDataFilter, castDataFilter, ReviewDataFilter };
