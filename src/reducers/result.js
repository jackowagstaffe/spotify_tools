import { LOADING_RESULT, RECEIVED_RESULT } from '../actions/GenerateResult';

const initialState = {
  loading: null,
  result: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOADING_RESULT:
      return {
        ...state,
        loading: true,
        result: [],
      };
    case RECEIVED_RESULT:
      return {
        ...state,
        loading: false,
        result: action.result,
      };
    default:
      return state;
  }
};
