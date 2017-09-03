import { LOADING_MY_PLAYLISTS, RECEIVED_MY_PLAYLISTS } from '../actions/GetMe';
import { LOADING_PLAYLIST, RECEIVED_PLAYLIST } from '../actions/SelectPlaylist';
import { RECEIVED_SEARCH } from '../actions/SearchPlaylists';

const initialState = {
  loading: true,
  selectedA: null,
  selectedB: null,
  userPlaylists: [],
  visiblePlaylists: [],
  searchQuery: '',
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
        visiblePlaylists: action.data,
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
    case RECEIVED_SEARCH:
      return {
        ...state,
        visiblePlaylists: action.data,
        searchQuery: action.query,
      };
    default:
      return state;
  }
};
