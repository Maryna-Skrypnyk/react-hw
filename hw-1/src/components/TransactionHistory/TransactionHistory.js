import PropTypes from 'prop-types';
import TransactionItem from './TransactionItem';
import TransactionTitle from './TransactionTitle';
import TransactionBody from './TransactionBody';

import s from './TransactionHistory.module.scss';

const TransactionHistory = ({ items }) => {
  if (items.length === 0) return null;

  return (
    <table className={s.table}>
      <TransactionTitle />
      <TransactionBody>{items.map(TransactionItem)}</TransactionBody>
    </table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.array.isRequired,
};

export default TransactionHistory;
