export interface IRqMovie {
  poster_path: string | null;
  adult: boolean;
  overview: string;
  release_date: string;
  genre_ids: number[];
  id: number;
  original_title: string;
  original_language: string;
  backdrop_path: string | null;
  popularity: number;
  vote_count: string;
  video: boolean;
  vote_average: number;
}
export interface IResponsMovies {
  results: IRqMovie[];
  page: number;
  total_pages: number;
  total_results: number;
}
export interface IMovieListProps {
  movieArr: IMovie[];
}
export interface IMovieDetailsResp {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: object;
  budget: number;
  genres: {
    id: number;
    name: string;
  }[];
  homepage: string;
  id: number;
  imdb_id: string | null;
  original_language: string;
  original_title: string;
  overview: string | null;
  popularity: number;
  poster_path: string | null;
  production_companies: {
    name: string;
    id: number;
    logo_path: string | null;
    origin_country: string;
  }[];

  production_countries: {
    iso_3166_1: string;
    name: string;
    release_date: string;
    revenue: number;
    runtime: number | null;
  }[];
  poken_languages: {
    iso_3166_1: string;
    name: string;
  }[];
  release_date: string;
  revenue: number;
  runtime: number | null;

  spoken_languages: {
    iso_639_1: string;
    name: string;
  };
  status: string;
  tagline: string | null;
  title: string;
  video: boolean;
  vote_average: string;
  vote_count: number;
}
export interface IMovie {
  id: number;
  adult: boolean;
  release_date: string;
  poster_path: string;
  original_title: string;
  genres: string[];
}
export interface ICastResp {
  id: number;
  cast: {
    adult: boolean;
    gender: number | null;
    id: number;
    known_for_department: string;
    name: string;
    original_name: string;
    popularity: number;
    profile_path: string | null;
    cast_id: number;
    character: string;
    credit_id: string;
    order: string;
  }[];
  crew: {
    adult: boolean;
    gender: number | null;
    id: number;
    known_for_department: string;
    name: string;
    original_name: string;
    popularity: string;
    profile_path: string;
    credit_id: string;
    department: string;
    job: string;
  }[];
}
export interface IReviewsResp {
  id: number;
  page: number;
  results: {
    author: string;
    author_details: {
      name: string;
      avatar_path: string | null;
      rating: number | null;
    };
    content: string;
    created_at: string;
    id: string;
    updated_at: string;
    url: string;
  }[];
  total_pages: number;
  total_results: number;
}
export interface IMovieListItem {
  movie: IMovie;
  // finalUrl: {
  //   from: {
  //     hash: string;
  //     key: string;
  //     pathname: string;
  //     search: string;
  //     state: any;
  //   };
}
export interface IMovieDetails {
  genres: string[];
  overview: string | null;
  popularity: number;
  poster_path: string;
  title: string;
}
export interface ICast {
  id: number;
  profile_path: string;
  name: string;
}
export interface ICastProp {
  cast: ICast;
}
export interface IReviews {
  id: string;
  author: string;
  content: string;
}
export interface IParams {
  [key: string]: string;
}
export interface IError {
  status_message: string;
  success?: boolean;
  status_code?: number;
}
export interface IdatFilter {
  data: IResponsMovies;
  headers: object;
  status: number;
  statusText: string;
  config: object;
  request: object;
}
export interface IReviewsProps {
  review: IReviews;
}
export interface IProps {
  onSubmitForm(values: string): void;
  query: string;
}
