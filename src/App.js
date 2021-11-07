import './App.css';
import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

import testData from './data.json';
// import { number } from 'prop-types';
import ContactForm from './components/ContactForm';
import Filter from './components/Filter';
import ContactList from './components/ContactList';

class App extends Component {
  state = {
    contacts: [...testData],
    filter: '',
  };

  getFilteredContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    const filteredList = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
    return filteredList;
  };

  handleFilterChange = e => {
    const { value } = e.currentTarget;
    this.setState({ filter: value });
  };

  handleOnFormSubmit = data => {
    this.setState(prevState => {
      const { name, number } = data;
      return {
        contacts: [
          ...prevState.contacts,
          { name: name, id: uuidv4(), number: number },
        ],
      };
    });
  };

  render() {
    const { contacts, filter } = this.state;

    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm handleOnFormSubmit={this.handleOnFormSubmit} />

        <h2>Contacts</h2>
        <Filter
          contacts={contacts}
          filter={filter}
          handleFilterChange={this.handleFilterChange}
        />
        <ContactList contacts={this.getFilteredContacts()} />
      </div>
    );
  }
}

export default App;
