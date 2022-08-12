import React, { Component } from 'react';
import Counter from './components/Counter';
import Dropdown from './components/Dropdown';
import ColorPicker from './components/ColorPicker';
import TodoList from './components/TodoList';
import initialTodos from './todos.json';

const colorPickerOptions = [
  { label: 'red', color: '#F44336' },
  { label: 'green', color: '#4CAF50' },
  { label: 'blue', color: '#2196F3' },
  { label: 'grey', color: '#607D8B' },
  { label: 'pink', color: '#E91E63' },
  { label: 'indigo', color: '#3F51B5' },
];

class App extends Component {
  state = {
    todos: initialTodos,
    filter: '',
  };

  deleteTodo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }));
  };

  toggleCompleted = todoId => {
    this.setState(prewState => ({
      todos: prewState.todos.map(todo => {
        if (todo.id === todoId) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      }),
    }));
  };

  render() {
    const { todos } = this.state;

    const totalTodoCount = todos.length;
    const completedTodoCount = todos.reduce(
      (total, todo) => (todo.completed ? total + 1 : total),
      0,
    );

    return (
      <>
        <h1>Стан компоненту</h1>

        <Counter initialValue={10} />
        <Dropdown />
        <ColorPicker options={colorPickerOptions} />

        <div>
          <p>Загальна кількість: {totalTodoCount}</p>
          <p>Кількість виконаних: {completedTodoCount}</p>
        </div>

        <TodoList
          todos={todos}
          onDeleteTodo={this.deleteTodo}
          onToggleCompleted={this.toggleCompleted}
        />
      </>
    );
  }
}

export default App;
