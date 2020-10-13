import styled from 'styled-components';

import { navbarColor } from '../../config/Colors';

export const Navbar = styled.nav`
  background: ${navbarColor};
  text-align: center;
  font-size: 1.5rem;
  padding: 2rem;
  h1 {
    color: #fff;
    margin-top: 2.5rem;
  }
`;
