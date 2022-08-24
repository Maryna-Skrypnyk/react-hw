import React from 'react';
import s from '../TodoList/TodoList.module.scss';

const Todo = ({
  text,
  completed,
  onToggleCompleted,
  onDelete,
  // onOpenMModal,
}) => (
  <>
    <input
      type="checkbox"
      className={s.TodoList__checkbox}
      checked={completed}
      onChange={onToggleCompleted}
    />
    <p className={s.TodoList__text}>{text}</p>
    {/* <button type="button" className={s.TodoList__btn} onClick={onOpenMModal}>
      Змінити
    </button> */}
    <button type="button" className={s.TodoList__btn} onClick={onDelete}>
      Видалити
    </button>
  </>
);

export default Todo;
