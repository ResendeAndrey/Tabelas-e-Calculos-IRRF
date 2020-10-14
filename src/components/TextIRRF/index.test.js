import { shallow } from 'enzyme'
import React from 'react'

import TextIRRF from './index'

const sut = shallow(<TextIRRF />)

describe('Navbar component', () => {
  afterEach(() => jest.clearAllMocks())
  it('should return h2 Tabelas e cálculos do IRRF', () => {
    expect(sut.find('h2').text()).toEqual('Tabelas e cálculos do IRRF')
  });
  it('should return length > than 0 in p', () => {
    expect(sut.find('p').map(res => res.text())).not.toHaveLength(0)
  });
});