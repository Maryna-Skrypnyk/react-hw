import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import styles from './MovieListItem.module.scss';

const MovieListItem = ({ id, title, original_title }) => {
  const location = useLocation();

  const titleMovie = title === '' || !title ? original_title : title;

  return (
    <li className={styles.MovieListItem}>
      <Link
        className={styles.MovieLink}
        to={`/movies/${id}`}
        state={{ from: location }}
      >
        {titleMovie}
      </Link>
    </li>
  );
};

MovieListItem.defaultProps = {
  title: '',
  original_title: '',
};

MovieListItem.propTypes = {
  title: PropTypes.string,
  original_title: PropTypes.string,
  id: PropTypes.number.isRequired,
};

export default MovieListItem;
