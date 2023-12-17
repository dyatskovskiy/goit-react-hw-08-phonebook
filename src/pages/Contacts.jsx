import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations';
import { getContacts } from 'redux/contacts/selectors';

export default function Contacts() {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  });

  return (
    <div>
      <ContactForm />
      {contacts.length > 0 ? <ContactList /> : <p>There are no contacts</p>}
    </div>
  );
}
