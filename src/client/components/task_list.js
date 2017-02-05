import React, { PropTypes } from 'react';
import Task from './task';

const TaskList = ({ actions, tasks, todo }) =>
  <div>
    {
        tasks.filter(task => task.listId === todo.id).map(task =>
          <Task actions={actions} key={task.id} task={task} />)
    }
  </div>
;

TaskList.propTypes = {
  actions: PropTypes.object.isRequired,
  tasks: PropTypes.array.isRequired,
  todo: PropTypes.object.isRequired,
};

export default TaskList;
