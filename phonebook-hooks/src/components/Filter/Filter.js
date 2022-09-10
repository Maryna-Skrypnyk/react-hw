import PropTypes from 'prop-types';
import withLocalization from '../hoc/withLocalization';
import { motion } from 'framer-motion';
import { v4 as uuidv4 } from 'uuid';

import s from './Filter.module.scss';

const Filter = ({ value, onChange, localization }) => {
  const filterInputId = uuidv4();
  const { titleFilter, namePlaceholder } = localization.localizedContent;

  return (
    <motion.div
      className={s.filter}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ ease: 'easeOut', duration: 0.5 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false }}
    >
      <label htmlFor={filterInputId} className={s.label}>
        {titleFilter}
      </label>
      <motion.input
        id={filterInputId}
        type="text"
        name="name"
        value={value}
        onChange={onChange}
        placeholder={namePlaceholder}
        className={s.input}
        initial={{ scale: 0 }}
        exit={{ scale: 0 }}
        transition={{ ease: 'easeOut', duration: 0.5 }}
        animate={{ scale: 1 }}
      />
    </motion.div>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default withLocalization(Filter);
