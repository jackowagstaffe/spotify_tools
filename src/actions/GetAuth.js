import { connection } from '../tools';

export const RECEIVED_AUTH = 'RECEIVED_AUTH';

const getAuth = () => {
  return dispatch => {
    let data = connection.getConnection();
    if (data) {
      dispatch({
        type: RECEIVED_AUTH,
        data,
      });
    }
  }
};

export default getAuth;
