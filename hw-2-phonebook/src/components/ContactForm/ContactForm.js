import { Component } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

import s from './ContactForm.module.scss';

const INITIAL_STATE = {
  name: '',
  number: '',
};

class ContactForm extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  state = { ...INITIAL_STATE };

  nameInputId = uuidv4();
  numberInputId = uuidv4();

  onHandleChange = ({ target }) => {
    const { name, value } = target;

    this.setState({ [name]: value });
  };

  onHandleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit({ ...this.state });
    this.reset();
  };

  reset = () => {
    this.setState({ ...INITIAL_STATE });
  };

  render() {
    const { name, number } = this.state;

    return (
      <form onSubmit={this.onHandleSubmit} className={s.form}>
        <label htmlFor={this.nameInputId} className={s.label}>
          Name
        </label>
        <input
          type="text"
          id={this.nameInputId}
          name="name"
          value={name}
          onChange={this.onHandleChange}
          placeholder="Enter name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Ім'я може складатись лише з букв, апострофа, тире і пробілів. Наприклад, Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan і т.д."
          // required
          maxLength="40"
          className={s.input}
        />
        <label htmlFor={this.numberInputId} className={s.label}>
          Phone number
        </label>
        <input
          type="tel"
          id={this.numberInputId}
          name="number"
          value={number}
          onChange={this.onHandleChange}
          placeholder="Enter phone number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефону повинен складатись з цифр, може вміщати пробіли, тире, круглі дужки, може починатись з +"
          // required
          maxLength="18"
          className={s.input}
        />
        <button type="submit" className={s.button}>
          Add contact
        </button>
      </form>
    );
  }
}

export default ContactForm;
