import { ErrorMessage, Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import Notiflix from 'notiflix';

import { AddContactsSchema } from 'helpers/schemas/Schemas';

import { addContact } from '../../redux/contacts/operations';
import { selectContacts } from '../../redux/contacts/selectors';

import {
  FormBtn,
  Input,
  InputLabel,
  InputWrap,
} from 'components/Forms/GeneralForm.styled';
import { Box, ContactFormWrap, ContactsTitle } from './ContactForm.styled';

export const ContactForm = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(selectContacts);

  const initialValues = {
    name: '',
    email: '',
    number: '',
  };

  const onHandleSubmit = ({ name, number, email }) => {
    const sameName = contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (sameName) {
      Notiflix.Notify.info(`${name} is already in contacts`);
      return;
    }

    dispatch(addContact({ name, number, email }));

    Notiflix.Notify.info(`
    The contact ${name} has been successfully added!`);
  };

  return (
    <Box>
      <ContactsTitle>Add new contact</ContactsTitle>

      <Formik
        initialValues={initialValues}
        onSubmit={onHandleSubmit}
        validationSchema={AddContactsSchema}
      >
        <ContactFormWrap>
          <InputWrap>
            <InputLabel htmlFor="contact-name">Name</InputLabel>
            <Input
              id="contact-name"
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              placeholder="Alice"
            />

            <ErrorMessage name="name" component="div" />
          </InputWrap>

          <InputWrap>
            <InputLabel htmlFor="contact-phone">Phone</InputLabel>
            <Input
              id="contact-phone"
              type="tel"
              name="number"
              placeholder="+380"
              pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
            />
            <ErrorMessage name="number" component="div" />
          </InputWrap>

          <InputWrap>
            <InputLabel htmlFor="contact-email">Email</InputLabel>
            <Input
              id="contact-email"
              type="email"
              name="email"
              placeholder="example@mail.com"
            />
            <ErrorMessage name="email" component="div" />
          </InputWrap>
          <FormBtn type="submit">Add contact</FormBtn>
        </ContactFormWrap>
      </Formik>
    </Box>
  );
};
