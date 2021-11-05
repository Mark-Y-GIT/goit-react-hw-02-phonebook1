import './App.css';
import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  };
  handleInputChange = event => {
    const { name, value } = event.currentTarget;

    this.setState({ [name]: value });
  };

  handleOnSubmit = event => {
    event.preventDefault();
    this.setState(prevState => {
      return {
        contacts: [
          ...prevState.contacts,
          { name: prevState.name, id: uuidv4(), number: prevState.number },
        ],
      };
    });
    this.inputReset();
  };

  inputReset = () => this.setState({ name: '', number: '' });

  render() {
    // const { contacts, name } = this.state;
    // console.log(this.state.contacts);

    return (
      <div>
        <h1>Phonebook</h1>
        <form onSubmit={this.handleOnSubmit}>
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleInputChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
          />
          <br />
          <input
            type="tel"
            name="number"
            value={this.state.number}
            onChange={this.handleInputChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
          />

          <br />
          <button type="submit">Add contact</button>
        </form>
        <ul>
          {this.state.contacts.map(contact => (
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
