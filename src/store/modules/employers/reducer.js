import * as types from '../types';

const INITIAL_STATE = {
  employers: [],
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.ADD_EMPLOYER_SUCCESS: {
      const newState = { ...state };
      newState.employers = action.payload;
      return newState;
    }
    case types.DELETE_EMPLOYER_SUCCESS: {
      const newState = { ...state };
      newState.employers = action.payload;
      return newState;
    }
    case types.EDIT_EMPLOYER_SUCCESS: {
      const newState = { ...state };
      newState.employers = action.payload;
      return newState;
    }
    default:
      return state;
  }
};

export default reducer;
