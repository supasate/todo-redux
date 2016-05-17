import { expect } from '../test_helper';
import { reducer as todoReducer } from '../../src/reducers/todos';
import * as types from '../../src/actions/types';

describe('Todo Reducer', () => {
  it('should return correct initial state', () => {
    const expectedState = [];
    expect(todoReducer(undefined, {})).to.deep.equal(expectedState);
  });

  it('should add new todo when receiving ADD_TODO action', () => {
    const curState = [
        { id: 1, text: 'Buy Coffee', status: 'completed' },
        { id: 2, text: 'Jogging', status: 'incompleted' },
    ];

    const action = {
      type: types.ADD_TODO,
      id: 3,
      payload: 'Read Book'
    };

    const expectedState = [
        { id: 1, text: 'Buy Coffee', status: 'completed' },
        { id: 2, text: 'Jogging', status: 'incompleted' },
        { id: 3, text: 'Read Book', status: 'incompleted' },
    ];
    expect(todoReducer(curState, action)).to.deep.equal(expectedState);
  });

  it('should update old msg to new msg when receiving UPDATE_TODO action', () => {
    const curState = [
        { id: 1, text: 'Jogging', status: 'incompleted' },
        { id: 2, text: 'Buy Coffee', status: 'completed' }
      ];

    const action = {
      type: types.UPDATE_TODO,
      id: 2,
      payload: 'Drink Coffee'
    };

    const expectedState = [
        { id: 1, text: 'Jogging', status: 'incompleted' },
        { id: 2, text: 'Drink Coffee', status: 'completed' }
    ];

    expect(todoReducer(curState, action)).to.deep.equal(expectedState);
  });
});
