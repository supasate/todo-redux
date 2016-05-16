import { expect } from '../../test_helper';
import { reducer as todoReducer } from '../../../src/redux/reducers/todos';
import * as types from '../../../src/redux/actions/types';

describe('Todo Reducer', () => {
  it('should return correct initial state', () => {
    const expectedState = { todo: '', todos: [] }
    expect(todoReducer(undefined, {})).to.deep.equal(expectedState);
  });

  it('should add new todo when receiving ADD_TODO action', () => {
    const curState = {
      todos: [
        { text: 'Buy Coffee', status: 'completed' },
        { text: 'Jogging', status: 'incompleted' },
      ],
    };

    const action = {
      type: types.ADD_TODO,
      payload: 'Read Book'
    };

    const expectedState = {
      todos: [
        { text: 'Buy Coffee', status: 'completed' },
        { text: 'Jogging', status: 'incompleted' },
        { text: 'Read Book', status: 'incompleted' },
      ],
    };
    expect(todoReducer(curState, action)).to.deep.equal(expectedState);
  });

  it('should update old msg to new msg when receiving UPDATE_TODO action', () => {
    const curState = {
      todos: [
        { text: 'Jogging', status: 'incompleted' },
        { text: 'Buy Coffee', status: 'completed' }
      ]
    };

    const action = {
      type: types.UPDATE_TODO,
      payload: {
        oldMsg: 'Buy Coffee',
        newMsg: 'Drink Coffee'
      }
    };

    const expectedState = {
      todos: [
        { text: 'Jogging', status: 'incompleted' },
        { text: 'Drink Coffee', status: 'completed' }
      ]
    };

    expect(todoReducer(curState, action)).to.deep.equal(expectedState);
  });
});
