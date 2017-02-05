import React from 'react';
import chai from 'chai';
import { shallow } from 'enzyme';
import { Button, Input } from 'antd';
import AddTask, { Wrapper } from '../../add_task';
import Task, { SingleTask, TaskName } from '../../task';
import actions, { addTask } from '../../../actions';
import state from '../../../mystate';

const { describe, it } = global;
const { expect } = chai;
const tasks = state.tasks;

describe('[UT] <AddTask />', () => {
  const path = <AddTask onAddTask={addTask} todoId={state.todos.id} />;
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

describe('[UT] <Task />', () => {
  const path = <Task actions={actions} key={tasks.id} task={tasks} />;
  it('should render a  <SingleTask />', () => {
    expect(shallow(path).find(SingleTask)).to.have.length(1);
  });
  it('should render a   <TaskName />', () => {
    expect(shallow(path).find(TaskName)).to.have.length(1);
  });
  it('should render a   <Button />', () => {
    expect(shallow(path).find(Button)).to.have.length.above(0);
  });
  it('should render a   <Button />', () => {
    expect(shallow(path).find(Button)).to.have.length.above(0);
  });
});
