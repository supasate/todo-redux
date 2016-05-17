import * as types from '../actions/types';

const reducer = (state = [], action) => {
  switch (action.type) {
    case types.ADD_TODO:
      return [ ...state, { id: action.id, text: action.payload, status: 'incompleted' } ];

    case types.UPDATE_TODO:
      let matchedIdx = -1;
      state.every(function (todo, idx) {
        if (todo.id === action.id) {
          matchedIdx = idx
          return false;
        }
        return true;
      });
      return [
        ...state.slice(0, matchedIdx),
        { id: action.id, text: action.payload, status: state[matchedIdx].status },
        ...state.slice(matchedIdx + 1)
      ];

    case types.DELETE_TODO:
      let deletedIdx = -1;

      state.forEach((todo, idx) => {
        if (todo.id === action.id) {
          deletedIdx = idx
        }
      });
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
