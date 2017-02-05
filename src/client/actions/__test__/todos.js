import fetchMock from 'fetch-mock';
import should from 'should';
import sinon from 'sinon';
import rootReducer from '../../reducers';
import { configureStore } from './utils';
import { addTodo, deleteTodo, loadTodos, TODOS_LOADED, TODO_ADDED, TODO_DELETED } from '../todos';
import { deleteTask } from '../tasks';

const { describe, it } = global;

describe.only('[UT] todo actions', () => {
  const beforeEach = (() => { fetchMock.restore(); });
  it('Should load todos with fake store', (done) => {
    const data = [{ id: 201, label: 'test' }];
    const url = 'http://rp3.redpelicans.com:4005/api/todo/lists';
    fetchMock.get(url, data);
    const actions = {
      [TODOS_LOADED]: (getState, action) => {
        const { payload } = action;
        should(payload).deepEqual(data);
        done();
      },
    };
    const store = configureStore(actions);
    store.dispatch(loadTodos());
  });
  beforeEach();
  it('Should load todos with real store', (done) => {
    const todo = { id: 201, label: 'test' };
    const todos = [todo];
    const cb = sinon.spy();
    const url = 'http://rp3.redpelicans.com:4005/api/todo/lists';
    fetchMock.get(url, todos);
    const actions = {
      [TODO_ADDED]: cb,
      [TODOS_LOADED]: (getState, action) => {
        const { payload } = action;
        should(cb.calledOnce);
        should(payload).deepEqual(todos);
        should(getState().todos[0].id).deepEqual(todo.id);
        done();
      },
    };
    const store = configureStore(actions, { reducer: rootReducer });
    store.dispatch(loadTodos());
  });
  beforeEach();
  it('Should add todo with fake store', (done) => {
    const data = [{ id: 202, label: 'test' }];
    const url = 'http://rp3.redpelicans.com:4005/api/todo/lists';
    fetchMock.post(url, data);
    const actions = {
      [TODO_ADDED]: (getState, action) => {
        const { payload } = action;
        should(payload).deepEqual(data);
        done();
      },
    };
    const store = configureStore(actions);
    store.dispatch(addTodo());
  });
  beforeEach();
  it('Should add todo with real store', (done) => {
    const todo = { id: 202, label: 'test' };
    const todos = [todo];
    // console.log('todos', todos);
    const url = 'http://rp3.redpelicans.com:4005/api/todo/lists';
    fetchMock.post(url, todos);
    // console.log('todos', todos);
    const actions = {
      [TODO_ADDED]: (getState, action) => {
        const { payload } = action;
        // const { todos } = getState();
        // console.log('todos', todos);
        should(payload).deepEqual(todos);
        should(getState().todos[0][0].id).deepEqual(todo.id);
        done();
      },
    };
    const store = configureStore(actions, { reducer: rootReducer });
    store.dispatch(addTodo());
  });
  // beforeEach();
  // it('Should be delete todo with fake store', (done) => {
  //   const data = [{ id: 202, label: 'test' }];
  //   const id = data[0].id;
  //   const cb = sinon.spy();
  //   const url = `http://rp3.redpelicans.com:4005/api/todo/lists/${id}`;
  //   fetchMock.delete(url, data);
  //   const actions = {
  //     [TODO_DELETED]: (getState, action) => {
  //       const { payload } = action;
  //       console.log('[addTodo]payload', payload);
  //       console.log('[addTodo]action', action);
  //       should(payload).deepEqual(data);
  //       done();
  //     },
  //   };
  //   const store = configureStore(actions);
  //   store.dispatch(deleteTodo(data[0].id));
  // });
});
