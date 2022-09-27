import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import moviesAPI from '../api/movies-api';
import LoaderSpinner from '../components/LoaderSpinner';
import Error from '../components/Error';
import Reviews from '../components/MovieDetailsPage/MovieAddInfo/Reviews';
import { toast } from 'react-toastify';

// const ReviewsView = () => {
//   const { movieId } = useParams();

//   const [reviews, setReviews] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     setLoading(true);
//     moviesAPI
//       .fetchReviewMovie(movieId)
//       .then(reviews => {
//         if (reviews.length === 0) {
//           setError('We don`t have any reviews for this movie.');
//         }
//         setReviews(reviews);
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

//       {reviews && <Reviews reviews={reviews} />}
//     </>
//   );
// }

// export default ReviewsView;

//////////////

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

const ReviewsView = () => {
  const { movieId } = useParams();

  const [reviews, setReviews] = useState(null);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState(Status.IDLE);

  useEffect(() => {
    setStatus(Status.PENDING);

    moviesAPI
      .fetchReviewMovie(movieId)
      .then(reviews => {
        setReviews(reviews);
        setStatus(Status.RESOLVED);
      })
      .catch(error => {
        console.log(error);
        toast.error(error.message);
        setError('Whoops, something went wrong. Enter your request again');
        setStatus(Status.REJECTED);
      });
  }, [movieId]);

  return (
    <>
      {status === Status.REJECTED && <Error errorContent={error} />}
      {status === Status.PENDING && <LoaderSpinner />}
      {status === Status.RESOLVED && <Reviews reviews={reviews} />}
      {status === Status.RESOLVED && reviews.length === 0 && (
        <Error errorContent="Reviews are missing" />
      )}
    </>
  );
};

export default ReviewsView;
