import PropTypes from 'prop-types';

const TransactionBody = ({ children }) => {
  return <tbody>{children}</tbody>;
};

TransactionBody.defaultProps = {
  children: [],
};

TransactionBody.propTypes = {
  children: PropTypes.node,
};

export default TransactionBody;
