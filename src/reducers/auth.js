import { RECEIVED_AUTH } from '../actions/GetAuth';

const initialState = {
  authenticated: false,
  data: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case RECEIVED_AUTH:
      return {
        ...state,
        authenticated: true,
        data: action.data,
      };
    default:
      return state;
  }
};
