import React, { useState, useEffect } from 'react';
import moviesAPI from '../api/movies-api';
import MoviesList from '../components/MoviesList';
import Button from '../components/Button';
import LoaderSpinner from '../components/LoaderSpinner';
import Error from '../components/Error';
import PageHeading from '../components/PageHeading';
import { animateScroll as scroll } from 'react-scroll';
import { toast } from 'react-toastify';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

const HomeView = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [error, setError] = useState(null);
  const [showLoadMoreBtn, setShowLoadMoreBtn] = useState(false);
  const [status, setStatus] = useState(Status.IDLE);

  useEffect(() => {
    setStatus(Status.PENDING);
    setShowLoadMoreBtn(false);

    moviesAPI
      .fetchTrendingMovies(page)
      .then(newMovies => {
        if (newMovies.length === 0) {
          if (page !== 1) {
            toast.warn('No more trending movies', {
              position: 'bottom-center',
            });
          } else {
            toast.error('There are no trending movies', {
              position: 'top-center',
            });
          }
          setShowLoadMoreBtn(false);
        } else {
          setShowLoadMoreBtn(true);
        }
        setTrendingMovies(prevMovies => {
          if (page === 1) {
            return [...newMovies];
          }
          return [...prevMovies, ...newMovies];
        });
        setStatus(Status.RESOLVED);
      })
      .catch(error => {
        toast.error(error.message);
        setError(error);
        setStatus(Status.REJECTED);
      });
  }, [page]);

  const loadMore = () => {
    setPage(prevPage => prevPage + 1);
    scroll.scrollToBottom();
  };

  return (
    <>
      <PageHeading text="Trending today" />
      {status === Status.PENDING && <LoaderSpinner />}
      {status === Status.REJECTED && <Error errorContent={error} />}
      {status === Status.RESOLVED && <MoviesList movies={trendingMovies} />}

      {status === Status.RESOLVED && trendingMovies.length === 0 && (
        <Error errorContent="Sorry! There are no trending movies" />
      )}

      {showLoadMoreBtn && (
        <Button contentBtn="Load More" onLoadMore={loadMore} />
      )}
    </>
  );
};

export default HomeView;

// const HomeView = () => {
//   const [trendingMovies, setTrendingMovies] = useState([]);
//   const [page, setPage] = useState(1);
//   const [error, setError] = useState(null);
//   const [showLoadMoreBtn, setShowLoadMoreBtn] = useState(false);
//   const [status, setStatus] = useState(Status.IDLE);

//   useEffect(() => {
//     const handleMoviesData = data =>
//       data.map(({ id, title }) => ({ id, title }));

//     const fetchMoviesList = async () => {
//       try {
//         setStatus(Status.PENDING);
//         setShowLoadMoreBtn(false);
//         const moviesList = await moviesAPI.fetchTrendingMovies(page);
//         const newMovies = await handleMoviesData(moviesList);
//         setTrendingMovies(prevMovies => {
//           if (page === 1) {
//             return [...newMovies];
//           }
//           return [...prevMovies, ...newMovies];
//         });

//         if (newMovies.length === 0) {
//           if (page !== 1) {
//             toast.warn('No more trending movies', {
//               position: 'bottom-center',
//             });
//           } else {
//             toast.error('There are no trending movies', {
//               position: 'top-center',
//             });
//           }
//           setShowLoadMoreBtn(false);
//         } else {
//           setShowLoadMoreBtn(true);
//         }
//         setStatus(Status.RESOLVED);
//       } catch (error) {
//         toast.error(error.message);
//         setError(error);
//         setStatus(Status.REJECTED);
//       }
//     };

//     fetchMoviesList();
//   }, [page]);

//   const loadMore = () => {
//     setPage(prevPage => prevPage + 1);
//     scroll.scrollToBottom();
//   };

//   return (
//     <>
//       <PageHeading text="Trending today" />
//       {status === Status.PENDING && <LoaderSpinner />}
//       {status === Status.REJECTED && <Error errorContent={error} />}
//       {status === Status.RESOLVED && <MoviesList movies={trendingMovies} />}

//       {status === Status.RESOLVED && trendingMovies.length === 0 && (
//         <Error errorContent="Sorry! There are no trending movies" />
//       )}

//       {showLoadMoreBtn && (
//         <Button contentBtn="Load More" onLoadMore={loadMore} />
//       )}
//     </>
//   );
// };

// export default HomeView;
