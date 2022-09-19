import { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import AppLayout from './AppLayout';
import Layout from './Layout';
import LoaderSpinner from './LoaderSpinner';
import BackTopScroll from './BackTopScroll';

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

export default function App() {
  return (
    <Layout>
      <BackTopScroll />
      <Suspense fallback={<LoaderSpinner />}>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route path="/" element={<HomeView />}></Route>

            <Route path="movies" element={<MoviesView />}>
              <Route path=":movieId" element={<MovieDetailsView />} />
              <Route path="*" element={<Navigate to="/" replace />} />
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
    </Layout>
  );
}
