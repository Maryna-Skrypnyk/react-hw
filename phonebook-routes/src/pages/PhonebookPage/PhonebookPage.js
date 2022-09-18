import { useState, useEffect, useMemo } from 'react';
import useLocalStorage from '../../hooks/useLocalStorage';
import Title from '../../components/Title';
import withLocalization from '../../components/hoc/withLocalization';
import { AnimatePresence } from 'framer-motion';
// import ContactForm from './ContactForm';
import FormFormic from '../../components/FormFormic';
import Modal from '../../components/Modal';
import ContactList from '../../components/ContactList';
import Filter from '../../components/Filter';
import { v4 as uuidv4 } from 'uuid';
import { makeToastWarn } from '../../components/Notification/notification';
import ButtonIconWithContent from '../../components/ButtonIconWithContent';
import ButtonIcon from '../../components/ButtonIcon';
import { ReactComponent as AddIcon } from '../../images/icons/add.svg';
import { ReactComponent as CloseIcon } from '../../images/icons/close.svg';

const PhonebookPage = ({ localization }) => {
  const { isContact, phoneNumber, contactName, primaryTitle, secondaryTitle } =
    localization.localizedContent;
  const [contacts, setContacts] = useLocalStorage('contacts', []);
  // const [filter, setFilter] = useState('');
  const [filter, setFilter] = useLocalStorage('filter', '');
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    showModal && setFilter('');
  }, [setFilter, showModal]);

  const addContact = ({ name, number }) => {
    const contact = {
      id: uuidv4(),
      name,
      number,
    };

    if (contacts.find(contact => contact.name === name)) {
      makeToastWarn(`${contactName} "${name}" ${isContact}`, 'warn');
      return;
    }

    if (contacts.find(contact => contact.number === number)) {
      makeToastWarn(`${phoneNumber} "${number}" ${isContact}`, 'warn');
      return;
    }
    setContacts(prevContacts => [contact, ...prevContacts]);
    toggleModal();
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const deleteContact = contactId => {
    setContacts(contacts.filter(contact => contact.id !== contactId));
  };

  const filterChange = ({ target }) => {
    setFilter(target.value);
  };

  // const getVisibleContacts = () => {
  //   const normalizedFilter = filter.toLowerCase();
  //   return contacts.filter(contact =>
  //     contact.name.toLocaleLowerCase().includes(normalizedFilter),
  //   );
  // };

  // const getVisibleContactsSortByName = () => {
  //   const visibleContacts = getVisibleContacts();

  //   const visibleContactsSortByName = visibleContacts.sort((a, b) => {
  //     const nameA = a.name.toUpperCase();
  //     const nameB = b.name.toUpperCase();

  //     if (nameA < nameB) {
  //       return -1;
  //     }
  //     if (nameA > nameB) {
  //       return 1;
  //     }
  //     return 0;
  //   });

  //   return visibleContactsSortByName;
  // };

  // // useMemo для поверхневого порівняння значень станів, запобігає перерендеру при зміні станів, які не впливають на інші стани в синхронному коді
  // // в даному випадку зміна стану відкриття\закриття модалки не повинна впливати на перерендер фільтрації при кожному тоглі модалки
  // // має зміст при складних розрахунках з великим обсягом даних, при малих обсягах дана операція може вартувати дорожче в плані оптимізації
  const getVisibleContactsSortByName = useMemo(() => {
    // console.log('Фільтр контактів ' + Date.now());
    const getVisibleContacts = () => {
      const normalizedFilter = filter.toLowerCase();
      return contacts.filter(contact =>
        contact.name.toLocaleLowerCase().includes(normalizedFilter),
      );
    };

    const visibleContacts = getVisibleContacts();

    const visibleContactsSortByName = visibleContacts.sort((a, b) => {
      const nameA = a.name.toUpperCase();
      const nameB = b.name.toUpperCase();

      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });

    return visibleContactsSortByName;
  }, [contacts, filter]);

  return (
    <>
      <Title primaryTitle={primaryTitle} titleClass="primaryTitle" />
      <ButtonIconWithContent
        onClick={toggleModal}
        btnClass="btnAddContact"
        aria-label="Add contact"
      >
        <AddIcon width="30" height="30" fill="currentColor" />
      </ButtonIconWithContent>
      <AnimatePresence>
        {showModal && (
          <Modal onClose={toggleModal}>
            {/* <ContactForm onSubmitForm={addContact} /> */}
            <FormFormic onSubmitForm={addContact} />
            <ButtonIcon
              onClick={toggleModal}
              btnClass="btnCloseModal"
              aria-label="Close modal"
            >
              <CloseIcon width="32" height="32" fill="currentColor" />
            </ButtonIcon>
          </Modal>
        )}
      </AnimatePresence>
      <Title secondaryTitle={secondaryTitle} titleClass="secondaryTitle" />
      <Filter value={filter} onChange={filterChange} />
      <ContactList
        contacts={getVisibleContactsSortByName}
        onDeleteContact={deleteContact}
      />
    </>
  );
};

export default withLocalization(PhonebookPage);
