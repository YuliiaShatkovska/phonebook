import { ErrorMessage, Form, Formik } from 'formik';

import { IoClose } from 'react-icons/io5';

import { EditContactsSchema } from 'helpers/schemas/Schemas';

import { InputWrap } from 'components/Forms/GeneralForm.styled';
import {
  CloseButton,
  EditBtn,
  EditModalInput,
  EditModalTitle,
} from 'components/Modal/Modal.styled';
import { useDispatch } from 'react-redux';
import { updateContacts } from '../../redux/contacts/operations';

export const EditContactForm = ({
  contact: { name, email, number, _id },
  onClose,
}) => {
  const initialValues = {
    name,
    email,
    number,
  };

  const dispatch = useDispatch();

  const onHandleSubmit = editedContact => {
    dispatch(updateContacts({ _id, editedContact }));
  };

  return (
    <div>
      <EditModalTitle>Edit contact</EditModalTitle>

      <Formik
        initialValues={initialValues}
        onSubmit={onHandleSubmit}
        validationSchema={EditContactsSchema}
      >
        <Form>
          <InputWrap>
            <label htmlFor="contact-name">Name</label>
            <EditModalInput
              id="contact-name"
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            />

            <ErrorMessage name="name" component="div" />
          </InputWrap>

          <InputWrap>
            <label htmlFor="contact-phone">Phone</label>
            <EditModalInput
              id="contact-phone"
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
            />

            <ErrorMessage name="number" component="div" />
          </InputWrap>

          <InputWrap>
            <label htmlFor="contact-email">Email</label>
            <EditModalInput id="contact-email" type="email" name="email" />

            <ErrorMessage name="email" component="div" />
          </InputWrap>

          <EditBtn type="submit">Edit contact</EditBtn>

          <CloseButton type="button" onClick={onClose}>
            <IoClose size={24} />
          </CloseButton>
        </Form>
      </Formik>
    </div>
  );
};
