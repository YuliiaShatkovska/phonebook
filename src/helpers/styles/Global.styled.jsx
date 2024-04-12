import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    body {
    background-color: #303030;
    color: #c0bfbf;
    font-family:'Montserrat', sans-serif;
    font-size: 14px;
    line-height: 1.5;
    margin: 0;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p {
    margin: 0;
    }

    button {
    font-family: inherit;
    border: none;
    cursor: pointer;
    background-color: transparent;
    padding: 0;
    color: inherit;
    }

    input {
    font-family: inherit;
    padding: 0;
    border: none;
    outline: none;
    }

    a {
    color: inherit;
    text-decoration: none;
    }

    ul {
    list-style: none;
    padding-left: 0;
    margin: 0;
}

input:-webkit-autofill,
input:-webkit-autofill:focus {
  transition: background-color 0s 600000s, color 0s 600000s !important;
  background-color: transparent !important;
  color: #c0bfbf !important;
  font-size: 14px !important;
}
`;
