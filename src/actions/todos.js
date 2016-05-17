import { ADD_TODO, UPDATE_TODO, DELETE_TODO, TOGGLE_TODO } from './types';

let nextTodoId = 1;

const addTodo = (msg) => {
  return {
    type: ADD_TODO,
    id: nextTodoId++,
    payload: msg
  };
};

const updateTodo = (id, newMsg) => {
  return {
    type: UPDATE_TODO,
    id,
    payload: newMsg
  };
};

const deleteTodo = (id) => {
  return {
    type: DELETE_TODO,
    id
  };
};

const toggleTodo = (id) => {
  return {
    type: TOGGLE_TODO,
    id
  };
};

export {
  addTodo,
  updateTodo,
  deleteTodo,
  toggleTodo,
};
