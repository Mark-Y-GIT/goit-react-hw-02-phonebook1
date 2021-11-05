import './App.css';
import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  handleInputChange = event => {
    const { value } = event.currentTarget;
    this.setState({ name: value });
    // this.setState({ [name]: [value] });
  };

  handleOnSubmit = event => {
    event.preventDefault();
    this.setState(prevState => {
      return {
        contacts: [
          ...prevState.contacts,
          { name: prevState.name, id: uuidv4() },
        ],
      };
    });
    this.inputReset();
  };

  inputReset = () => this.setState({ name: '' });

  render() {
    // const { contacts, name } = this.state;
    console.log(this.state.contacts);

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
          <button type="submit">Add contact</button>
        </form>
        <ul>
          {this.state.contacts.map(contact => (
            <li id={contact.id} key={contact.id}>
              {contact.name}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;

//
