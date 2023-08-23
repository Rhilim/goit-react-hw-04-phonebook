import { useState } from 'react';
import { Contacts } from './Contacts/Contacts';
import { Filter } from './Filter/Filter';
import { PhoneBook } from './PhoneBook/PhoneBook';
import { StyledTitle } from './PhoneBook/PhoneBook.styled';
import { Wrapper } from './Wrapper';

export const App = () => {
 const [contacts, setContacts] = useState([])
 const [filter, setFilter] = useState('')

 const addName = newName => {
  const findContact = contacts.find(
    item => item.name === newName.name
  );

  if (findContact) {
    return alert(`${newName.name} is already added`);
  } else {
    setContacts([...contacts, newName] );
  }
};

const changeFilter = newValue => {
  setFilter(newValue)};

  const handleDelete = contactId => {
    setContacts(prevState => {
          prevState.contacts.filter(
          contact => contact.id !== contactId
        )
    });
  };

  const resetContacts =() => {
    setContacts([])
  }

  // const componentDidMount = () => {
  //   const storedContacts = localStorage.getItem('phone-contacts');
  
  //   if(storedContacts !== null) {
  //     setContacts(JSON.parse(storedContacts))
  //   }
  // }

 const visibleNames = contacts.filter(contact =>
  contact.name.toLowerCase().includes(filter.toLocaleLowerCase())
);

    return (
    <Wrapper>
        <StyledTitle>Phonebook</StyledTitle>
        <PhoneBook onAdd={addName} onReset={resetContacts}/>
        <StyledTitle>Contacts</StyledTitle>
        <Filter filter={filter} onChangeFilter={changeFilter} />
        <Contacts array={visibleNames} onDelete={handleDelete} />
      </Wrapper>
)};

