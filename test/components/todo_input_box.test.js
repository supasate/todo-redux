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
});
