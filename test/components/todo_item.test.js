import { renderComponent, expect } from '../test_helper';
import TodoItem from '../../src/components/TodoItem';

describe('TodoItem', () => {
  let component;

  beforeEach(() => {
    component = renderComponent(TodoItem);
  });

  it('has a correct class', () => {
    expect(component).to.have.class('todo-item');
  });
});
