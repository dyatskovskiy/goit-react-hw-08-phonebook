import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations';
import { getContacts } from 'redux/contacts/selectors';
import { Title, Wrapper } from './Contacts.styled';

export default function Contacts() {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <Wrapper>
        <ContactForm />
        {contacts.length > 0 && <Filter />}
      </Wrapper>
      <Title>Contacts:</Title>
      {contacts.length > 0 ? <ContactList /> : <p>There are no contacts</p>}
    </div>
  );
}
