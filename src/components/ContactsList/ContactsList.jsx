import { useSelector } from 'react-redux';

import { selectFiltredContacts } from '../../redux/contacts/selectors';
import { ContactsItem } from '../ContactsItem/ContactsItem';
import { ContactsTitle } from '../ContactForm/ContactForm.styled';
import { List, ListWrap } from './ContactsList.styled';
import { Filter } from 'components/Filter/Filter';

export const ContactsList = () => {
  const contacts = useSelector(selectFiltredContacts);
  return (
    <ListWrap>
      <ContactsTitle>Contacts</ContactsTitle>
      <Filter />
      <List>
        {contacts.length > 0 &&
          contacts.map(contact => (
            <ContactsItem key={contact._id} contact={contact} />
          ))}
      </List>
    </ListWrap>
  );
};
