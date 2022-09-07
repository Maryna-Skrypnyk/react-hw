import PropTypes from 'prop-types';
import s from './ButtonIcon.module.scss';

const ButtonIcon = ({ type, onClick, children, btnClass, ...allyProps }) => (
  <button
    type={type}
    onClick={onClick}
    className={s[`${btnClass}`]}
    {...allyProps}
  >
    {children}
  </button>
);

ButtonIcon.defaultProps = {
  onClick: () => null,
  children: null,
  type: 'button',
};

ButtonIcon.propTypes = {
  onClick: PropTypes.func,
  type: PropTypes.string,
  children: PropTypes.node,
  'aria-label': PropTypes.string.isRequired,
};

export default ButtonIcon;
