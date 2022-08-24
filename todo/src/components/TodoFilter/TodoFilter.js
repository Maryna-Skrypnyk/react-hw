import React from 'react';
import s from './TodoFilter.module.scss';

const TodoFilter = ({ value, onChange }) => (
  <div className={s.TodoFilter}>
    <h3 className={s.TodoFilter__label}>Фільтр по вмісту</h3>
    <input
      type="text"
      className={s.TodoFilter__input}
      value={value}
      onChange={onChange}
    />
  </div>
);

export default TodoFilter;
