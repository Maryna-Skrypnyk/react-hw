import PropTypes from 'prop-types';
import MovieListItem from '../MovieListItem';
import styles from './MoviesList.module.scss';

const MoviesList = ({ movies }) => {
  return (
    <ul className={styles.MoviesList}>
      {movies.map(({ id, title, original_title }) => (
        <MovieListItem
          key={id}
          id={id}
          title={title}
          original_title={original_title}
        />
      ))}
    </ul>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.array.isRequired,
};

export default MoviesList;
