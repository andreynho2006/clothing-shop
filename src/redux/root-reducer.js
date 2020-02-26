import { combineReducers } from 'react-redux';
import userReducer from './user/user.reducer';

const rootReducer = combineReducers({
  user: userReducer
});
