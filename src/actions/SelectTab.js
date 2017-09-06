export const SELECTED_TAB = 'SELECTED_TAB';

const selectTab = (tab) => {
  return dispatch => {
    dispatch({
      type: SELECTED_TAB,
      tab,
    });
  }
};

export default selectTab;
