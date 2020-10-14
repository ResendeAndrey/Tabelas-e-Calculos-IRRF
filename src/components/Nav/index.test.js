import { shallow } from 'enzyme'
import React from 'react'

import Nav from './index'

const sut = shallow(<Nav />)

describe('Navbar component', () => {
  afterEach(() => jest.clearAllMocks())
  it('should return from h1 Registrar Funcionário - Tabelas e cálculos do IRRF ', () => {
    expect(sut.find('h1').text()).toEqual('Registrar Funcionário - Tabelas e cálculos do IRRF')
  });
});