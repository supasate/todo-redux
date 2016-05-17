import { renderComponent, expect } from '../test_helper';
import TodoList from '../../src/components/TodoList';

describe('TodoList', () => {
  let component;

  beforeEach(() => {
    const state = {
      todos: [
        { id: 1, text: 'Drink Coffee', status: 'incomplete' },
        { id: 2, text: 'Read a book', status: 'completed' }
      ]
    };
    component = renderComponent(TodoList, null, state);
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

  it('toggles status wheck clicking each todo', () => {
    let selectedTodo = component.find('li > div:contains("Drink Coffee")');
    expect(selectedTodo).to.not.have.class('todo-completed');

    selectedTodo.simulate('click');
    expect(selectedTodo).to.have.class('todo-completed');

    selectedTodo.simulate('click');
    expect(selectedTodo).to.not.have.class('todo-completed');
  });

  it('deletes a todo after clicking the delete mark', () => {
    component.find('li > div:contains("Read a book") > span.todo-item-delete').simulate('click');

    expect(component).to.not.contain('Read a book');
    expect(component).to.contain('Drink Coffee');
  });
});
