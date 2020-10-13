import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
// Icons
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
// Styles
import { Container } from '../../styles/GlobalStyle';
import { Table } from './styles';
// JSON
import data from '../../pessoas.json';
// Components
import TextIRRF from '../../components/TextIRRF';
import TableHead from '../../components/TableHead'
//Page
import InputAdd from '../InputAdd'
// Store
import * as employerActions from '../../store/modules/employers/actions';

const Home = () => {
  const [employers, setEmpolyers] = useState([]);
  const dispatch = useDispatch();
  const [isEdit, setIsEdit] = useState(false);

  const reduxEmployers = useSelector(
    (state) => state.employersReducer.employers.payload
  );

  // input params useState
  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [salario, setSalario] = useState('');
  const [desconto, setDesconto] = useState('');
  const [dependentes, setDependentes] = useState('');

  // Pegando os dados iniciais do pessoas.json caso o Redux esteja vazio
  useEffect(() => {
    const response = data;
    if (!reduxEmployers) {
      setEmpolyers(response);
    } else {
      setEmpolyers(reduxEmployers);
    }
  }, [reduxEmployers]);

  // Função que calcula o desconto IRRF
  function calculateIRRF(salary, discount, dependentQtd) {
    const dependentValue = 164.56;
    const baseIR =
      parseFloat(salary) -
      parseFloat(discount) -
      (parseFloat(dependentValue) * parseFloat(dependentQtd));

    if (salary <= 1903.98) {
      const discountIRRF = (baseIR * 0.00) - 0;
      return discountIRRF;
    }
    if (salary >= 1903.98 && salary <= 2826.65) {
      const discountIRRF = (baseIR * 0.075) - 142.8;
      return discountIRRF
    } 
    else if (salary >= 2826.65 && salary <= 3751.05) {
      const discountIRRF = (baseIR * 0.15) - 354.8;
      return discountIRRF
    }
    else if (salary >= 3751.05 && salary <= 4664.68) {
      const discountIRRF = (baseIR * 0.225) - 636.13;
      return discountIRRF
    }
    else if (salary >= 4664.68) {
      const discountIRRF = (baseIR * 0.27) - 869.36
      return discountIRRF;
    } else
    return 'Erro';
  }
  function handleClickEdit(employer) {
    setIsEdit(true);
    setNome(employer.nome);
    setCpf(employer.cpf.replace(/[^0-9]/g, ''));
    setSalario(employer.salario);
    setDesconto(employer.desconto);
    setDependentes(employer.dependentes);
  }

  function handleClickDelete(index) {
    const newEmployers = [...employers];
    newEmployers.splice(index, 1);
    setEmpolyers(newEmployers);
    dispatch(employerActions.deleteEmployerRequest(newEmployers));
  }
  function handleSubmitEmployer(e) {
    e.preventDefault();
    let formErrors = false;
    let newCPF = '';
    if (cpf) {
      newCPF = cpf
        .match(/.{1,3}/g)
        .join('.')
        .replace(/\.(?=[^.]*$)/, '-');
    }
    if (!isEdit) {
      if(salario.length <= 0 || desconto.length <= 0 || dependentes.length <0) {
        formErrors = true;
        toast.error("Todos os campos precisam ser preenchidos");
      }
      if (nome.length < 3 || nome.length > 255) {
        formErrors = true;
        toast.error('Nome precisa deve ter entre 3 e 255 caracteres');
      }
      if (cpf.length !== 11) {
        formErrors = true;
        toast.error('O CPF precisa ser válido');
      }

      const newEmployers = [...(employers || [])];

      employers.map((res) => {
        if (res.cpf === newCPF) {
          formErrors = true;
          toast.error('CPF já cadastrado');
        }
      });

      if (formErrors) return;

      newEmployers.unshift({
        nome,
        cpf: newCPF,
        salario,
        desconto,
        dependentes,
      });

      setEmpolyers(newEmployers);

      dispatch(employerActions.addEmployerRequest(newEmployers));
    }
    if (isEdit) {
      const newData = employers.map((res) => {
        if (res.cpf === newCPF) {
          const updatedData = {
            ...res,
            nome,
            cpf: newCPF,
            salario,
            desconto,
            dependentes,
          };
          return updatedData;
        }
        return res;
      });
      setEmpolyers(newData);
      dispatch(employerActions.editEmployerRequest(newData));
      setIsEdit(false);
    }
  }

  return (
    <Container>
      <TextIRRF />
      <InputAdd 
      handleSubmitEmployer={handleSubmitEmployer} 
      nome={nome} setNome={setNome} 
      cpf={cpf} setCpf={setCpf} 
      salario={salario} setSalario={setSalario} 
      desconto={desconto} setDesconto={setDesconto} 
      dependentes={dependentes} setDependentes={setDependentes} 
      isEdit={isEdit}/>
      <Table>
        <h2>Seus Funcionários</h2>
        <table>
        <TableHead />
          {employers ? (
            <tbody>
              {employers.map((employer, index) => (
                <tr key={employer.nome}>
                  <td>{employer.nome}</td>
                  <td> {employer.cpf}</td>
                  <td> {employer.salario}</td>
                  <td> {employer.desconto}</td>
                  <td>{employer.dependentes}</td>
                  <td>
                    {calculateIRRF(
                      employer.salario,
                      employer.desconto,
                      employer.dependentes
                    )}
                  </td>
                  <td>
                    <span>
                      <FaEdit
                        size={18}
                        onClick={() => handleClickEdit(employer, index)}
                      />
                    </span>
                  </td>
                  <td>
                    <span>
                      <FaTrashAlt
                        size={18}
                        onClick={() => handleClickDelete(index)}
                      />
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          ) : (
            <tbody />
          )}
        </table>
      </Table>
    </Container>
  );
};

export default Home;
