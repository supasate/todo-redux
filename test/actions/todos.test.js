import { expect } from '../test_helper';
import * as types from '../../src/actions/types';
import { addTodo, updateTodo, deleteTodo } from '../../src/actions/todos';

describe('todos action', () => {
  it('should create action with type ADD_TODO', () => {
    const action = addTodo('Buy Coffee');
    const expectedAction = {
      type: types.ADD_TODO,
      payload: 'Buy Coffee'
    };
    expect(action).to.deep.equal(expectedAction);
  });

  it('should create action with type UPDATE_TODO', () => {
    const action = updateTodo('Buy Coffee', 'Drink Coffee');
    const expectedAction = {
      type: types.UPDATE_TODO,
      payload: {
        oldMsg: 'Buy Coffee',
        newMsg: 'Drink Coffee'
      }
    };
    expect(action).to.deep.equal(expectedAction);
  });

  it('should create action with type DELETE_TODO', () => {
    const action = deleteTodo('Buy Coffee');
    const exepectedAction = {
      type: types.DELETE_TODO,
      payload: 'Buy Coffee'
    };
  });
});
