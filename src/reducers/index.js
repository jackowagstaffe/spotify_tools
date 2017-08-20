import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import auth from './auth';
import user from './user';

export default combineReducers({
  routing: routerReducer,
  auth,
  user,
})
