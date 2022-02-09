// Coloque aqui suas actions
export const CONNECT_API_SUCESS = 'CONNECT_API_SUCESS';
export const CONNECT_API_ERROR = 'CONNECT_API_ERROR';
export const LOGIN_WALLET = 'LOGIN_WALLET';

export const connectAPISucess = (payload) => ({
  payload,
  type: CONNECT_API_SUCESS,
});

export const connectAPIError = (error) => ({
  error,
  type: CONNECT_API_ERROR,
});

export const loginWallet = (payload) => ({
  payload,
  type: LOGIN_WALLET,
});
