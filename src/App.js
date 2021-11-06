import './App.css';
import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import testData from './data.json';
import { number } from 'prop-types';

class App extends Component {
  state = {
    contacts: [...testData],
    filter: '',
    name: '',
    number: '',
  };

  handleInputChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleOnSubmit = e => {
    e.preventDefault();
    this.setState(prevState => {
      const { name, number } = prevState;
      return {
        contacts: [
          ...prevState.contacts,
          { name: name, id: uuidv4(), number: number },
        ],
      };
    });

    this.inputReset();
  };

  handleFilterChange = e => {
    const { value } = e.currentTarget;
    this.setState({ filter: value });
  };

  inputReset = () => this.setState({ name: '', number: '' });

  render() {
    const { contacts, name, filter, number } = this.state;
    const normalizedFiltr = filter.toLowerCase();
    const filteredList = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFiltr),
    );

    console.log(filteredList);

    return (
      <div>
        <h1>Phonebook</h1>
        <form onSubmit={this.handleOnSubmit}>
          <h2>Name</h2>
          <input
            type="text"
            name="name"
            value={name}
            onChange={this.handleInputChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
          />
          <h2>Number</h2>
          <input
            type="tel"
            name="number"
            value={number}
            onChange={this.handleInputChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
          />

          <br />
          <button type="submit">Add contact</button>
        </form>
        <h2>Filter</h2>
        <input
          type="text"
          name="filter"
          value={filter}
          onChange={this.handleFilterChange}
        />
        <ul>
          {filteredList.map(contact => (
            <li id={contact.id} key={contact.id}>
              <span>{contact.name}</span> {contact.number}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;

//

// contact.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase());

//  <ul>
//    {filter.length
//      ? filteredList.map(contact => (
//          <li id={contact.id} key={contact.id}>
//            <span>{contact.name}</span> {contact.number}
//          </li>
//        ))
//      : contacts.map(contact => (
//          <li id={contact.id} key={contact.id}>
//            <span>{contact.name}</span> {contact.number}
//          </li>
//        ))}
//  </ul>;
