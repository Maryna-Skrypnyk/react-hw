import React, { Component } from 'react';
import s from './TodoEditor.module.scss';

class TodoEditor extends Component {
  state = {
    message: '',
  };

  handleChange = e => {
    this.setState({ message: e.currentTarget.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state.message);

    this.setState({ message: '' });
  };

  render() {
    return (
      <form className={s.TodoEditor} onSubmit={this.handleSubmit}>
        <textarea
          className={s.TodoEditor__textarea}
          value={this.state.message}
          onChange={this.handleChange}
        ></textarea>
        <button type="submit" className={s.TodoEditor__button}>
          Зберегти
        </button>
      </form>
    );
  }
}

export default TodoEditor;
