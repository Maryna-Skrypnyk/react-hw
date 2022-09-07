import PropTypes from 'prop-types';
import s from './Title.module.scss';

const Title = ({ primaryTitle, secondaryTitle }) => {
  return (
    <>
      {primaryTitle && <h1 className={s.primaryTitle}>{primaryTitle}</h1>}
      {secondaryTitle && <h2 className={s.secondaryTitle}>{secondaryTitle}</h2>}
    </>
  );
};

Title.propTypes = {
  primaryTitle: PropTypes.string,
  secondaryTitle: PropTypes.string,
};

export default Title;
