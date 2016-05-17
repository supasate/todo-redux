import { expect } from '../test_helper';
import { reducer as todoReducer } from '../../src/reducers/todos';
import * as types from '../../src/actions/types';

describe('Todo Reducer', () => {
  let curState;

  beforeEach(() => {
    curState = [
      { id: 1, text: 'Joggin', status: 'incomplete' },
      { id: 2, text: 'Drink Coffee', status: 'completed' },
      { id: 3, text: 'Watch Movie', status: 'incomplete' }
    ];
  });

  it('should return correct initial state', () => {
    const expectedState = [];
    expect(todoReducer(undefined, {})).to.deep.equal(expectedState);
  });

  describe('add', () => {
    let resultState;

    beforeEach(() => {
      const action = {
        type: types.ADD_TODO,
        id: 4,
        payload: 'Read Book'
      };
      resultState = todoReducer(curState, action);
    });

    it('should add new todo when receiving ADD_TODO action', () => {
      const expectedState = [
        { id: 1, text: 'Joggin', status: 'incomplete' },
        { id: 2, text: 'Drink Coffee', status: 'completed' },
        { id: 3, text: 'Watch Movie', status: 'incomplete' },
        { id: 4, text: 'Read Book', status: 'incomplete' }
      ];
      expect(resultState).to.deep.equal(expectedState);
    });

    it('should not return the same reference of state', () => {
      expect(resultState).to.not.equal(curState);
    });
  });

  describe('update', () => {
    let resultState;

    beforeEach(() => {
      const action = {
        type: types.UPDATE_TODO,
        id: 2,
        payload: 'Drink Juice'
      };
      resultState = todoReducer(curState, action);
    });

    it('should update old msg to new msg when receiving UPDATE_TODO action', () => {
      const expectedState = [
        { id: 1, text: 'Joggin', status: 'incomplete' },
        { id: 2, text: 'Drink Juice', status: 'completed' },
        { id: 3, text: 'Watch Movie', status: 'incomplete' }
      ];
      expect(resultState).to.deep.equal(expectedState);
    });

    it('should not return the same reference of state', () => {
      expect(resultState).to.not.equal(curState);
    });
  });

  describe('delete', () => {
    let resultState;

    beforeEach(() => {
      const action = {
        type: types.DELETE_TODO,
        id: 2
      };

      resultState = todoReducer(curState, action);
    });

    it('should delete a todo with given id', () => {
      const expectedState = [
        { id: 1, text: 'Joggin', status: 'incomplete' },
        { id: 3, text: 'Watch Movie', status: 'incomplete' }
      ];

      expect(resultState).to.deep.equal(expectedState);
    });

    it('should not return the same reference of state', () => {
      expect(resultState).to.not.equal(curState);
    });
  });

  describe('toggle', () => {
    let resultState;

    beforeEach(() => {
      const action = {
        type: types.TOGGLE_TODO,
        id: 1
      };
      resultState = todoReducer(curState, action);
    });

    it('should toggle a todo status with given id', () => {
      const expectedState = [
        { id: 1, text: 'Joggin', status: 'completed' },
        { id: 2, text: 'Drink Coffee', status: 'completed' },
        { id: 3, text: 'Watch Movie', status: 'incomplete' }
      ];

      expect(resultState).to.deep.equal(expectedState);
    });

    it('should not return the same reference of state', () => {
      expect(resultState).to.not.equal(curState);
    });
  });
});
