import s from './TransactionTitle.module.scss';

const transHead = ['Type', 'Amount', 'Currency'];

const TransactionTitle = () => {
  return (
    <thead>
      <tr className={s.title}>
        {transHead.map(head => (
          <th key={head} className={s.name}>
            {head}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TransactionTitle;
