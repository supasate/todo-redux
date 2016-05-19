import { renderComponent, expect, spy } from '../test_helper';
import TodoInputBox from '../../src/components/TodoInputBox';
import * as actions from '../../src/actions/todos';

describe('TodoInputBox', () => {
  let component;

  beforeEach(() => {
    component = renderComponent(TodoInputBox);
  });

  it('has a correct class', () => {
    expect(component).to.have.class('todo-input-box')
  });

  it('has an input', () => {
    expect(component.find('input')).to.exist;
  })

  it('has a button', () => {
    expect(component.find('button')).to.exist;
  });

  describe('add a new todo', () => {
    let callbackSpy;

    beforeEach(() => {
      callbackSpy = spy(actions, 'addTodo');
      component.find('input').simulate('change', 'Drink Coffee');
    });

    afterEach(() => {
      actions.addTodo.restore();
    });

    it('dispatch ADD_TODO action', () => {
      expect(callbackSpy).to.have.been.called;
    });

    it('shows the text in input box', () => {
      expect(component.find('input')).to.have.value('Drink Coffee');
    });

    it('clears the input box when clicking the add button', () => {
      component.simulate('submit');
      expect(component.find('input')).to.have.value('');
    });
  });
});
