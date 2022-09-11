import PropTypes from 'prop-types';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import withLocalization from '../hoc/withLocalization';
import Button from '../Button';
import * as Yup from 'yup';

import s from './FormFormic.module.scss';

const FormFormic = ({ onSubmitForm, localization }) => {
  const {
    contentBtn,
    contactName,
    phoneNumber,
    namePlaceholder,
    numberPlaceholder,
    required,
    minCharacterName,
    maxCharacterName,
    notSpaces,
    validNumber,
    minCharacterNumber,
    maxCharacterNumber,
  } = localization.localizedContent;

  const onHandleSubmit = ({ name, number }, { resetForm }) => {
    onSubmitForm({ name, number });
    resetForm({ name: '', number: '' });
  };

  const validationSchema = Yup.object({
    name: Yup.string()
      .trim(notSpaces)
      .min(2, minCharacterName)
      .max(40, maxCharacterName)
      .required(required),
    number: Yup.string()
      .trim(notSpaces)
      .matches(/^[+]{0,1}[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s/0-9]*$/, validNumber)
      .min(8, minCharacterNumber)
      .max(18, maxCharacterNumber)
      .required(required),
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
          {contactName}
        </label>
        <Field
          id="name"
          name="name"
          type="text"
          className={s.input}
          placeholder={namePlaceholder}
          autoFocus
        />
        <ErrorMessage component="span" name="name" className={s.errorName} />
        <label htmlFor="number" className={s.label}>
          {phoneNumber}
        </label>
        <Field
          id="number"
          name="number"
          type="tel"
          className={s.input}
          placeholder={numberPlaceholder}
        />
        <ErrorMessage
          component="span"
          name="number"
          className={s.errorNumber}
        />

        <Button type="submit" btnClass="button" aria-label="Add contact">
          {contentBtn}
        </Button>
      </Form>
    </Formik>
  );
};

FormFormic.propTypes = {
  onSubmitForm: PropTypes.func.isRequired,
};

export default withLocalization(FormFormic);
