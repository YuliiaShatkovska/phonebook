import Notiflix from 'notiflix';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

import { CiEdit } from 'react-icons/ci';
import { MdOutlineDelete } from 'react-icons/md';

import { deleteContacts } from '../../redux/contacts/operations';

import { Modal } from 'components/Modal/Modal';

import {
  ButtonsWrap,
  ContactBtn,
  ContactInfoWrap,
  ContactName,
  Item,
} from './ContactsItem.styled';

export const ContactsItem = ({ contact }) => {
  const [showModal, setShowModal] = useState(false);

  const dispatch = useDispatch();

  const deleteContact = ({ _id, name }) => {
    dispatch(deleteContacts(_id));
    Notiflix.Notify.info(`The contact ${name} has been successfully deleted!`);
  };

  const toggleModal = () => {
    setShowModal(prev => !prev);
  };

  return (
    <Item>
      <ContactName>{contact.name}</ContactName>

      <ContactInfoWrap>
        <span>mobile:</span>
        <a href={`tel: ${contact.number}`}>{contact.number}</a>
      </ContactInfoWrap>

      <ContactInfoWrap>
        <span>email:</span>
        <a href={`mailto:${contact.email}`}>{contact.email}</a>
      </ContactInfoWrap>

      <ButtonsWrap>
        <ContactBtn type="button" onClick={toggleModal}>
          <CiEdit size={20} />
        </ContactBtn>

        {showModal && <Modal onClose={toggleModal} contact={contact} />}

        <ContactBtn type="button" onClick={() => deleteContact(contact)}>
          <MdOutlineDelete size={20} />
        </ContactBtn>
      </ButtonsWrap>
    </Item>
  );
};
