import PropTypes from 'prop-types';

import s from './StatsList.module.scss';

const StatsList = ({ stats }) => {
  return (
    <ul className={s.stats}>
      <li className={s.item}>
        <span className={s.label}>Followers</span>
        <span className={s.quantity}>{stats.followers}</span>
      </li>
      <li className={s.item}>
        <span className={s.label}>Views</span>
        <span className={s.quantity}>{stats.views}</span>
      </li>
      <li className={s.item}>
        <span className={s.label}>Likes</span>
        <span className={s.quantity}>{stats.likes}</span>
      </li>
    </ul>
  );
};

StatsList.propTypes = {
  stats: PropTypes.objectOf(PropTypes.number).isRequired,
};

export default StatsList;
