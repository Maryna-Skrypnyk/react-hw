import PropTypes from 'prop-types';
import s from './Button.module.scss';

const Button = ({ type, onClick, children, btnClass, ...allyProps }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={s[`${btnClass}`]}
      {...allyProps}
    >
      {children}
    </button>
  );
};

Button.defaultProps = {
  onClick: () => null,
  children: null,
  type: 'button',
};

Button.propTypes = {
  onClick: PropTypes.func,
  type: PropTypes.string,
  children: PropTypes.node,
  'aria-label': PropTypes.string.isRequired,
};

export default Button;
