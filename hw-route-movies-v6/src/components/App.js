import { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import AppLayout from './AppLayout';
import Layout from './Layout';
import LoaderSpinner from './LoaderSpinner';
import BackTopScroll from './BackTopScroll';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const HomeView = lazy(() =>
  import('../views/HomeView.js' /* webpackChunkName: "home-view" */),
);
const MoviesView = lazy(() =>
  import('../views/MoviesView.js' /* webpackChunkName: "movies-view" */),
);
const NotFoundView = lazy(() =>
  import('../views/NotFoundView.js' /* webpackChunkName: "not-found-view" */),
);
const MovieDetailsView = lazy(() =>
  import(
    '../views/MovieDetailsView.js' /* webpackChunkName: "movie-details-view" */
  ),
);

const CastView = lazy(() =>
  import('../views/CastView' /* webpackChunkName: "movie-details-view-cast" */),
);

const ReviewsView = lazy(() =>
  import(
    '../views/ReviewsView' /* webpackChunkName: "movie-details-view-reviews" */
  ),
);

export default function App() {
  return (
    <Layout>
      <BackTopScroll />
      <Suspense fallback={<LoaderSpinner />}>
        <Routes>
          <Route path="" element={<AppLayout />}>
            <Route index element={<HomeView />} />
            <Route path="home" element={<Navigate to="/" replace />} />
            <Route path="movies" element={<MoviesView />} />
            <Route path="movies/:movieId" element={<MovieDetailsView />}>
              <Route path="cast" element={<CastView />} />
              <Route path="reviews" element={<ReviewsView />} />
            </Route>
            <Route
              path="*"
              element={
                <>
                  <NotFoundView />
                  <Navigate to="/" replace />
                </>
              }
            />
          </Route>
        </Routes>
      </Suspense>
      <ToastContainer />
    </Layout>
  );
}
