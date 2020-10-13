import { put, all, takeLatest } from 'redux-saga/effects';

// Actions

import * as employerActions from './actions';
// Types
import * as types from '../types';

// aqui se fosse um request de alguma api com axios ou fetch
// iria fazer o try catch para saber se teve erro e redirecionar para o action
// correto do reducer

function* employersRequest({ payload }) {
  yield put(employerActions.addEmployerSuccess({ payload }));
}

function* deleteEmployersRequest({ payload }) {
  yield put(employerActions.deleteEmployerSucess({ payload }));
}
function* editEmployersRequest({ payload }) {
  yield put(employerActions.editEmployerSuccess({ payload }));
}

export default all([
  takeLatest(types.ADD_EMPLOYER_REQUEST, employersRequest),
  takeLatest(types.DELETE_EMPLOYER_REQUEST, deleteEmployersRequest),
  takeLatest(types.EDIT_EMPLOYER_REQUEST, editEmployersRequest),
]);
