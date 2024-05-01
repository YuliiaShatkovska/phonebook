import styled from 'styled-components';
import homeImage from 'helpers/abstract-dark-background-with-black-wavy-lines-3d-illustration-background_92242-1486.jpg';

export const HomeWrap = styled.div`
  max-width: 100vw;
  height: 100vh;

  background-color: #303030;
  background-image: linear-gradient(#303030, #454545b2), url(${homeImage});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

export const HomeBox = styled.div`
  padding-top: 100px;
`;

export const HomeTitle = styled.h1`
  font-size: 44px;
  text-align: center;
  letter-spacing: 5px;
  text-shadow: 1px 1px 2px#7be8ea;
  margin-bottom: 80px;

  @media screen and (min-width: 375px) {
    font-size: 48px;
  }

  @media screen and (min-width: 768px) {
    font-size: 60px;
    text-shadow: 2px 2px 2px#7be8ea;
  }

  @media screen and (min-width: 1280px) {
    font-size: 88px;
    letter-spacing: 5px;
    text-shadow: 3px 3px 2px#7be8ea;
  }
`;

export const HomeText = styled.p`
  font-size: 28px;
  line-height: 1.2;
  margin: 0 auto;
  text-align: center;
  width: 220px;

  @media screen and (min-width: 375px) {
    width: 305px;
  }

  @media screen and (min-width: 768px) {
    font-size: 40px;
    width: 500px;
  }
`;
