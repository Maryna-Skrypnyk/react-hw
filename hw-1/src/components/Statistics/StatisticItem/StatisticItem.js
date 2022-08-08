import s from './StatisticItem.module.scss';

const bgColor = () => {
  const r = Math.round(Math.random() * 255);
  const g = Math.round(Math.random() * 255);
  const b = Math.round(Math.random() * 255);
  const color = `rgb(${r}, ${g}, ${b})`;
  return color;
};

const StatisticItem = ({ id, label, percentage }) => {
  return (
    <li key={id} className={s.item} style={{ backgroundColor: bgColor() }}>
      <span className={s.label}>{label}</span>
      <span className={s.percentage}>{percentage}%</span>
    </li>
  );
};

export default StatisticItem;
