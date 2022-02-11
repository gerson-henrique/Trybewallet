import getCorrency from '../services/awesomeapi';

// Coloque aqui suas actions
export const CONNECT_API_SUCESS = 'CONNECT_API_SUCESS';
export const CONNECT_API_ERROR = 'CONNECT_API_ERROR';
export const LOGIN_WALLET = 'LOGIN_WALLET';
export const SAVE_EXPENSES = 'SAVE_EXPENSES';
export const SET_STATE = 'SET_STATE';
export const F_LOAD = 'F_LOAD';
export const ERROR = 'error';

export const connectAPISucess = (payload) => ({
  payload,
  type: CONNECT_API_SUCESS,
});

export const coinsValues = (state, coins) => ({
  state,
  coins,
  type: SET_STATE,
});

export const connectAPIError = (error) => ({
  error,
  type: CONNECT_API_ERROR,
});

export const loginWallet = (payload) => ({
  payload,
  type: LOGIN_WALLET,
});

export const saveExpenses = (expenses) => ({
  expenses,
  type: SAVE_EXPENSES,
});

export const fLoad = () => ({
  type: F_LOAD,
});

export const getError = () => ({
  type: ERROR,
});

export function requestAwesomeThunk() {
  return (dispatch) => {
    getCorrency().then((response) => {
      const corrency = {
        dollar: response,
      };
      dispatch(connectAPISucess(corrency));
    });
  };
}

export const requestCoinValues = (state) => async (dispatch) => {
  dispatch(fLoad());
  try {
    const api = await getCorrency();
    dispatch(coinsValues(state, api));
  } catch (error) {
    dispatch(getError());
  }
};
