import MovieListItem from './MovieListItem/MovieListItem';
import movieListStyle from './MoviesList.module.css';

import { IMovieListProps } from '../../types/interfaces';

function MovieList({ movieArr }: IMovieListProps) {
  return (
    <ul className={movieListStyle.mList}>
      {movieArr.map((movie) => (
        <MovieListItem movie={movie} key={movie.id} />
      ))}
    </ul>
  );
}

export default MovieList;
