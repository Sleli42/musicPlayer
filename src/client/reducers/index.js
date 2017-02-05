import { combineReducers } from 'redux';
import todos from './todos';
import tasks from './tasks';
import currentLoads from './current_loads';
import alert from './alert';

export default combineReducers({
  todos,
  tasks,
  currentLoads,
  alert,
});
