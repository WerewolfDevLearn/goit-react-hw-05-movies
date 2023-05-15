import MovieDetailsStyle from './MoviDetails.module.css';
import { IMovieDetails } from '../../types/interfaces';

interface IMovieDetailsProps {
  movie: IMovieDetails;
}
function MovieDetails({ movie }: IMovieDetailsProps) {
  const { genres, overview, popularity, poster_path, title } = movie;

  return (
    <>
      <div className={MovieDetailsStyle.card}>
        <div className={MovieDetailsStyle.posterContainer}>
          <img src={`${poster_path}`} alt={title} />
        </div>
        <div className={MovieDetailsStyle.details}>
          <h2>{title}</h2>
          <p>User Score:{popularity} </p>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h4>Geners</h4>
          <p>{genres.join(', ')}</p>
        </div>
      </div>
      <hr />
    </>
  );
}

export default MovieDetails;
