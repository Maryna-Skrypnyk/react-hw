import PropTypes from 'prop-types';
import ButtonItem from './Button';

import s from './FeedbackOptions.module.scss';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ul className={s.optionsList}>
      {options.map(option => (
        <li key={option} className={s.buttonItem}>
          <ButtonItem feedback={option} onLeaveFeedback={onLeaveFeedback} />
        </li>
      ))}
    </ul>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  //   onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
