import React from 'react';

const TableHead = () => {
  return (          
  <thead>
    <tr>
      <th>Nome</th>
      <th>CPF</th>
      <th>Salário</th>
      <th>Desconto</th>
      <th>Dependentes</th>
      <th>Desconto IRRF</th>
      <th>Editar</th>
      <th>Deletar</th>
    </tr>
  </thead>
  );
}

export default TableHead;