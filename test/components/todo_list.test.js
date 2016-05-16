import { renderComponent, expect } from '../test_helper';
import TodoList from '../../src/components/TodoList';

describe('TodoList', () => {
  let component;

  beforeEach(() => {
    component = renderComponent(TodoList);
  })

  it('has a correct class', () => {
    expect(component).to.have.class('todo-list');
  });

  it('contains a <ul> tag', () => {
    expect(component.is('ul')).to.be.true;
  });
});
