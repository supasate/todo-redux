import { renderComponent, expect } from '../test_helper';
import TodoItem from '../../src/components/TodoItem';

describe('TodoItem', () => {
  let component;

  beforeEach(() => {
    const props = { text: 'Read a book', status: 'completed' };
    component = renderComponent(TodoItem, props);
  });

  it('has a correct class', () => {
    expect(component).to.have.class('todo-item');
  });

  it('has the provided text', () => {
    expect(component).to.contain('Read a book');
  })

  it('has a delete button', () => {
    expect(component.find('.todo-item-delete')).to.exist;
  })
});
