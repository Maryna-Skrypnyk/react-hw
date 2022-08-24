import React from 'react';
import classNames from 'classnames';
import Todo from '../Todo';
import s from './TodoList.module.scss';

const TodoList = ({ todos, onDeleteTodo, onToggleCompleted }) => (
  <ul className={s.TodoList}>
    {todos.map(({ id, text, completed }) => (
      <li
        key={id}
        className={classNames(s['TodoList__item'], {
          [s['TodoList__item--completed']]: completed,
        })}
      >
        <Todo
          text={text}
          completed={completed}
          onToggleCompleted={() => onToggleCompleted(id)}
          onDelete={() => onDeleteTodo(id)}
        />
      </li>
    ))}
  </ul>
);

export default TodoList;
