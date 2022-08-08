import StatisticItem from '../StatisticItem';

import s from './StatisticsList.module.scss';

const StatisticsList = ({ stats }) => {
  if (stats.length === 0) return null;
  return <ul className={s.statsList}>{stats.map(StatisticItem)}</ul>;
};

export default StatisticsList;
