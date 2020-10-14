import { shallow } from 'enzyme'
import React from 'react'

import TableHead from './index'

const sut = shallow(<TableHead />)

describe('Navbar component', () => {
  afterEach(() => jest.clearAllMocks())
  it('should return from th Nome ', () => {
    expect(sut.find('th').map(res => res.text())).toContainEqual("Nome")
  });
  it('should return from th CPF ', () => {
    expect(sut.find('th').map(res => res.text())).toContainEqual("CPF")
  });
  it('should return from th Salário ', () => {
    expect(sut.find('th').map(res => res.text())).toContainEqual("Salário")
  });
  it('should return from th Desconto ', () => {
    expect(sut.find('th').map(res => res.text())).toContainEqual("Desconto")
  });
  it('should return from th Dependentes ', () => {
    expect(sut.find('th').map(res => res.text())).toContainEqual("Dependentes")
  });
  it('should return from th Desconto IRRF ', () => {
    expect(sut.find('th').map(res => res.text())).toContainEqual("Desconto IRRF")
  });
  it('should return from th Editar ', () => {
    expect(sut.find('th').map(res => res.text())).toContainEqual("Editar")
  });
  it('should return from th Deletar ', () => {
    expect(sut.find('th').map(res => res.text())).toContainEqual("Deletar")
  });

});