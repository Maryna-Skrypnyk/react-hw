import PropTypes from 'prop-types';

import s from './NoFeedbackMessage.module.scss';

const NoFeedbackMessage = ({ message }) => {
  return <p className={s.message}>{message}</p>;
};

NoFeedbackMessage.propTypes = {
  message: PropTypes.string.isRequired,
};

export default NoFeedbackMessage;
