import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TiContacts } from 'react-icons/ti';

import { fetchContacts } from '../redux/contacts/operations';
import { selectContacts } from '../redux/contacts/selectors';

import { ContactPageTitle } from 'components/ContactForm/ContactForm.styled';
import { Container, MainContentWrap } from 'components/App/App.styled';
import { ContactForm } from 'components/ContactForm/ContactForm';

import { ContactsList } from 'components/ContactsList/ContactsList';

import { ContactsMainWrap, TextNoContacts } from './ContactsPage.styled';

const ContactsPage = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(selectContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <MainContentWrap>
        <ContactPageTitle>
          Here is your contacts
          <TiContacts size={24} />
        </ContactPageTitle>

        <ContactsMainWrap>
          <ContactForm />
          {contacts && contacts.length > 0 ? (
            <ContactsList />
          ) : (
            <TextNoContacts>No contacts added yet</TextNoContacts>
          )}
        </ContactsMainWrap>
      </MainContentWrap>
    </Container>
  );
};

export default ContactsPage;
