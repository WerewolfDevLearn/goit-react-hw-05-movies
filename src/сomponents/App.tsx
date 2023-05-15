import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layouts/Layout';
import Loader from './Loader/Loader';

// import HomePage from '../pages/HomePage';
// import MoviesPage from '../pages/MoviesPage';
// import MovieDetailsPage from '../pages/MovieDetailsPage';

import routes from '../routes';

const HomePage = lazy(() => import('../pages/HomePage/HomePage'));

const MoviesPage = lazy(() => import('../pages/MoviesPage'));

const MovieDetailsPage = lazy(() => import('../pages/MovieDetailsPage/MovieDetailsPage'));
const MovieCasts = lazy(() => import('../сomponents/MovieDetails/MovieCasts/MovieCasts'));

const MovieReviews = lazy(() => import('../сomponents/MovieDetails/MovieReviews/MovieReviews.js'));

const App = () => {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path={routes.home} element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path={routes.movies} element={<MoviesPage />} />
            <Route path={routes.movieDetails} element={<MovieDetailsPage />}>
              <Route path='casts' element={<MovieCasts />} />
              <Route path='reviews' element={<MovieReviews />} />
            </Route>
            {/* <Redirect to={routes.home} /> */}
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
