import * as types from '../types';

export function addEmployerRequest(payload) {
  return {
    type: types.ADD_EMPLOYER_REQUEST,
    payload,
  };
}
export function addEmployerSuccess(payload) {
  return {
    type: types.ADD_EMPLOYER_SUCCESS,
    payload,
  };
}
export function deleteEmployerRequest(payload) {
  return {
    type: types.DELETE_EMPLOYER_REQUEST,
    payload,
  };
}
export function deleteEmployerSucess(payload) {
  return {
    type: types.DELETE_EMPLOYER_SUCCESS,
    payload,
  };
}
export function editEmployerRequest(payload) {
  return {
    type: types.EDIT_EMPLOYER_REQUEST,
    payload,
  };
}
export function editEmployerSuccess(payload) {
  return {
    type: types.EDIT_EMPLOYER_SUCCESS,
    payload,
  };
}
