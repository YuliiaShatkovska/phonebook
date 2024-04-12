import styled from 'styled-components';

export const LogoutButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  gap: 4px;

  @media screen and (min-width: 1280px) {
    font-size: 20px;

    &:hover,
    &:focus {
      color: #7be8ea;
    }
  }
`;

export const UserText = styled.p`
  @media screen and (min-width: 768px) {
    font-size: 16px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 20px;
  }
`;
