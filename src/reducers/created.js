import { CREATING_PLAYLIST, CREATED_PLAYLIST } from '../actions/CreatePlaylist';

const initialState = {
  created: false,
  name: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CREATING_PLAYLIST:
      return {
        ...state,
        created: false,
        name: action.name,
      };
    case CREATED_PLAYLIST:
      return {
        ...state,
        created: true,
        name: action.name,
      };
    default:
      return state;
  }
};
