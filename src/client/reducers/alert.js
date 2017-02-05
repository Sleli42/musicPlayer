import {
  ADD_ALERT,
} from '../actions/alert';

const alertReducer = (state = {}, action) => {
  const { payload } = action;
  switch (action.type) {
    case ADD_ALERT:
      return payload;
    default: return state;
  }
};

export default alertReducer;
