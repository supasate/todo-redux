import { renderComponent, expect } from '../test_helper';
import TodoList from '../../src/components/TodoList';

describe('TodoList', () => {
  let component;

  beforeEach(() => {
    const props = {
      todos: [
        { text: 'Drink Coffee', status: 'incompleted' },
        { text: 'Read a book', status: 'completed' }
      ]
    };
    component = renderComponent(TodoList, null, props);
  })

  it('has a correct class', () => {
    expect(component).to.have.class('todo-list');
  });

  it('contains a <ul> tag', () => {
    expect(component.is('ul')).to.be.true;
  });

  it('shows an <li> tag for each todo', () => {
    expect(component.find('li').length).to.equal(2);
  });

  it('shows each todo that is provided', () => {
    expect(component).to.contain('Drink Coffee');
    expect(component).to.contain('Read a book');
  });
});
