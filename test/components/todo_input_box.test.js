import { renderComponent, expect } from '../test_helper';
import TodoInputBox from '../../src/components/TodoInputBox';

describe('TodoInputBox', () => {
  let component;

  beforeEach(() => {
    component = renderComponent(TodoInputBox);
  });

  it('has correct class', () => {
    expect(component).to.have.class('todo-input-box')
  });

  it('has an input', () => {
    expect(component.find('input')).to.exist;
  })

  it('has a button', () => {
    expect(component.find('button')).to.exist;
  });

  describe('add a new todo', () => {
    beforeEach(() => {
      component.find('input').simulate('change', 'Drink Coffee');
    });

    it('shows the text in input box', () => {
      expect(component.find('input')).to.have.value('Drink Coffee');
    });

    describe('after click the add button', () => {
      beforeEach(() => {
        component.simulate('submit');
      });

      it('clears the input box when clicking the add button', () => {
        expect(component.find('input')).to.have.value('');
      });

      it('adds a new todo into the todo list', () => {
        expect(component.find('li')).to.contain('Drink Coffee');
      })
    });
  });
});
