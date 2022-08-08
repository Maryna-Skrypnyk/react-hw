import PropTypes from 'prop-types';

import s from './TransactionItem.module.scss';

const TransactionItem = ({ id, type, amount, currency }, i) => {
  const trClassName = i % 2 ? s.secondary : s.primary;

  return (
    <tr key={id} className={trClassName}>
      <td className={s.data}>{type}</td>
      <td className={s.data}>{amount}</td>
      <td className={s.data}>{currency}</td>
    </tr>
  );
};

TransactionItem.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};

export default TransactionItem;
