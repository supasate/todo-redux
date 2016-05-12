import { ADD_TODO, UPDATE_TODO } from './types';

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

export {
  addTodo,
  updateTodo,
}
