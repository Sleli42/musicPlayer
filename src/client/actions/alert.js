export const ADD_ALERT = 'alert/addAlert';

export const addAlert = (error, id) => ({
  type: ADD_ALERT,
  payload: { error, id },
});

export default {
  addAlert,
};
