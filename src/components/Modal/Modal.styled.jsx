import { Field } from 'formik';
import styled from 'styled-components';

export const Backdrop = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  pointer-events: auto;
  z-index: 999;
  background-color: rgba(17, 18, 19, 0.4);
`;

export const ModalWrap = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 10px;
  background-color: #6b6b6b;
  padding: 16px;
  width: 256px;

  @media screen and (min-width: 375px) {
    width: 310px;
  }
`;

export const EditModalTitle = styled.h2`
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 16px;
`;

export const EditModalInput = styled(Field)`
  padding: 10px;
  background-color: transparent;
  border: 1px solid #ffffff;
  border-radius: 10px;
  color: #fff;
  opacity: 0.4;

  @media screen and (min-width: 1280px) {
    &:hover,
    &:focus {
      border-color: #7be8ea;
      opacity: 1;
    }
  }
`;

export const EditBtn = styled.button`
  min-width: 100px;
  margin: 0 auto;
  padding: 8px;
  border-radius: 8px;
  border: 1px solid #ffff;
  font-size: 14px;
  opacity: 0.4;
  display: block;

  @media screen and (min-width: 1280px) {
    &:hover,
    &:focus {
      border-color: #7be8ea;
      opacity: 1;
    }
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
`;
