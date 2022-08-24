import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

import s from './Filter.module.scss';

const Filter = ({ value, onChange }) => {
  const filterInputId = uuidv4();

  return (
    <div className={s.filter}>
      <label htmlFor={filterInputId} className={s.label}>
        Find contacts by name
      </label>
      <input
        id={filterInputId}
        type="text"
        name="name"
        value={value}
        onChange={onChange}
        placeholder="Enter name"
        // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        // title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        // required
        className={s.input}
      />
    </div>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
