import { LOADING_RESULT, RECEIVED_RESULT } from '../actions/GenerateResult';

const initialState = {
  hasResult: false,
  result: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOADING_RESULT:
      return {
        ...state,
        hasResult: false,
        result: [],
      };
    case RECEIVED_RESULT:
      return {
        ...state,
        hasResult: true,
        result: action.result,
      };
    default:
      return state;
  }
};
