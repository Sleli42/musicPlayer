import fetchMock from 'fetch-mock';
import should from 'should';
import sinon from 'sinon';
import rootReducer from '../../reducers';
import { configureStore } from './utils';
import { addTask, loadTasks, TASKS_LOADED, TASK_ADDED } from '../tasks';

const { describe, it } = global;

describe('[UT] todo actions', () => {
  const beforeEach = (() => { fetchMock.restore(); });
  it('Should load tasks with fake store', (done) => {
    const data = [{ id: 179, label: 'test' }];
    const url = 'http://rp3.redpelicans.com:4005/api/todo/tasks';
    fetchMock.get(url, data);
    const actions = {
      [TASKS_LOADED]: (getState, action) => {
        const { payload } = action;
        should(payload).deepEqual(data);
        done();
      },
    };
    const store = configureStore(actions);
    store.dispatch(loadTasks());
  });
  beforeEach();
  it('Should load tasks with real store', (done) => {
    const task = { id: 179, label: 'test' };
    const tasks = [task];
    const cb = sinon.spy();
    const url = 'http://rp3.redpelicans.com:4005/api/todo/tasks';
    fetchMock.get(url, tasks);
    const actions = {
      [TASK_ADDED]: cb,
      [TASKS_LOADED]: (getState, action) => {
        const { payload } = action;
        should(cb.calledOnce);
        should(payload).deepEqual(tasks);
        should(getState().tasks[0].id).deepEqual(task.id);
        done();
      },
    };
    const store = configureStore(actions, { reducer: rootReducer });
    store.dispatch(loadTasks());
  });
  beforeEach();
  it('Should add task with fake store', (done) => {
    const data = [{ id: 180, label: 'test' }];
    // console.log('[addTodo]data: ', data);
    const url = 'http://rp3.redpelicans.com:4005/api/todo/tasks';
    fetchMock.post(url, data);
    const actions = {
      [TASK_ADDED]: (getState, action) => {
        const { payload } = action;
        // console.log('[addTodo]payload', payload);
        should(payload).deepEqual(data);
        done();
      },
    };
    const store = configureStore(actions);
    store.dispatch(addTask());
  });
  beforeEach();
  it('Should add task with real store', (done) => {
    const task = { id: 180, label: 'test' };
    const tasks = [task];
    const url = 'http://rp3.redpelicans.com:4005/api/todo/tasks';
    fetchMock.post(url, tasks);
    const actions = {
      [TASK_ADDED]: (getState, action) => {
        const { payload } = action;
        should(payload).deepEqual(tasks);
        should(getState().tasks[0][0].id).deepEqual(task.id);
        done();
      },
    };
    const store = configureStore(actions, { reducer: rootReducer });
    store.dispatch(addTask());
  });
});
