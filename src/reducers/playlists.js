import { LOADING_MY_PLAYLISTS, RECEIVED_MY_PLAYLISTS } from '../actions/GetMe';
import { LOADING_PLAYLIST, RECEIVED_PLAYLIST } from '../actions/SelectPlaylist';

const initialState = {
  loading: true,
  selectedA: null,
  selectedB: null,
  userPlaylists: [],
};

export default (state = initialState, action) => {
  let newState = {
    ...state,
  }

  switch (action.type) {
    case LOADING_MY_PLAYLISTS:
      return {
        ...state,
        loading: true,
        userPlaylists: [],
      };
    case RECEIVED_MY_PLAYLISTS:
      return {
        ...state,
        loading: false,
        userPlaylists: action.data,
      };
    case LOADING_PLAYLIST:
      newState['selected' + action.bay] = {
        loading: true,
        data: {},
      };

      return newState;
    case RECEIVED_PLAYLIST:
      newState['selected' + action.bay] = {
        loading: false,
        data: action.data,
      };

      return newState;
    default:
      return state;
  }
};
