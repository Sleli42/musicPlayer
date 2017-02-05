import React, { PropTypes } from 'react';
import styled from 'styled-components';
import Todo from './todo';

export const TodoContainer = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 0;
  margin: 0;
`;

const TodoList = ({ actions, tasks, todos }) =>
  <TodoContainer>
    {
      todos.map(todo =>
        <Todo
          actions={actions}
          tasks={tasks}
          todo={todo}
          key={todo.id}
        />)
    }
  </TodoContainer>
;

TodoList.propTypes = {
  actions: PropTypes.object.isRequired,
  todos: PropTypes.array.isRequired,
  tasks: PropTypes.array.isRequired,
};

export default TodoList;
