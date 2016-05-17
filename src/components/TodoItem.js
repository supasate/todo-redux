import React, { Component } from 'react';
import cx from 'classnames';

class TodoItem extends Component {
  render() {
    let itemClass = 'todo-item';
    if (this.props.status === 'completed') itemClass += ' todo-completed';
    
    return (
      <div className={itemClass} id={this.props.id}>
        {this.props.text}
        <span className="todo-item-delete"> [x]</span>
      </div>
    );
  };
}

export default TodoItem;
