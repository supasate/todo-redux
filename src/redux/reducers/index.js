import { combineReducers } from 'redux';
import { reducer as todosReducer } from './todos';

const rootReducer = combineReducers({
  todos: todosReducer
});

export default rootReducer;
