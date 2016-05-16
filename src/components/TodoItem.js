import React, { Component } from 'react';

class TodoItem extends Component {
  render() {
    return (
      <div className="todo-item">
        {this.props.text}
      </div>
    );
  };
}

export default TodoItem;
