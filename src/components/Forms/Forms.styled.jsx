import { Field, Form } from 'formik';
import styled from 'styled-components';

export const ContentWrap = styled.div`
  position: relative;
  top: 150px;
  display: flex;
  justify-content: center;
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

  &:last-child {
    margin-bottom: 0;
  }
`;

export const Input = styled(Field)`
  padding: 10px;
  background-color: transparent;
  border: 1px solid #757473;
  border-radius: 10px;
  color: #c0bfbf;
  opacity: 0.4;

  &:hover {
    border-color: #7be8ea;
    opacity: 1;
  }
`;
