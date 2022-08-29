import ImageGallery from '../ImageGallery';
import Loader from '../Loader';
import pendingImage from './pending.png';

const ImagePending = ({ searchQuery }) => {
  const images = {
    tags: searchQuery,
    webformatURL: pendingImage,
  };

  return (
    <div role="alert">
      <Loader />
      <ImageGallery images={images} />
    </div>
  );
};

export default ImagePending;
