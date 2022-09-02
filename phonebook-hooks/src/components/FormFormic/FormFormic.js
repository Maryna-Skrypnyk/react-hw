import PropTypes from 'prop-types';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import s from './FormFormic.module.scss';

const FormFormic = ({ onSubmitForm }) => {
  const onHandleSubmit = ({ name, number }, { resetForm }) => {
    onSubmitForm({ name, number });
    resetForm({ name: '', number: '' });
  };

  const validationSchema = Yup.object({
    name: Yup.string()
      .trim('cannot include leading and trailing spaces')
      .min(2, 'at least 2 charater')
      .max(40, 'must be 40 characters or less')
      .required('name is required'),
    number: Yup.string()
      .trim('cannot include leading and trailing spaces')
      .matches(
        /^[+]{0,1}[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s/0-9]*$/,
        'enter valid phone number',
      )
      .min(8, 'at least 8 charater')
      .max(18, 'must be 18 characters or less')
      .required('number is required'),
  });

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={validationSchema}
      onSubmit={onHandleSubmit}
      validateOnBlur={false}
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
          autoFocus
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
};

FormFormic.propTypes = {
  onSubmitForm: PropTypes.func.isRequired,
};

export default FormFormic;
