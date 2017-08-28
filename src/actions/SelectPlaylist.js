import { connection } from '../tools';

export const LOADING_PLAYLIST = 'LOADING_PLAYLIST';
export const RECEIVED_PLAYLIST = 'RECEIVED_PLAYLIST';

const selectPlaylist = (url, bay) => {
  return dispatch => {
    dispatch({
      type: LOADING_PLAYLIST,
      bay,
    });

    connection.getPlaylist(url).then(response => {
      dispatch({
        type: RECEIVED_PLAYLIST,
        data: response,
        bay,
      });
    });
  }
};

export default selectPlaylist;
