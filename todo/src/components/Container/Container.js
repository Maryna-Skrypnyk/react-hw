import React from 'react';
import PropTypes from 'prop-types';
import s from './Container.module.scss';

const Container = ({ children }) => (
  <div className={s.Container}>{children}</div>
);

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Container;
