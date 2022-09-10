import PropTypes from 'prop-types';
import withLocalization from '../hoc/withLocalization';
import s from './Title.module.scss';

// const Title = ({ primaryTitle, secondaryTitle  }) => {
//   return (
//     <>
//       {primaryTitle && <h1 className={s.primaryTitle}>{primaryTitle}</h1>}
//       {secondaryTitle && <h2 className={s.secondaryTitle}>{secondaryTitle}</h2>}
//     </>
//   );
// };

// Title.defaultProps = {
//   primaryTitle: '',
//   secondaryTitle: '',
// };

// Title.propTypes = {
//   primaryTitle: PropTypes.string,
//   secondaryTitle: PropTypes.string,
// };

// export default Title;

// wiht localization
const PrimaryTitle = ({ localization }) => {
  const { primaryTitle } = localization.localizedContent;
  return (
    <>{primaryTitle && <h1 className={s.primaryTitle}>{primaryTitle}</h1>}</>
  );
};

PrimaryTitle.defaultProps = {
  primaryTitle: '',
};

PrimaryTitle.propTypes = {
  primaryTitle: PropTypes.string,
};

const SecondaryTitle = ({ localization }) => {
  const { secondaryTitle } = localization.localizedContent;
  return (
    <>
      {secondaryTitle && <h2 className={s.secondaryTitle}>{secondaryTitle}</h2>}
    </>
  );
};

SecondaryTitle.defaultProps = {
  secondaryTitle: '',
};

SecondaryTitle.propTypes = {
  secondaryTitle: PropTypes.string,
};

const Title = {
  PrimaryTitle: withLocalization(PrimaryTitle),
  SecondaryTitle: withLocalization(SecondaryTitle),
};

export default Title;
