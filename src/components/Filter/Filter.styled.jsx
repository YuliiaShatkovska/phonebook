import styled from 'styled-components';

export const FilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 30px;
  width: 272px;

  @media screen and (min-width: 375px) {
    width: 328px;
  }
`;

export const FilterInput = styled.input`
  padding: 10px;
  outline: transparent;
  background-color: transparent;
  border: none;
  border: 1px solid #757473;
  border-radius: 10px;
  color: #c0bfbf;

  @media screen and (min-width: 1280px) {
    &:hover {
      border-color: #7be8ea;
    }
  }
`;
