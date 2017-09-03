import store from '../store';

export const RECEIVED_SEARCH = 'RECEIVED_SEARCH';

const searchPlaylists = (query) => {
  return dispatch => {
    const playlists = store.getState().playlists.userPlaylists;

    if (query === null || query === '') {
      dispatch({
        type: RECEIVED_SEARCH,
        data: playlists,
        query,
      });
      return;
    }

    let result = playlists.filter(playlist => {
      return playlist.name.toLowerCase().indexOf(query.toLowerCase()) >= 0;
    });

    dispatch({
      type: RECEIVED_SEARCH,
      data: result,
      query,
    });
  }
};

export default searchPlaylists;
