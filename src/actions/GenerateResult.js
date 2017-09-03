import store from '../store';
import arrayTools from '../tools/ArrayObjTools';

export const LOADING_RESULT = 'LOADING_RESULT';
export const RECEIVED_RESULT = 'RECEIVED_RESULT';

const generateResult = (method) => {
  return dispatch => {
    dispatch({
      type: LOADING_RESULT,
    });

    const playlistA = arrayTools.makeUnique(
      store.getState().playlists.selectedA.data.tracks
    );
    const playlistB = arrayTools.makeUnique(
      store.getState().playlists.selectedB.data.tracks
    );

    let result = [];

    switch(method) {
      case 'union':
        result = arrayTools.combine(playlistA, playlistB);
        break;
      case 'intersect':
        result = arrayTools.intersect(playlistA, playlistB);
        break;
      case 'anotb':
        result = arrayTools.valuesNotIn(playlistA, playlistB);
        break;
      case 'bnota':
        result = arrayTools.valuesNotIn(playlistB, playlistA);
        break;
      default:
        break;
    }

    dispatch({
      type: RECEIVED_RESULT,
      result,
    });
  }
};

export default generateResult;
