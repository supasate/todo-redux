import { renderComponent, expect } from '../test_helper';
import TodoItem from '../../src/components/TodoItem';

describe('TodoItem', () => {
  let component;

  beforeEach(() => {
    const props = { id: 1, text: 'Read a book', status: 'incompleted' };
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

  describe('status checking', () => {
    it('does not has a completed class if the staus is incomplete', () => {
      expect(component).to.not.have.class('todo-completed');
    });

    it('has a completed class if the status is completed', () => {
      const completedProps = { id: 1, text: 'Read a book', status: 'completed' };
      let completedTodoComponent = renderComponent(TodoItem, completedProps);

      expect(completedTodoComponent).to.have.class('todo-completed');
    });
  });
});
