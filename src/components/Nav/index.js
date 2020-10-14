import React from 'react';

import { FaDotCircle } from 'react-icons/fa';
import { Navbar } from './styles';

const Nav = () => {
  return (
    <Navbar>
      <FaDotCircle className="icon" size={36} color="#fff" />
      <h1>Registrar Funcionário - Tabelas e cálculos do IRRF</h1>
    </Navbar>
  );
};

export default Nav;
