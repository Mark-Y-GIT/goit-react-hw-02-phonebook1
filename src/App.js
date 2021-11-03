import './App.css';
import React, { Component } from 'react';
// import ContactForm from './components/ContactForm';
// import ContactList from './components/ContactList';

class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  };

  handleInputChange = event => {
    const { name, value } = event.currentTarget;

    this.setState({ [name]: [value] });
  };

  render() {
    // const { contacts, name } = this.state;

    return (
      <div>
        <h1>Phonebook</h1>
        <form>
          <label>
            Name
            <input
              name="name"
              value={this.state.name}
              onChange={this.handleInputChange}
            ></input>
          </label>

          <label>
            Number
            <input
              name="number"
              value={this.state.number}
              onChange={this.handleInputChange}
            ></input>
          </label>
        </form>
      </div>
    );
  }
}

export default App;

// type="text"
// value={this.state.name}
// onChange={this.handleInputChange}
// />
