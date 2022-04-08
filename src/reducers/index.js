import { combineReducers } from 'redux';
import { userReducer } from './user';
// import user from './user';
import { walletReducer } from './wallet';
// import wallet from './wallet';


const reducer = combineReducers({
  user: userReducer,
  wallet: walletReducer,
});

export default reducer;
