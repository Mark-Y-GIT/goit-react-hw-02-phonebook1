import './App.css';
import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
// import ContactForm from './components/ContactForm';
// import ContactList from './components/ContactList';

class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  handleInputChange = event => {
    // console.log(event.currentTarget.name);
    // console.log(event.currentTarget.value);
    const { name, value } = event.currentTarget;
    this.setState({ name: value });
    // this.setState({ [name]: [value] });

    // console.log(event.currentTarget.value);
  };

  handleOnSubmit = event => {
    event.preventDefault();
    this.setState(prevState => {
      this.cleanInput();
      return { contacts: [...prevState.contacts, { name: prevState.name }] };
    });
  };

  cleanInput = () => this.setState({ name: '' });

  render() {
    // const { contacts, name } = this.state;

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
          <button type="submit">Add contact</button>
        </form>
        <ul>
          {this.state.contacts.map(contact => (
            <li id={uuidv4()}>{contact.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;

// type="text"
// value={this.state.name}
// onChange={this.handleInputChange}
// />

// <div>
//         <h1>Phonebook</h1>
//         <form>
//           <label>
//             Name
//             <input
//               name="name"
//               value={this.state.name}
//               onChange={this.handleInputChange}
//             ></input>
//           </label>

//           <label>
//             Number
//             <input
//               name="number"
//               value={this.state.number}
//               onChange={this.handleInputChange}
//             ></input>
//           </label>
//         </form>
//       </div>
