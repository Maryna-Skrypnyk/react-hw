import PropTypes from 'prop-types';
import NoFeedbackMessage from '../NoFeedbackMessage';

import s from './Statistics.module.scss';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  if (total === 0) return <NoFeedbackMessage message="No feedback given" />;
  return (
    <ul className={s.statsList}>
      <li className={s.statsItem}>Good: {good}</li>
      <li className={s.statsItem}>Neutral: {neutral}</li>
      <li className={s.statsItem}>Bad: {bad}</li>
      <hr />
      <li className={s.statsItem}>Total: {total}</li>
      <li className={s.statsItem}>Positive feedback: {positivePercentage}%</li>
    </ul>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
