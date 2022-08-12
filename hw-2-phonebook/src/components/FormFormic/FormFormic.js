import { Component } from 'react';
import PropTypes from 'prop-types';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { v4 as uuidv4 } from 'uuid';

import s from './FormFormic.module.scss';

// const INITIAL_STATE = {
//   name: '',
//   number: '',
// };

class FormFormic extends Component {
  static propTypes = {
    onSubmitForm: PropTypes.func.isRequired,
  };

  nameInputId = uuidv4();
  numberInputId = uuidv4();

  //   onHandleChange = ({ target }) => {
  //     const { name, value } = target;

  //     this.setState({ [name]: value });
  //   };

  onHandleSubmit = ({ name, number }, { resetForm }) => {
    this.props.onSubmitForm({ name, number });
    resetForm({ name: '', number: '' });
  };

  validationSchema = Yup.object({
    name: Yup.string()
      .min(2, 'At least 1 charater')
      .max(40, 'Must be 40 characters or less')
      .required('Name is required'),
    number: Yup.string()
      .min(8, 'At least 8 charater')
      .max(18, 'Must be 18 characters or less')
      .required('Number is required'),
  });

  render() {
    return (
      <Formik
        initialValues={{ name: '', number: '' }}
        validationSchema={this.validationSchema}
        onSubmit={this.onHandleSubmit}
      >
        <Form className={s.form}>
          <label htmlFor="name" className={s.label}>
            Name
          </label>
          <Field
            id="name"
            name="name"
            type="text"
            className={s.input}
            placeholder="Enter name"
          />
          <ErrorMessage component="span" name="name" className={s.errorName} />

          <label htmlFor="number" className={s.label}>
            Number
          </label>
          <Field
            id="number"
            name="number"
            type="tel"
            className={s.input}
            placeholder="Enter phone number"
          />
          <ErrorMessage
            component="span"
            name="number"
            className={s.errorNumber}
          />

          <button type="submit" className={s.button}>
            Add contact
          </button>
        </Form>
      </Formik>
    );
  }
}

export default FormFormic;
