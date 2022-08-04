import PropTypes from 'prop-types';

import s from './ContainerProfile.module.scss';

const ContainerProfile = ({ children }) => {
  return <div className={s.profile}>{children}</div>;
};

ContainerProfile.propTypes = {
  children: PropTypes.node,
};

export default ContainerProfile;
