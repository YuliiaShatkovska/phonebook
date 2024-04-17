import { useEffect } from 'react';
import { createPortal } from 'react-dom';

import { EditContactForm } from 'components/EditContactForm/EditContactForm';

import { Backdrop, ModalWrap } from './Modal.styled';

export const Modal = ({ onClose, contact }) => {
  const backdropClose = e => {
    e.currentTarget === e.target && onClose();
  };

  const escClose = e => {
    e.code === 'Escape' && onClose();
  };

  useEffect(() => {
    document.addEventListener('keydown', escClose);
    return () => document.removeEventListener('keydown', escClose);
  });

  return createPortal(
    <Backdrop onClick={backdropClose}>
      <ModalWrap>
        <EditContactForm contact={contact} onClose={onClose} />
      </ModalWrap>
    </Backdrop>,
    document.querySelector('#modal-root')
  );
};
