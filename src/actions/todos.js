import { ADD_TODO, UPDATE_TODO, DELETE_TODO } from './types';

const addTodo = (msg) => {
  return {
    type: ADD_TODO,
    payload: msg
  };
};

const updateTodo = (oldMsg, newMsg) => {
  return {
    type: UPDATE_TODO,
    payload: {
      oldMsg,
      newMsg
    }
  };
};

const deleteTodo = (msg) => {
  return {
    type: DELETE_TODO,
    payload: msg
  };
};

export {
  addTodo,
  updateTodo,
  deleteTodo,
};
