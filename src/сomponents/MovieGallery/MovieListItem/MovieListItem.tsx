import { Link, useLocation } from 'react-router-dom';

import MLIStl from './MovieListItem.module.css';
import routes from '../../../routes';
import { IMovieListItem } from '../../../types/interfaces';

function MovieListItem({ movie }: IMovieListItem) {
  const { poster_path, original_title } = movie;
  const location = useLocation();

  return (
    <li>
      <Link
        to={`${routes.movies}/${movie.id}`}
        className={MLIStl.mListLink}
        state={{ from: location }}
      >
        <div className={MLIStl.movieCard}>
          <div className={MLIStl.posterContainer}>
            <img src={poster_path} alt={original_title} />
          </div>
          <p className={MLIStl.movieName}>{original_title}</p>
        </div>
      </Link>
    </li>
  );
}

export default MovieListItem;
