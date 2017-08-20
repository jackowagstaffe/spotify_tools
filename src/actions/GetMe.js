import { connection } from '../tools';

export const LOADING_ME = 'LOADING_ME';
export const RECEIVED_ME = 'RECEIVED_ME';

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
        });
      }
    });
  }
};

export default getMe;
