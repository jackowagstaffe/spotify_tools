export const NEW_NOTIFICATION = 'NEW_NOTIFICATION';

const createNotification = (message, className) => {
  return dispatch => {
    console.log('in here');
    dispatch({
      type: NEW_NOTIFICATION,
      message,
      className,
    });
  };
};

export default createNotification;
