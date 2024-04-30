import { Field, Form } from 'formik';
import styled from 'styled-components';

export const ContentWrap = styled.div`
  position: relative;
  top: 120px;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 30px;
`;

export const FormWrap = styled(Form)`
  display: flex;
  flex-direction: column;
  width: 272px;

  @media screen and (min-width: 375px) {
    width: 328px;
  }

  @media screen and (min-width: 768px) {
    width: 440px;
  }
`;

export const InputWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-bottom: 16px;
  position: relative;

  &:last-child {
    margin-bottom: 0;
  }

  > div {
    position: absolute;
    bottom: -16px;
    left: 4px;
    font-size: 10px;
    color: #a40000;
  }
`;

export const InputLabel = styled.label`
  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`;

export const Input = styled(Field)`
  padding: 10px;
  background-color: transparent;
  border: 1px solid #757473;
  border-radius: 10px;
  color: #c0bfbf;
  opacity: 0.4;

  @media screen and (min-width: 1280px) {
    &:hover,
    &:focus {
      border-color: #7be8ea;
      opacity: 1;
    }
  }
`;

export const FormBtn = styled.button`
  min-width: 100px;
  margin: 0 auto;
  margin-top: 9px;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid #757473;
  font-size: 14px;

  @media screen and (min-width: 1280px) {
    &:hover,
    &:focus {
      border-color: #7be8ea;
      color: #7be8ea;
    }
  }
`;

export const FormTitle = styled.h3`
  font-size: 20px;

  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`;
