import React, { PropTypes } from 'react';
import styled from 'styled-components';
import { Button } from 'antd';
import TaskList from './task_list';
import AddTask from './add_task';

export const Area = styled.li`
  background: white;
  list-style: none;
  border: solid black;
  width: 400px;
  padding: 1em;
  margin: 1em 1em 0 0;
`;

export const WrapTitle = styled.section`
  background: grey;
  text-align: center;
  padding: 0.5em;
  text-transform: uppercase;
  margin-bottom: 0.5em;
`;

export const TitleTodo = ({ name }) =>
  <WrapTitle>
    <h3>{name}</h3>
  </WrapTitle>
  ;

TitleTodo.propTypes = {
  name: PropTypes.string.isRequired,
};

const Todo = ({ actions, tasks, todo }) => {
  const handleClick = () => {
    actions.deleteTodo(todo.id);
  };
  return (
    <Area>
      <TitleTodo name={todo.label} />
      <Button style={{ width: '100%' }} onClick={handleClick}>Delete Todo</Button>
      <AddTask onAddTask={actions.addTask} todoId={todo.id} />
      <TaskList actions={actions} tasks={tasks} todo={todo} />
    </Area>
  );
};

Todo.propTypes = {
  actions: PropTypes.object.isRequired,
  tasks: PropTypes.array.isRequired,
  todo: PropTypes.object.isRequired,
};

export default Todo;
