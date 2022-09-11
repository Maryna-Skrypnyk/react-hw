import PropTypes from 'prop-types';
import withLocalization from '../hoc/withLocalization';
import s from './SecondaryTitle.module.scss';

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

export default withLocalization(SecondaryTitle);
