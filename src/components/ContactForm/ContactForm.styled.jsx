import { Form } from 'formik';
import styled from 'styled-components';

export const ContactPageTitle = styled.h1`
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  margin-bottom: 28px;
  font-weight: 600;

  @media screen and (min-width: 768px) {
    font-size: 24px;
    margin-bottom: 50px;
    gap: 8px;
  }
`;

export const ContactsTitle = styled.h2`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 16px;

  @media screen and (min-width: 768px) {
    font-size: 20px;
    margin-bottom: 20px;
  }

  @media screen and (min-width: 1280px) {
    margin-bottom: 24px;
  }
`;

export const Box = styled.div`
  padding-bottom: 40px;
  border-bottom: 1px solid #757473;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    padding-bottom: 0;
    margin: 0;
    border-bottom: none;
  }
`;

export const ContactFormWrap = styled(Form)`
  display: flex;
  flex-direction: column;
  width: 272px;

  @media screen and (min-width: 375px) {
    width: 328px;
  }

  @media screen and (min-width: 1280px) {
    width: 440px;
  }
`;
