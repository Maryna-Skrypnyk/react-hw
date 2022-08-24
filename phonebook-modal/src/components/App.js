import { Component } from 'react';
import Layout from './Layout';
import Container from './Container';
import Title from './Title';
// import ContactForm from './ContactForm';
import FormFormic from './FormFormic';
import Modal from './Modal';
import ContactList from './ContactList';
import Filter from './Filter';
import { v4 as uuidv4 } from 'uuid';
import { ToastContainer } from 'react-toastify';
import { makeToastWarn } from './Notification/Notification';
import ButtonIcon from './ButtonIcon';
import { ReactComponent as AddIcon } from '../images/icons/add.svg';
import { ReactComponent as CloseIcon } from '../images/icons/close.svg';
import 'react-toastify/dist/ReactToastify.css';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
    showModal: false,
  };

  componentDidMount() {
    const parsedContacts = JSON.parse(localStorage.getItem('contacts'));

    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const nextContacts = this.state.contacts;
    const prevContacts = prevState.contacts;

    if (nextContacts !== prevContacts) {
      localStorage.setItem('contacts', JSON.stringify(nextContacts));
    }
  }

  addContact = ({ name, number }) => {
    const { contacts } = this.state;

    const contact = {
      id: uuidv4(),
      name,
      number,
    };

    if (contacts.find(contact => contact.name === name)) {
      makeToastWarn(`${name} is already in contacts`, 'warn');
      return;
    }

    if (contacts.find(contact => contact.number === number)) {
      makeToastWarn(`Number ${number} is already in contacts`, 'warn');
      return;
    }

    this.setState(({ contacts }) => ({ contacts: [contact, ...contacts] }));
    this.toggleModal();
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  deleteContact = contactId => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(contact => contact.id !== contactId),
    }));
  };

  filterChange = ({ target }) => {
    this.setState({ filter: target.value });
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(normalizedFilter),
    );
  };

  getVisibleContactsSortByName = () => {
    const visibleContacts = this.getVisibleContacts();

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
  };

  render() {
    const { filter, showModal } = this.state;

    const visibleContacts = this.getVisibleContactsSortByName();

    return (
      <Layout>
        <Container>
          <Title primaryTitle="Phonebook" />

          {/* <FormFormic onSubmitForm={this.addContact} /> */}

          <ButtonIcon
            onClick={this.toggleModal}
            btnClass="btnAddContact"
            aria-label="Add contact"
          >
            <AddIcon width="30" height="30" fill="currentColor" />
            Add contact
          </ButtonIcon>

          {showModal && (
            <Modal onClose={this.toggleModal}>
              {/* <ContactForm onSubmitForm={this.addContact} /> */}
              <FormFormic onSubmitForm={this.addContact} />
              <ButtonIcon
                onClick={this.toggleModal}
                btnClass="btnCloseModal"
                aria-label="Close modal"
              >
                <CloseIcon width="32" height="32" fill="currentColor" />
              </ButtonIcon>
            </Modal>
          )}

          <Title secondaryTitle="Contacts" />

          <Filter value={filter} onChange={this.filterChange} />

          <ContactList
            contacts={visibleContacts}
            onDeleteContact={this.deleteContact}
          />

          <ToastContainer />
        </Container>
      </Layout>
    );
  }
}

export default App;
