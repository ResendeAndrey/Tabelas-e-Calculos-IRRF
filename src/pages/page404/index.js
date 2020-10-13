import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from '../../styles/GlobalStyle';

const page404 = () => {
  return (
    <Container>
      <h1>Página não encontrada</h1>
      <Link to="/"> Clique aqui para retornar</Link>
    </Container>
  );
};

export default page404;
