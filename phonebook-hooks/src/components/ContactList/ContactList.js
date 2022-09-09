import PropTypes from 'prop-types';
import ContactItem from './ContactItem';
import { motion, AnimatePresence } from 'framer-motion';

import s from './ContactList.module.scss';

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <>
      {contacts.length === 0 && (
        <motion.p
          className={s.notice}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          There are no contacts in the list
        </motion.p>
      )}
      <ul className={s.contactList}>
        <AnimatePresence>
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
        </AnimatePresence>
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
