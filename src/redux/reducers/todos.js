import * as types from '../actions/types';

const reducer = (state, action) => {
  if (!state) {
    return { todos: []};
  }
  switch (action.type) {
    case types.ADD_TODO:
      state.todos = state.todos.concat([
        { text: action.payload, status: 'incompleted' }
      ]);
      return state;
  }
  return state;
};

export {
  reducer,
}
