import { Component } from 'react';
import { Contacts } from './Contacts/Contacts';
import { Filter } from './Filter/Filter';
import { PhoneBook } from './PhoneBook/PhoneBook';
import { StyledTitle } from './PhoneBook/PhoneBook.styled';

// export class App extends Component {
  // state = {
  //   contacts: [],
  //   filter: '',
  // };

  // addName = newName => {
  //   const findContact = this.state.contacts.find(
  //     item => item.name === newName.name
  //   );

  //   if (findContact) {
  //     return alert(`${newName.name} is already added`);
  //   } else {
  //     this.setState({ contacts: [...this.state.contacts, newName] });
  //   }
  // };

  // changeFilter = newValue => {
  //   this.setState({
  //     filter: newValue,
  //   });
  // };

  // handleDelete = contactId => {
  //   this.setState(prevState => {
  //     return {
  //       contacts: prevState.contacts.filter(
  //         contact => contact.id !== contactId
  //       ),
  //     };
  //   });
  // };

  // resetContacts =() => {
  //   this.setState({contacts: []})
  // }

  componentDidMount() {
    const storedContacts = localStorage.getItem('phone-contacts');
  
    if(storedContacts !== null) {
      this.setState({contacts: JSON.parse(storedContacts)})
    }
  }

  // componentDidUpdate(prevProps, prevState) {
  //   if (this.state.contacts !== prevState.contacts) {
  
  //     localStorage.setItem(
  //       'phone-contacts',
  //       JSON.stringify(this.state.contacts)
  //     );
  //   }
  // }

  // render() {
  //   const { contacts, filter } = this.state;

  //   const visibleNames = contacts.filter(contact =>
  //     contact.name.toLowerCase().includes(filter.toLocaleLowerCase())
  //   );

//     return (
//       <>
//         <StyledTitle>Phonebook</StyledTitle>
//         <PhoneBook onAdd={this.addName} onReset={this.resetContacts}/>
//         <StyledTitle>Contacts</StyledTitle>
//         <Filter filter={filter} onChangeFilter={this.changeFilter} />
//         <Contacts array={visibleNames} onDelete={this.handleDelete} />
//       </>
//     );
//   }
// }
