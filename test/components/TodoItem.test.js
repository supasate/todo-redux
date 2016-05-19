import { renderComponent, expect, spy } from '../test_helper';
import { TodoItem } from '../../src/components/TodoItem';

describe('TodoItem', () => {
  let component;
  let props;

  beforeEach(() => {
    props = {
      id: 1,
      text: 'Read a book',
      status: 'incomplete',
      toggleTodo: spy(),
      deleteTodo: spy(),
   };
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
    it('does not has a `todo-completed` class if the status is incomplete', () => {
      expect(component).to.not.have.class('todo-completed');
    });

    it('has a `todo-completed` class if the status is completed', () => {
      const completedProps = { id: 1, text: 'Read a book', status: 'completed' };
      let completedTodoComponent = renderComponent(TodoItem, completedProps);

      expect(completedTodoComponent).to.have.class('todo-completed');
    });
  });

  describe('Dispacthing', () => {
    it('should dispatch DELETE_TODO when clicking [x] mark', () => {
      component.find('.todo-item-delete').simulate('click');
      expect(props.deleteTodo).to.have.been.called.with(1);
    });

    it('should dispatch TOGGLE_TODO when clicking itself', () => {
      component.find('.todo-item-text').simulate('click');
      expect(props.toggleTodo).to.have.been.called.with(1);
    });
  });
});
