import { CONNECT_API_SUCESS, SET_STATE } from '../actions';

// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
export const WALLET_STATES = {
  currencies: [],
  expenses: [],
};

export const walletReducer = (state = WALLET_STATES, action) => {
  switch (action.type) {
  case CONNECT_API_SUCESS:
    return { ...state,
      currencies: action.payload.dollar,
    };
  case SET_STATE:
    return { ...state,
      expenses: [...state.expenses, {
        id: state.expenses.length, ...action.state, exchangeRates: action.coins }],
    };
  default:
    return state;
  }
};
