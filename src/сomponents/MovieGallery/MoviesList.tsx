// import { useRouteMatch } from 'react-router-dom';

import MovieListItem from './MovieListItem/MovieListItem';
import movieListStyle from './MoviesList.module.css';

// import routes from '../../routes';
import { IMovieListProps } from '../../types/interfaces';

function MovieList({ movieArr }: IMovieListProps) {
  // console.log(location);
  // const match = useRouteMatch();
  // let finalUrl = match.url;

  // if (match.url === '/') {
  //   finalUrl = routes.movies;
  // }

  return (
    <ul className={movieListStyle.mList}>
      {movieArr.map((movie) => (
        <MovieListItem movie={movie} key={movie.id} />
      ))}
    </ul>
  );
}

export default MovieList;
