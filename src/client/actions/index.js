import todos from './todos';
import tasks from './tasks';
import currentLoads from './current_loads';
import alert from './alert';

export default {
  ...currentLoads,
  ...todos,
  ...tasks,
  ...alert,
};
