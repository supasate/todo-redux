import { ADD_TODO } from './types';

const addTodo = (msg) => {
  return {
    type: ADD_TODO,
    payload: msg
  }
};

export {
  addTodo,
}
