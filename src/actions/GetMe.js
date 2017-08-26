import { connection } from '../tools';

export const LOADING_ME = 'LOADING_ME';
export const RECEIVED_ME = 'RECEIVED_ME';
export const LOADING_MY_PLAYLISTS = 'LOADING_MY_PLAYLISTS';
export const RECEIVED_MY_PLAYLISTS = 'RECEIVED_MY_PLAYLISTS';

const getMe = () => {
  return dispatch => {
    dispatch({
      type: LOADING_ME,
    });

    connection.getMe().then(response => {
      if (response.status === 200) {
        response.json().then(response => {
          dispatch({
            type: RECEIVED_ME,
            data: response,
          });

          dispatch({
            type: LOADING_MY_PLAYLISTS,
          });
            connection.getPlaylists(response.id).then(response => {
              dispatch({
                type: RECEIVED_MY_PLAYLISTS,
                data: response,
              });
            });
        });
      }
    });
  }
};

export default getMe;
