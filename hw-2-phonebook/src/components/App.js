import { Component } from 'react';
import Container from './Container';
import Title from './Title';
// import ContactForm from './ContactForm';
import FormFormic from './FormFormic';
import ContactList from './ContactList';
import Filter from './Filter';
import { v4 as uuidv4 } from 'uuid';
import { ToastContainer } from 'react-toastify';
import { makeToastWarn } from './Notification/Notification';
import 'react-toastify/dist/ReactToastify.css';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

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

    // if ((!name || name.trim() === '') && (!number || number.trim() === '')) {
    //   makeToastWarn('Fill in the fields "Name" and "Number"', 'warn');
    //   // alert('Fill in the fields "Name" and "Number"');
    //   return;
    // }

    // if (!name || name.trim() === '') {
    //   makeToastWarn('Field "Name" is empty', 'warn');
    //   return;
    // }

    // if (!number || number.trim() === '') {
    //   makeToastWarn('Field "Number" is empty', 'warn');
    //   return;
    // }

    this.setState(({ contacts }) => ({ contacts: [contact, ...contacts] }));
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

  deleteContact = contactId => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const { filter } = this.state;

    const visibleContacts = this.getVisibleContactsSortByName();

    return (
      <Container>
        <Title primaryTitle="Phonebook" />
        {/* <ContactForm onSubmitForm={this.addContact} /> */}
        <FormFormic onSubmitForm={this.addContact} />
        <Title secondaryTitle="Contacts" />

        <Filter value={filter} onChange={this.filterChange} />

        <ContactList
          contacts={visibleContacts}
          onDeleteContact={this.deleteContact}
        />

        <ToastContainer />
      </Container>
    );
  }
}

export default App;
