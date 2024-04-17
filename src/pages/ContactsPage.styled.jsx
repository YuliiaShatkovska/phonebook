import styled from 'styled-components';

export const ContactsMainWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 60px;
  }

  @media screen and (min-width: 1280px) {
    gap: 100px;
  }
`;

export const TextNoContacts = styled.p`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`;
