import PropTypes from 'prop-types';

import s from './LargeImage.module.scss';

const LargeImage = ({ largeImageURL, tags }) => {
  return <img src={largeImageURL} alt={tags} className={s.LargeImg} />;
};

LargeImage.defaultProps = {
  largeImageURL: 'no image',
};

LargeImage.propTypes = {
  largeImageURL: PropTypes.string,
  tags: PropTypes.string.isRequired,
};

export default LargeImage;
