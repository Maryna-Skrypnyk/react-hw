import PropTypes from 'prop-types';
import ImageGalleryItem from './ImageGalleryItem';

import s from './ImageGallery.module.scss';

const ImageGallery = ({ images, onClickImage }) => {
  // if (images.length === 0) return null;
  return (
    <ul className={s.ImageGallery}>
      {images.map(({ id, webformatURL, tags, largeImageURL }) => (
        <ImageGalleryItem
          key={id}
          webformatURL={webformatURL}
          tags={tags}
          onClickImage={onClickImage}
          largeImageURL={largeImageURL}
        />
      ))}
    </ul>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
    }),
  ).isRequired,
  onClickImage: PropTypes.func,
};

export default ImageGallery;
