import PropTypes from 'prop-types';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { ImSearch } from 'react-icons/im';
import { toast } from 'react-toastify';

import s from './Searchbar.module.scss';

const SearchBar = ({ onSubmit }) => {
  const onHandleSubmit = ({ searchQuery }, { resetForm }) => {
    if (searchQuery.trim() === '') {
      toast.error('Enter search query');
      return;
    }
    onSubmit(searchQuery);
    resetForm({ searchQuery: '' });
  };

  const validationSchema = Yup.object({
    searchQuery: Yup.string()
      .trim('cannot include leading and trailing spaces')
      .min(2, 'at least 2 charater')
      .max(40, 'must be 40 characters or less')
      .required('field is required'),
  });

  return (
    <header className={s.Searchbar}>
      <Formik
        initialValues={{ searchQuery: '' }}
        validationSchema={validationSchema}
        onSubmit={onHandleSubmit}
        validateOnBlur={false}
      >
        <Form className={s.SearchForm}>
          <button type="submit" className={s.button}>
            <ImSearch />
          </button>
          <label htmlFor="searchQuery" className={s.label}></label>
          <Field
            id="searchQuery"
            name="searchQuery"
            type="text"
            className={s.input}
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
          <ErrorMessage
            component="span"
            name="searchQuery"
            className={s.errorQuery}
          />
        </Form>
      </Formik>
    </header>
  );
};

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SearchBar;
