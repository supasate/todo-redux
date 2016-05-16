import React, { Component } from 'react';
import TodoItem from './TodoItem';

class TodoList extends Component {
  render() {
    return (
      <div className="todo-list">
        <ul>
          <li><TodoItem /></li>
          <li><TodoItem /></li>
          <li><TodoItem /></li>
        </ul>
      </div>
    );
  }
}

export default TodoList;
