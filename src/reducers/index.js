import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import user from './user';
import playlists from './playlists';
import result from './result';
import tab from './tab';

export default combineReducers({
  routing: routerReducer,
  user,
  playlists,
  result,
  tab,
})
