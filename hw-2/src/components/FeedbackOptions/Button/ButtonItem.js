import PropTypes from 'prop-types';

import s from './ButtonItem.module.scss';

const ButtonItem = ({ feedback, onLeaveFeedback }) => {
  return (
    <button
      type="button"
      data-feedback={feedback}
      onClick={onLeaveFeedback}
      className={s.button}
    >
      {feedback}
    </button>
  );
};

ButtonItem.propTypes = {
  feedback: PropTypes.string.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default ButtonItem;
