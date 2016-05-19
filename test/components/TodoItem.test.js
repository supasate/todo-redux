import { renderComponent, expect, spy } from '../test_helper';
import TodoItem from '../../src/components/TodoItem';
import * as actions from '../../src/actions/todos';

describe('TodoItem', () => {
  let component;

  beforeEach(() => {
    const props = { id: 1, text: 'Read a book', status: 'incomplete' };
    const state = { todos: [props] };
    component = renderComponent(TodoItem, props, state);
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
    it('does not has a completed class if the status is incomplete', () => {
      expect(component).to.not.have.class('todo-completed');
    });

    it('has a completed class if the status is completed', () => {
      const completedProps = { id: 1, text: 'Read a book', status: 'completed' };
      let completedTodoComponent = renderComponent(TodoItem, completedProps);

      expect(completedTodoComponent).to.have.class('todo-completed');
    });
  });

  describe('Dispacthing', () => {
    it('should dispatch DELETE_TODO when clicking [x] mark', () => {
      let callbackSpy = spy(actions, 'deleteTodo');
      component.find('.todo-item-delete').simulate('click');
      expect(callbackSpy).to.have.been.called;
      actions.deleteTodo.restore();
    });

    it('should dispatch TOGGLE_TODO when clicking itself', () => {
      let callbackSpy = spy(actions, 'toggleTodo');
      component.find('.todo-item-text').simulate('click');
      expect(callbackSpy).to.have.been.called;
      actions.toggleTodo.restore();
    });
  });
});
