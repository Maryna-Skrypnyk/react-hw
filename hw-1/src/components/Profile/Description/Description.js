import PropTypes from 'prop-types';

import defaultAvatar from '../../../images/defaultImages/no-avatar.jpg';

import s from './Description.module.scss';

const Description = ({ avatar, tag, name, location }) => {
  return (
    <div className={s.description}>
      <img
        src={avatar}
        alt={tag}
        className={s.avatar}
        width="512"
        height="512"
      />
      <p className={s.name}>{name}</p>
      <p className={s.tag}>@{tag}</p>
      <p className={s.location}>{location}</p>
    </div>
  );
};

Description.defaultProps = {
  avatar: defaultAvatar,
};

Description.propTypes = {
  avatar: PropTypes.string,
  tag: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
};

export default Description;
