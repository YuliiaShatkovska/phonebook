import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderBox = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;

  @media screen and (min-width: 768px) {
    padding-left: 20px;
    padding-right: 20px;
  }

  @media screen and (min-width: 1280px) {
    padding-left: 40px;
    padding-right: 40px;
  }
`;

export const LinksBox = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const HeaderLink = styled(NavLink)`
  @media screen and (min-width: 768px) {
    font-size: 16px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 20px;
  }

  &:hover,
  &:focus {
    color: #7be8ea;
    outline: none;
  }
`;
