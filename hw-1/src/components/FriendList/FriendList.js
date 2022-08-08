import PropTypes from 'prop-types';
import Friend from './Friend';

import s from './FriendList.module.scss';

const FriendList = ({ friends }) => {
  if (friends.length === 0) return null;
  return <ul className={s.friendList}>{friends.map(Friend)}</ul>;
};

FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
};

export default FriendList;
