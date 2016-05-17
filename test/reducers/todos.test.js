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
        { id: 2, text: 'Jogging', status: 'incomplete' },
    ];

    const action = {
      type: types.ADD_TODO,
      id: 3,
      payload: 'Read Book'
    };

    const expectedState = [
        { id: 1, text: 'Buy Coffee', status: 'completed' },
        { id: 2, text: 'Jogging', status: 'incomplete' },
        { id: 3, text: 'Read Book', status: 'incomplete' },
    ];
    expect(todoReducer(curState, action)).to.deep.equal(expectedState);
  });

  it('should update old msg to new msg when receiving UPDATE_TODO action', () => {
    const curState = [
        { id: 1, text: 'Jogging', status: 'incomplete' },
        { id: 2, text: 'Buy Coffee', status: 'completed' }
      ];

    const action = {
      type: types.UPDATE_TODO,
      id: 2,
      payload: 'Drink Coffee'
    };

    const expectedState = [
        { id: 1, text: 'Jogging', status: 'incomplete' },
        { id: 2, text: 'Drink Coffee', status: 'completed' }
    ];

    expect(todoReducer(curState, action)).to.deep.equal(expectedState);
  });

  it('should delete a todo with given id', () => {
    const curState = [
      { id: 1, text: 'Joggin', status: 'incomplete' },
      { id: 2, text: 'Drink Coffee', status: 'completed' },
      { id: 3, text: 'Watch Movie', status: 'incomplete' }
    ];

    const action = {
      type: types.DELETE_TODO,
      id: 2
    };

    const expectedState = [
      { id: 1, text: 'Joggin', status: 'incomplete' },
      { id: 3, text: 'Watch Movie', status: 'incomplete' }
    ];

    expect(todoReducer(curState, action)).to.deep.equal(expectedState);
  });

  it('should toggle a todo status with given id', () => {
    const curState = [
      { id: 1, text: 'Joggin', status: 'incomplete' },
      { id: 2, text: 'Drink Coffee', status: 'completed' },
      { id: 3, text: 'Watch Movie', status: 'incomplete' }
    ];

    const action = {
      type: types.TOGGLE_TODO,
      id: 1
    };

    const expectedState = [
      { id: 1, text: 'Joggin', status: 'completed' },
      { id: 2, text: 'Drink Coffee', status: 'completed' },
      { id: 3, text: 'Watch Movie', status: 'incomplete' }
    ];

    expect(todoReducer(curState, action)).to.deep.equal(expectedState);
  });
});
