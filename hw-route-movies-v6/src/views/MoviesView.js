import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import moviesAPI from '../api/movies-api';
import Searchbar from '../components/Searchbar';
import MoviesList from '../components/MoviesList';
import Button from '../components/Button';
import LoaderSpinner from '../components/LoaderSpinner';
import Error from '../components/Error';
import { animateScroll as scroll } from 'react-scroll';
import { toast } from 'react-toastify';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

const MoviesView = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [page, setPage] = useState(1);
  const [error, setError] = useState(null);
  const [showLoadMoreBtn, setShowLoadMoreBtn] = useState(false);
  const [status, setStatus] = useState(Status.IDLE);

  useEffect(() => {
    if (location.search === '') {
      return;
    }
    const movieQuery = new URLSearchParams(location.search).get('movie');
    setSearchQuery(movieQuery);
  }, [location.search]);

  useEffect(() => {
    if (!searchQuery) return;
    setStatus(Status.PENDING);

    moviesAPI
      .fetchSearchMovies(searchQuery, page)
      .then(newMovies => {
        if (newMovies.length === 0) {
          if (page !== 1) {
            toast.warn(`No more movies on your request "${searchQuery}"`, {
              position: 'bottom-center',
            });
          } else {
            toast.error(
              `There are no movies on your request "${searchQuery}"`,
              {
                position: 'top-center',
              },
            );
          }
          setShowLoadMoreBtn(false);
        } else {
          setShowLoadMoreBtn(true);
        }
        setMovies(prevMovies => [...prevMovies, ...newMovies]);
        setStatus(Status.RESOLVED);
      })
      .catch(error => {
        toast.error(error.message);
        setError(error);
        setStatus(Status.REJECTED);
      });
  }, [searchQuery, page]);

  const handleSearchQuerySubmit = newQuery => {
    if (newQuery === searchQuery) {
      loadMore();
      return;
    }
    setSearchQuery(newQuery);
    resetStates();

    navigate({ ...location, search: `movie=${newQuery}` });
  };

  const resetStates = () => {
    setMovies([]);
    setPage(1);
    setError(null);
  };

  const loadMore = () => {
    setPage(prevPage => prevPage + 1);
    scroll.scrollToBottom();
  };

  return (
    <>
      <Searchbar handleSubmit={handleSearchQuerySubmit} />

      {status === Status.PENDING && <LoaderSpinner />}
      {status === Status.REJECTED && <Error errorContent={error} />}
      {status === Status.RESOLVED && <MoviesList movies={movies} />}
      {status === Status.RESOLVED && movies.length === 0 && (
        <Error
          errorContent={`There are no movies on your request "${searchQuery}"`}
        />
      )}

      {showLoadMoreBtn && (
        <Button contentBtn="Load More" onLoadMore={loadMore} />
      )}
    </>
  );
};

export default MoviesView;
