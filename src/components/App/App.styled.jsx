import styled from 'styled-components';

export const Container = styled.div`
  padding-left: 16px;
  padding-right: 16px;
  margin: 0 auto;
  height: 100vh;

  @media screen and (min-width: 768px) {
    padding-left: 20px;
    padding-right: 20px;
  }

  @media screen and (min-width: 1280px) {
    padding-left: 40px;
    padding-right: 40px;
  }
`;
