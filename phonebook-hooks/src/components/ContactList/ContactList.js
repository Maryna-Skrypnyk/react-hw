import PropTypes from 'prop-types';
import ContactItem from './ContactItem';

import s from './ContactList.module.scss';

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <>
      {contacts.length === 0 && (
        <p className={s.notice}>There are no contacts in the list</p>
      )}
      <ul className={s.contactList}>
        {contacts.map(({ name, number, id }) => (
          <ContactItem
            key={id}
            name={name}
            number={number}
            onDeleteContact={() => {
              onDeleteContact(id);
            }}
          />
        ))}
      </ul>
    </>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default ContactList;
