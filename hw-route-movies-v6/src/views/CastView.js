import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import moviesAPI from '../api/movies-api';
import LoaderSpinner from '../components/LoaderSpinner';
import Error from '../components/Error';
import CastList from '../components/MovieDetailsPage/MovieAddInfo/Cast/CastList';
import { toast } from 'react-toastify';

// const CastView = () => {
//   const { movieId } = useParams();

//   const [actors, setActors] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     setLoading(true);
//     moviesAPI
//       .fetchCastMovie(movieId)
//       .then(cast => {
//         if (cast.length === 0) {
//           setError('We don`t have any cast for this movie.');
//         }
//         setActors(cast);
//         setLoading(false);
//       })
//       .catch(error => {
//         console.log(error);
//         setError('Whoops, something went wrong. Enter your request again');
//         setLoading(false);
//       });
//   }, [movieId]);

//   return (
//     <>
//       {error && <Error errorContent={error} />}
//       {loading && <LoaderSpinner />}

//       {actors && <CastList actors={actors} />}
//     </>
//   );
// }

// export default CastView;

//////////////

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

const CastView = () => {
  const { movieId } = useParams();

  const [cast, setActors] = useState(null);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState(Status.IDLE);

  useEffect(() => {
    setStatus(Status.PENDING);

    moviesAPI
      .fetchCastMovie(movieId)
      .then(cast => {
        // if (cast.length === 0) {
        //   toast.error('NO');
        // }
        setActors(cast);
        setStatus(Status.RESOLVED);
      })
      .catch(error => {
        toast.error(error.message);
        setError('Whoops, something went wrong. Enter your request again');
        setStatus(Status.REJECTED);
      });
  }, [movieId]);

  return (
    <>
      {status === Status.REJECTED && <Error errorContent={error} />}
      {status === Status.PENDING && <LoaderSpinner />}
      {status === Status.RESOLVED && <CastList cast={cast} />}
      {status === Status.RESOLVED && cast.length === 0 && (
        <Error errorContent="Cast is missing" />
      )}
    </>
  );
};

export default CastView;
