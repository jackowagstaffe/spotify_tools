import { NEW_NOTIFICATION } from '../actions/CreateNotification';
import { CREATED_PLAYLIST } from '../actions/CreatePlaylist';

const initialState = {
  className: 'notification-none',
  message: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CREATED_PLAYLIST:
      return {
        ...state,
        className: 'notification-success',
        message: `The playlist '${action.name}' has been created.`,
      };
    case NEW_NOTIFICATION:
      return {
        ...state,
        className: action.className,
        message: action.message,
      };
    default:
      return state;
  }
};
