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

    case types.UPDATE_TODO:
      let matchedIdx = -1;
      state.todos.every(function (todo, idx) {
        if (todo.text === action.payload.oldMsg) {
          matchedIdx = idx
          return false;
        }

        return true;
      });
      const todos = [
        ...state.todos.slice(0, matchedIdx),
        { text: action.payload.newMsg, status: state.todos[matchedIdx].status },
        ...state.todos.slice(matchedIdx + 1)
      ];
      return { todos: todos }
  }
  return state;
};

export {
  reducer,
}
