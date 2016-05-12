import { expect } from '../../test_helper';
import * as types from '../../../src/redux/actions/types';
import { addTodo } from '../../../src/redux/actions/todos';

describe('addTodo action', () => {
  it('should create action with type ADD_TODO', () => {
    const action = addTodo('Buy Coffee');
    const expectedAction = {
      type: types.ADD_TODO,
      payload: 'Buy Coffee'
    };
    expect(action).to.deep.equal(expectedAction);
  });
});
