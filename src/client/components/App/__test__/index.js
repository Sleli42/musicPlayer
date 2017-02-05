import React from 'react';
import chai from 'chai';
import { shallow } from 'enzyme';
import { App, Wrapper } from '../';
import Header from '../../header';
import AddTodo from '../../add_todo';
import TodoList from '../../todo_list';
import actions from '../../../actions';
import state from '../../../mystate';

const { describe, it } = global;
const { expect } = chai;
const { todos } = state;
// const app = shallow(<App todos={todos} actions={actions} />);

describe('[UT] <App />', () => {
  const path = <App todos={todos} actions={actions} />;
  it('should render a  <Wrapper />', () => {
    expect(shallow(path).find(Wrapper)).to.have.length(1);
  });
  it('should render a   <Header />', () => {
    expect(shallow(path).find(Header)).to.have.length(1);
  });
  it('should render a   <AddTodo />', () => {
    expect(shallow(path).find(AddTodo)).to.have.length(1);
  });
  it('should render a   <TodoList />', () => {
    expect(shallow(path).find(TodoList)).to.have.length(1);
  });
});
