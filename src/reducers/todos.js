import _ from 'lodash';
import * as types from '../actions/types';

const findTodoById = (todos, id) => {
  let matchedIdx = todos.length;
  todos.forEach((todo, idx) => {
    if (todo.id === id) {
      matchedIdx = idx;
    }
  });

  return matchedIdx;
};

const reducer = (state = [], action) => {
  switch (action.type) {
    case types.ADD_TODO:
      let addedTodo = { id: action.id, text: action.payload, status: 'incomplete' }

      return [ ...state, addedTodo ];

    case types.UPDATE_TODO:
      let updatedIdx = findTodoById(state, action.id);
      let updatedTodo = _.cloneDeep(state[updatedIdx]);
      updatedTodo.text = action.payload;

      return [
        ...state.slice(0, updatedIdx),
        updatedTodo,
        ...state.slice(updatedIdx + 1)
      ];

    case types.DELETE_TODO:
      let deletedIdx = findTodoById(state, action.id);

      return [
        ...state.slice(0, deletedIdx),
        ...state.slice(deletedIdx + 1)
      ];

    case types.TOGGLE_TODO:
      let toggledIdx = findTodoById(state, action.id);
      let toggledTodo = _.cloneDeep(state[toggledIdx]);

      if (toggledTodo.status === 'incomplete') {
        toggledTodo.status = 'completed';
      } else {
        toggledTodo.status = 'incomplete';
      }

      return [
        ...state.slice(0, toggledIdx),
        toggledTodo,
        ...state.slice(toggledIdx + 1)
      ];
  }
  return state;
};

export {
  reducer,
}
