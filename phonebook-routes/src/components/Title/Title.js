import PropTypes from 'prop-types';
import s from './Title.module.scss';

const Title = ({ primaryTitle, secondaryTitle, titleClass, children }) => {
  return (
    <>
      {primaryTitle && (
        <h1 className={s[`${titleClass}`]}>
          {primaryTitle}
          {children}
        </h1>
      )}
      {secondaryTitle && (
        <h2 className={s[`${titleClass}`]}>
          {secondaryTitle}
          {children}
        </h2>
      )}
    </>
  );
};

Title.defaultProps = {
  primaryTitle: '',
  secondaryTitle: '',
  children: null,
};

Title.propTypes = {
  primaryTitle: PropTypes.string,
  secondaryTitle: PropTypes.string,
  children: PropTypes.node,
};

export default Title;
