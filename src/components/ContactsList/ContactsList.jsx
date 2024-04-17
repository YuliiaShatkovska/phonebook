import { useSelector } from 'react-redux';

import { selectContacts } from '../../redux/contacts/selectors';
import { ContactsItem } from '../ContactsItem/ContactsItem';
import { ContactsTitle } from '../ContactForm/ContactForm.styled';
import { List, ListWrap } from './ContactsList.styled';

export const ContactsList = () => {
  const contacts = useSelector(selectContacts);
  return (
    <ListWrap>
      <ContactsTitle>Contacts</ContactsTitle>
      <List>
        {contacts.map(contact => (
          <ContactsItem key={contact._id} contact={contact} />
        ))}
      </List>
    </ListWrap>
  );
};
