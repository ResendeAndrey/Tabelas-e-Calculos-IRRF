import styled from 'styled-components';
import { tableColor, tableHead, navbarColor } from '../../config/Colors';

export const Table = styled.div`
  table {
    border-collapse: collapse;
    width: 100%;
    margin: 2rem 0 auto auto;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
  table td span {
    cursor: pointer;
  }
  th {
    background: ${tableHead};
  }
  td,
  th {
    border: 1px solid ${tableColor};
    padding: 1rem;
  }
  @media only screen and (max-width: 1100px) {
    table {
      overflow-x: auto;
      display: block;
      width: fit-content;
      max-width: 100%;
    }
  }
`;

export const Newemployer = styled.div`
  form .form-body {
    align-items: center;
    flex-wrap: wrap;
    display: flex;
  }

  label {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 1rem;
    margin: 0 auto;
    width: 100%;
    font-weight: 600;
  }
  label input {
    padding: 1rem;
    width: 100%;
    border: 1px solid ${tableColor};
    border-radius: 4px;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.1);
  }
  label input:focus {
    border: 1px solid ${navbarColor};
  }
  .form-button {
    margin: 1.5rem auto;
  }
  button {
    border: none;
    padding: 1.2rem 3rem;
    cursor: pointer;
    font-size: 1.1rem;
    font-weight: 700;
    background: ${navbarColor};
    color: #fff;
  }
  label:first-child {
    width: 100%;
  }
  button {
    display: flex;
  }
  @media only screen and (min-width: 680px) {
    label {
      width: 50%;
      justify-content: flex-start;
    }
  }
`;
