import {
  TASK_ADDED,
  TASK_DELETED,
  TASKS_LOADED,
} from '../actions/tasks';

const tasksReducer = (state = [], action) => {
  const { payload } = action;
  switch (action.type) {
    case TASK_ADDED:
      return [...state, payload];
    case TASK_DELETED:
      return state.filter(task => task.id !== payload.id);
    case TASKS_LOADED: {
      return [...state, ...payload];
    }
    default: return state;
  }
};

export default tasksReducer;
