import PropTypes from 'prop-types';
import s from './Layout.module.scss';

const Layout = ({ children }) => <div className={s.Layout}>{children}</div>;

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
