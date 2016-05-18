import { expect } from '../test_helper';
import * as types from '../../src/actions/types';
import { addTodo, updateTodo, deleteTodo, toggleTodo } from '../../src/actions/todos';

describe('Todo Actions', () => {
  it('should create action with type ADD_TODO', () => {
    const action = addTodo('Buy Coffee');
    const expectedAction = {
      type: types.ADD_TODO,
      id: 1,
      payload: 'Buy Coffee'
    };
    expect(action).to.deep.equal(expectedAction);
  });

  it('should create action with type DELETE_TODO', () => {
    const action = deleteTodo(1);
    const expectedAction = {
      type: types.DELETE_TODO,
      id: 1
    };
    expect(action).to.deep.equal(expectedAction);
  });

  it('should create action with type TOGGLE_TODO', () => {
    const action = toggleTodo(1);
    const expectedAction = {
      type: types.TOGGLE_TODO,
      id: 1
    };
  })
});
