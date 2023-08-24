import { useEffect, useState } from 'react';
import toast, {Toaster} from 'react-hot-toast';
import { Contacts } from './Contacts/Contacts';
import { Filter } from './Filter/Filter';
import { PhoneBook } from './PhoneBook/PhoneBook';
import { StyledTitle } from './PhoneBook/PhoneBook.styled';
import { Wrapper } from './Wrapper';

export const App = () => {
  const [contacts, setContacts] = useState(() => {
    const storedContacts = localStorage.getItem('phone-contacts');
    if (storedContacts !== null) {
      return JSON.parse(storedContacts);
    } 
      return [];
    
  });

  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('phone-contacts', JSON.stringify(contacts));
  }, [contacts]);

  

  const addName = newName => {
    // const notify = () => toast(`${newName.name} is already added`);
    const findContact = contacts.find(item => item.name === newName.name);
    if (findContact) {
      // return alert(`${newName.name} is already added`);
      return toast.error(`${newName.name} is already in the phonebook`, {
        duration: 4000,
        position: 'top-center',})
    } else {
      setContacts([...contacts, newName]);
    }
  };

  const changeFilter = newValue => {
    setFilter(newValue);
  };

  const handleDelete = contactId => {
    setContacts(prevState =>
      prevState.filter(contact => contact.id !== contactId)
    );
  };

  const resetContacts = () => {
    setContacts([]);
  };

  const visibleNames = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLocaleLowerCase())
  );

  return (
    <Wrapper>
      <StyledTitle>Phonebook</StyledTitle>
      <PhoneBook onAdd={addName} onReset={resetContacts} />
      <StyledTitle>Contacts</StyledTitle>
      <Filter filter={filter} onChangeFilter={changeFilter} />
      <Contacts array={visibleNames} onDelete={handleDelete} />
      <Toaster/>
    </Wrapper>
  );
};
