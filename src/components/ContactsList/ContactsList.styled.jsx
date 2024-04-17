import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 272px;

  @media screen and (min-width: 375px) {
    width: 328px;
  }

  @media screen and (min-width: 768px) {
    width: unset;
  }
`;

export const ListWrap = styled.div`
  padding-top: 30px;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    padding-top: 0;
    margin: 0;
    width: 100%;
  }
`;
