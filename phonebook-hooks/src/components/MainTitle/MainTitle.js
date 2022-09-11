import PropTypes from 'prop-types';
import withLocalization from '../hoc/withLocalization';
import s from './MainTitle.module.scss';

// wiht localization
const MainTitle = ({ localization }) => {
  const { primaryTitle } = localization.localizedContent;
  return <>{primaryTitle && <h1 className={s.mainTitle}>{primaryTitle}</h1>}</>;
};

MainTitle.defaultProps = {
  primaryTitle: '',
};

MainTitle.propTypes = {
  primaryTitle: PropTypes.string,
};

export default withLocalization(MainTitle);

//////////

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
