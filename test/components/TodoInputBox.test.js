import { renderComponent, expect } from '../test_helper';
import TodoInputBox from '../../src/components/TodoInputBox';

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
    beforeEach(() => {
      component.find('input').simulate('change', 'Drink Coffee');
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
