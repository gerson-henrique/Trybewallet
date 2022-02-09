// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
export const WALLET_STATES = {
  currencies: [],
  expenses: [],
};

export const walletReducer = (state = WALLET_STATES, action) => {
  switch (action.type) {
  case WALLET_STATES:
    return { ...state };
  default:
    return state;
  }
};
