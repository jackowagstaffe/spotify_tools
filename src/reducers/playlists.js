import { LOADING_MY_PLAYLISTS, RECEIVED_MY_PLAYLISTS } from '../actions/GetMe';

const initialState = {
  loading: true,
  selected1: null,
  selected2: null,
  userPlaylists: [],
};

export default (state = initialState, action) => {
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
    default:
      return state;
  }
};
