import { renderComponent, expect } from '../test_helper';
import App from '../../src/components/App';

describe('App', () => {
  let component;

  beforeEach(() => {
    component = renderComponent(App);
  });

  it('has a correct class', () => {
    expect(component).to.have.class('app');
  });

  it('shows a TodoInputBox', () => {
    expect(component.find('.todo-input-box')).to.exist;
  });

  it('shows a TodoList', () => {
    expect(component.find('.todo-list')).to.exist;
  });
});
