import PropTypes from 'prop-types';
import ContactItem from './ContactItem';
import withLocalization from '../hoc/withLocalization';
import { motion, AnimatePresence } from 'framer-motion';

import s from './ContactList.module.scss';

const ContactList = ({ contacts, onDeleteContact, localization }) => {
  const { noContacts } = localization.localizedContent;

  return (
    <>
      {contacts.length === 0 && (
        <motion.p
          className={s.notice}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {noContacts}
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

export default withLocalization(ContactList);
