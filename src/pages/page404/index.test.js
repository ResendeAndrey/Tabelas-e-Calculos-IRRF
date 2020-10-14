import { shallow } from 'enzyme'
import React from 'react'

import Page404 from './index'

const sut = shallow(<Page404 />)

describe('Página não encontrada', () => {
  afterEach(() => jest.clearAllMocks())
  it('should be return from h1 Página não encontrada ', () => {
    expect(sut.find('h1').text()).toBe('Página não encontrada')
  });
  it('should return from <Link> Clique aqui para retornar', () => {
    expect(sut.find('Link').text()).toBe('Clique aqui para retornar')
  });
});