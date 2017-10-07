import store from '../store';
import { connection } from '../tools';
import createNotification from './CreateNotification';

export const CREATING_PLAYLIST = 'CREATING_PLAYLIST';
export const CREATED_PLAYLIST = 'CREATED_PLAYLIST';

const createPlaylist = (name) => {
  return dispatch => {
    dispatch({
      type: CREATING_PLAYLIST,
      name,
    });

    connection.createPlaylist(
      store.getState().user.data.id,
      name,
      store.getState().result.result
    ).then(() => {
      dispatch({
        type: CREATED_PLAYLIST,
        name,
      });
    });
  };
};

export default createPlaylist;
