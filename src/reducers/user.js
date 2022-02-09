import { LOGIN_WALLET } from '../actions';

// Esse reducer será responsável por tratar as informações da pessoa usuária
export const USER_STATES = {
  email: '',
};

export const userReducer = (state = USER_STATES, action) => {
  switch (action.type) {
  case LOGIN_WALLET:
    return {
      ...state,
      email: action.payload,
    };
  default:
    return state;
  }
};
