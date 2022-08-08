import PropTypes from 'prop-types';
import Section from '../Section';
import StatisticsList from './StatisticsList';

import s from './Statistics.module.scss';

const Statistics = ({ title, stats }) => {
  return (
    <Section classBox="statistics">
      {title && <h2 className={s.title}>{title}</h2>}
      <StatisticsList stats={stats} />
    </Section>
  );
};

// Statistics.defaultProps = {
//   title: '',
// };

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default Statistics;
