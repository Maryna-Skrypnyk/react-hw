import s from './ImageGalleryItem.module.scss';

const ImageGalleryItem = ({
  webformatURL,
  largeImageURL,
  tags,
  onClickImage,
}) => {
  return (
    <li className={s.ImageGalleryItem}>
      <img
        src={webformatURL}
        alt={tags}
        className={s.ImageGalleryImage}
        onClick={onClickImage}
        data-source={largeImageURL}
      />
    </li>
  );
};

export default ImageGalleryItem;
