import { useState, useEffect } from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import moviesAPI from '../api/movies-api';
import MovieMainInfo from '../components/MovieDetailsPage/MovieMainInfo';
import MovieAddInfo from '../components/MovieDetailsPage/MovieAddInfo';
import ButtonIcon from '../components/ButtonIcon';
import { HiArrowLeft } from 'react-icons/hi';
import LoaderSpinner from '../components/LoaderSpinner';
import Error from '../components/Error';
import { toast } from 'react-toastify';
import styles from '../components/MovieDetailsPage/MovieDetailsPage.module.scss';

// const MovieDetailsPage = () => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const { movieId } = useParams();

//   const [movie, setMovie] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     setLoading(true);
//     moviesAPI
//       .fetchMovieById(movieId)
//       .then(movie => {
//         setMovie(movie);
//         setLoading(false);
//       })
//       .catch(error => {
//         console.log(error);
//         setError('Whoops, something went wrong. Enter your request again');
//         setLoading(false);
//       });
//   }, [movieId]);

//   const onGoBack = () => {
//     // navigate(-1); // не працює на новій вкладці

//     navigate(location?.state?.from || '/movies', {
//       replace: false,
//     });
//   };

//   const onGoHome = () => {
//     navigate('/', { replace: true });
//   };

//   return (
//     <>
//       {error && <Error errorContent={error} />}
//       {loading && <LoaderSpinner />}
//       <ButtonIcon onClick={onGoBack} aria-label="Go back">
//         <HiArrowLeft />
//         <span className={styles.IconBtn}>Go back</span>
//       </ButtonIcon>
//       <ButtonIcon onClick={onGoHome} aria-label="Go home">
//         <HiArrowLeft />
//         <span className={styles.IconBtn}>Go home</span>
//       </ButtonIcon>

//       {movie && (
//         <>
//           <MovieMainInfo movie={movie} />
//           {/* <MovieAddInfo /> */}
//         </>
//       )}
//     </>
//   );
// }

// export default MovieDetailsPage;

////////////////

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

const MovieDetailsPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { movieId } = useParams();

  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState(Status.IDLE);

  useEffect(() => {
    // setLoading(true);
    setStatus(Status.PENDING);

    moviesAPI
      .fetchMovieById(movieId)
      .then(movie => {
        setMovie(movie);
        setStatus(Status.RESOLVED);
      })
      .catch(error => {
        console.log(error);
        toast.error(error.message);
        setError('Whoops, something went wrong. Enter your request again');
        setStatus(Status.REJECTED);
      });
  }, [movieId]);

  const onGoBack = () => {
    navigate(location?.state?.from || '/movies', {
      replace: false,
    });
  };

  const onGoHome = () => {
    navigate('/', { replace: true });
  };

  return (
    <>
      {status === Status.REJECTED && <Error errorContent={error} />}
      {status === Status.PENDING && <LoaderSpinner />}
      {status === Status.RESOLVED && (
        <>
          <ButtonIcon onClick={onGoBack} aria-label="Go back">
            <HiArrowLeft />
            <span className={styles.IconBtn}>Go back</span>
          </ButtonIcon>
          <ButtonIcon onClick={onGoHome} aria-label="Go home">
            <HiArrowLeft />
            <span className={styles.IconBtn}>Go home</span>
          </ButtonIcon>
          <MovieMainInfo movie={movie} />
          <MovieAddInfo />
        </>
      )}
    </>
  );
};

export default MovieDetailsPage;
