import PropTypes from 'prop-types';
import errorImage from './not-found.jpg';

import s from './ImageError.module.scss';

const ImageError = ({ message }) => {
  return (
    <div role="alert" className={s.error}>
      <img
        className={s.imgError}
        src={errorImage}
        width="300"
        alt="not found"
      />
      <p>{message}</p>
    </div>
  );
};

ImageError.propTypes = {
  message: PropTypes.string,
};

export default ImageError;
