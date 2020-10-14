import styled from 'styled-components';
import { tableColor, tableHead } from '../../config/Colors';

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