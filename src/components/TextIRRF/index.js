import React from 'react';

import { Text } from './styles';

const TextIRRF = () => {
  return (
    <Text>
      <h2>Tableas e cálculos do IRRF</h2>
      <p>
        A tabela do IR é um dos principais instrumentos para auxiliar os
        contribuintes na hora de enviar as informações fiscais para a Receita.
        Afinal, é nesse documento que constam as alíquotas do Imposto de Renda.
      </p>
      <p>
        {' '}
        Isso quer dizer que é essa a fonte para você saber qual é o percentual
        que deve ser aplicado sobre os seus rendimentos. Portanto, na hora de
        fazer o cálculo e declarar seus rendimentos, ter essa tabela é
        fundamental para que você envie nenhum dado errado e, consequentemente,
        não caia na malha fina.
      </p>
    </Text>
  );
};

export default TextIRRF;
