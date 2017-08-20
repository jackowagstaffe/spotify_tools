import { LOADING_ME, RECEIVED_ME } from '../actions/GetMe';

const initialState = {
  loading: true,
  data: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOADING_ME:
      return {
        ...state,
        loading: true,
        data: {},
      };
    case RECEIVED_ME:
      return {
        ...state,
        loading: false,
        data: action.data,
      };
    default:
      return state;
  }
};
