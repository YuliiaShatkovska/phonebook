import styled from 'styled-components';

export const Item = styled.li`
  border: 1px solid #757473;
  border-radius: 8px;
  padding: 8px;
  position: relative;
  /* width: 270px; */

  @media screen and (min-width: 768px) {
    width: unset;
  }
`;

export const ContactName = styled.p`
  font-size: 16px;
  color: #7be8ea;
  margin-bottom: 4px;
`;

export const ContactInfoWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;

  > a {
    opacity: 0.5;

    &:hover,
    &:focus {
      color: #7be8ea;
    }
  }
`;

export const ButtonsWrap = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 8px;
  right: 8px;
`;

export const ContactBtn = styled.button`
  opacity: 0.5;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover,
  &:focus {
    opacity: 1;
    color: #7be8ea;
  }
`;
