import PropTypes from 'prop-types';

import s from './Section.module.scss';

const Section = ({ children, classBox }) => {
  return <div className={s[classBox]}>{children}</div>;
};

Section.propTypes = {
  children: PropTypes.node,
  classBox: PropTypes.string.isRequired,
};

export default Section;
