import PropTypes from 'prop-types';
import defaultAvatar from '../../../images/defaultImages/no-avatar.jpg';

import s from './Friend.module.scss';

const Friend = ({ name, avatar = defaultAvatar, isOnline = false, id }) => {
  return (
    <li className={s.friend} key={id}>
      <span
        className={s[isOnline]} // модульні стилі
        // className={s.status}
        // style={
        //   isOnline ? { backgroundColor: 'green' } : { backgroundColor: 'red' }
        // }                   // інлайн-стилі
      ></span>
      <img className={s.avatar} src={avatar} alt={name} width="48" />
      <p className={s.name}>{name}</p>
    </li>
  );
};

// Friend.defaultProps = {
//   avatar: defaultAvatar,
//   isOnline: false,
// };

Friend.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string,
  //   isOnline: PropTypes.bool,
  isOnline: PropTypes.oneOf([true, false]),
  id: PropTypes.number.isRequired,
};

export default Friend;
