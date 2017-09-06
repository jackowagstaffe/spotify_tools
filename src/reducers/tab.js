import { SELECTED_TAB } from '../actions/SelectTab';
import { RECEIVED_RESULT } from '../actions/GenerateResult';

const initialState = {
  tab: 0,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SELECTED_TAB:
      return {
        ...state,
        tab: action.tab,
      };
    case RECEIVED_RESULT:
      return {
        ...state,
        tab: 1,
      };
      break;
    default:
      return state;
  }
};
