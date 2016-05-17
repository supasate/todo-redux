import React, { Component } from 'react';

class TodoItem extends Component {
  render() {
    return (
      <div className="todo-item">
        {this.props.text}
        <span className="todo-item-delete"> [x]</span>
      </div>
    );
  };
}

export default TodoItem;
