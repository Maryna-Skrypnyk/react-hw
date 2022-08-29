import { Component } from 'react';
import PropTypes from 'prop-types';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { ImSearch } from 'react-icons/im';
import { toast } from 'react-toastify';

import s from './Searchbar.module.scss';

export default class SearchBar extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  onHandleSubmit = ({ searchQuery }, { resetForm }) => {
    if (searchQuery.trim() === '') {
      toast.error('Enter search query');
      return;
    }
    this.props.onSubmit({ searchQuery });
    // console.log(searchQuery);

    resetForm({ searchQuery: '' });
  };

  validationSchema = Yup.object({
    searchQuery: Yup.string()
      .trim('cannot include leading and trailing spaces')
      .min(2, 'at least 2 charater')
      .max(40, 'must be 40 characters or less')
      .required('field is required'),
  });

  render() {
    return (
      <header className={s.Searchbar}>
        <Formik
          initialValues={{ searchQuery: '' }}
          validationSchema={this.validationSchema}
          onSubmit={this.onHandleSubmit}
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
  }
}
