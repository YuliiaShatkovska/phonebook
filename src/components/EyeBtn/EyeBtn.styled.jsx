import styled from 'styled-components';

export const EyeBtn = styled.button`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;

  bottom: 8px;
  right: 10px;
  opacity: 0.4;

  &:hover,
  &:focus {
    opacity: 1;
  }
`;
