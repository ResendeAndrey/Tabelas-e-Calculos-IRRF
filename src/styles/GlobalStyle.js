import styled, { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';
import * as colors from '../config/Colors';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
  }
  body {
    font-family: sans-serif;
    font-size: 16px;
    background-color:${colors.backgroundColor};
    color: ${colors.primaryColor};
  }
  html, body, #root {
    height: 100%
  }
`;

export const Container = styled.section`
  width: 90%;
  background: ${colors.containerColor};
  margin: 0.8rem auto;
  padding: 2rem;
  border-radius: 4px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  text-align: center;

  @media only screen and (min-width: 1100px) {
    max-width: 1200px;
    width: 100%;
  }
  a {
    text-decoration: none;
    font-weight: 700;
    color: ${colors.primaryColor};
    cursor: pointer;
  }
  h1 {
    color: ${colors.navbarColor};
  }
`;
