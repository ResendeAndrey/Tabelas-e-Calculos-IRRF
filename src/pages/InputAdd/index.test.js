import { shallow } from 'enzyme'
import React from 'react'

import InputAdd from './index'

const sut = shallow(<InputAdd />)

describe('InputAdd component', () => {
  afterEach(() => jest.clearAllMocks())
  it('should return a text Adicionar um novo funcionário and nothave properties', () => {
    expect(sut.find('h2').text()).toEqual('Adicionar um novo funcionário')
    expect(sut.find('h2').props()).not.toHaveProperty('')
  });
  it('should form has property onSubmit ', () => {
    expect(sut.find('form').props()).toHaveProperty('onSubmit')
  });
  it('should div has className form-body', () => {
    expect(sut.find('div:first-child').hasClass('form-body')).toEqual(true)
  });
  it('should input has properties, length can`t be 0', () => {
    expect(sut.find('input').map(res=>res.props())).not.toHaveLength(0)
  });
});
describe('Label properties', () => {
  it('should label return value Nome', () => {
    expect(sut.find('label').map(res=>res.text())).toContain('Nome')
  });
  it('should label return value CPF', () => {
    expect(sut.find('label').map(res=>res.text())).toContain('CPF')
  });
  it('should label return value Salario', () => {
    expect(sut.find('label').map(res=>res.text())).toContain('Salario')
  });
  it('should label return value Desconto', () => {
    expect(sut.find('label').map(res=>res.text())).toContain('Desconto')
  });
  it('should label return value Dependentes', () => {
    expect(sut.find('label').map(res=>res.text())).toContain('Dependentes')
  });
});
describe('Button', () => {
  it('should button has a className called form-button ', () => {
    expect(sut.find('button').hasClass('form-button')).toEqual(true)
  });
  it('should button return a property type', () => {
    expect(sut.find('button').props()).toHaveProperty('type')
  });
});