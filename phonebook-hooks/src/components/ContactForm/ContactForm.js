import { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

import s from './ContactForm.module.scss';

const ContactForm = ({ onSubmitForm }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const nameInputId = useRef(uuidv4());
  const numberInputId = useRef(uuidv4());

  const onHandleChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const onHandleSubmit = e => {
    e.preventDefault();
    onSubmitForm({ name, number });
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={onHandleSubmit} className={s.form}>
      <label htmlFor={nameInputId} className={s.label}>
        Name
      </label>
      <input
        type="text"
        id={nameInputId}
        name="name"
        value={name}
        onChange={onHandleChange}
        placeholder="Enter name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Ім'я може складатись лише з букв, апострофа, тире і пробілів. Наприклад, Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan і т.д."
        // required
        maxLength="40"
        className={s.input}
      />
      <label htmlFor={numberInputId} className={s.label}>
        Phone number
      </label>
      <input
        type="tel"
        id={numberInputId}
        name="number"
        value={number}
        onChange={onHandleChange}
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
};

ContactForm.propTypes = {
  onSubmitForm: PropTypes.func.isRequired,
};

export default ContactForm;
