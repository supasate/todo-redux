import * as types from '../actions/types';

const findTodoById = (todos, id) => {
  let matchedIdx = -1
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
      return [ ...state, { id: action.id, text: action.payload, status: 'incompleted' } ];

    case types.UPDATE_TODO:
      let updatedIdx = findTodoById(state, action.id);

      return [
        ...state.slice(0, updatedIdx),
        { id: action.id, text: action.payload, status: state[updatedIdx].status },
        ...state.slice(updatedIdx + 1)
      ];

    case types.DELETE_TODO:
      let deletedIdx = findTodoById(state, action.id);

      return [
        ...state.slice(0, deletedIdx),
        ...state.slice(deletedIdx + 1)
      ];
  }
  return state;
};

export {
  reducer,
}
