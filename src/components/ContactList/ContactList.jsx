import { Contact } from 'components/Contact/Contact';
import { Filter } from 'components/Filter/Filter';
import { useSelector } from 'react-redux';
import { getVisibleContacts } from 'redux/contacts/selectors';

export const ContactList = () => {
  const filteredContacts = useSelector(getVisibleContacts);
  return (
    <>
      <Filter />
      <ul>
        {filteredContacts.map(item => (
          <Contact
            key={item.id}
            id={item.id}
            name={item.name}
            number={item.number}
          />
        ))}
      </ul>
    </>
  );
};
