import React from 'react';
import chai from 'chai';
import { shallow } from 'enzyme';
import { Button, Input } from 'antd';
import AddTodo, { Wrapper } from '../../add_todo';
import Todo, { Area, TitleTodo } from '../../todo';
import TaskList from '../../task_list';
import AddTask from '../../add_task';
import actions, { addTodo } from '../../../actions';
import state from '../../../mystate';
import store from '../../../store';

const { dispatch } = store;
const { describe, it } = global;
const { expect } = chai;
const tasks = state.tasks;
const todo = state.todos;

describe('[UT] <AddTodo />', () => {
  const path = <AddTodo onAddTodo={addTodo} dispatch={dispatch} />;
  it('should render a  <Wrapper />', () => {
    expect(shallow(path).find(Wrapper)).to.have.length(1);
  });
  it('should render a   <Input />', () => {
    expect(shallow(path).find(Input)).to.have.length(1);
  });
  it('should render a   <Button />', () => {
    expect(shallow(path).find(Button)).to.have.length(1);
  });
});

describe('[UT] <Todo />', () => {
  const path = <Todo actions={actions} tasks={tasks} todo={todo} key={1} />;
  it('should render a  <Area />', () => {
    expect(shallow(path).find(Area)).to.have.length(1);
  });
  it('should render a   <TitleTodo />', () => {
    expect(shallow(path).find(TitleTodo)).to.have.length(1);
  });
  it('should render a   <Button />', () => {
    expect(shallow(path).find(Button)).to.have.length(1);
  });
  it('should render a   <AddTask />', () => {
    expect(shallow(path).find(AddTask)).to.have.length(1);
  });
  it('should render a   <TaskList />', () => {
    expect(shallow(path).find(TaskList)).to.have.length(1);
  });
});

// describe('[UT] <TodoList />', () => {
//   it('should render a  <TodoContainer />', () => {
//     expect(shallow(<TodoList store={store} actions={actions} />)
//       .find(TodoContainer)).to.equal.length(1);
//   });
//   it('should render a   <Todo />', () => {
//     expect(shallow(<TodoList store={store} actions={actions} />)
//       .find(Todo)).to.have.length(1);
//   });
// });
