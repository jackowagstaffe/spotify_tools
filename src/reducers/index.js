import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import user from './user';
import playlists from './playlists';

export default combineReducers({
  routing: routerReducer,
  user,
  playlists,
})
