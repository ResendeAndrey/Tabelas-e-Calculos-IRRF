import React from 'react';

import {Newemployer} from './styles'

const InputAdd = ({handleSubmitEmployer, setNome, nome, setCpf, cpf, dependentes, setDependentes, desconto, setDesconto, salario, setSalario, isEdit}) =>{
  return (
      <Newemployer>
      <h2>Adicionar um novo funcionário</h2>
      <form onSubmit={handleSubmitEmployer}>
        <div className="form-body">
          <label htmlFor="nome">
            Nome
            <input
              type="text"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              placeholder="Nome"
            />
          </label>
  
          <label htmlFor="cpf">
            CPF
            <input
              type="text"
              value={cpf}
              onChange={(e) => setCpf(e.target.value)}
              placeholder="CPF"
            />
          </label>
          <label htmlFor="salario">
            Salario
            <input
              type="text"
              value={salario}
              onChange={(e) => parseFloat(setSalario(e.target.value))}
              placeholder="Salário Bruto"
            />
          </label>
          <label htmlFor="desconto">
            Desconto
            <input
              type="text"
              value={desconto}
              onChange={(e) => setDesconto(e.target.value)}
              placeholder="Desconto"
            />
          </label>
          <label htmlFor="dependentes">
            Dependentes
            <input
              type="number"
              value={dependentes}
              onChange={(e) => setDependentes(e.target.value)}
              placeholder="Dependentes"
            />
          </label>
        </div>
        <div>
          <button className="form-button" type="submit">
            {isEdit ? 'Salvar' : 'Adicionar'}
          </button>
        </div>
      </form>
    </Newemployer>
    )
}

export default InputAdd;