import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/todos';
import cx from 'classnames';

class TodoItem extends Component {
  handleOnClick(event) {
    this.props.toggleTodo(this.props.id);
  }

  handleOnDelete(event) {
    this.props.deleteTodo(this.props.id);
  }

  render() {
    let itemClass = 'todo-item';
    if (this.props.status === 'completed') itemClass += ' todo-completed';

    return (
      <div className={itemClass} id={this.props.id} >
        <span className="todo-item-text" onClick={this.handleOnClick.bind(this)}>{this.props.text}</span>
        <span className="todo-item-delete" onClick={this.handleOnDelete.bind(this)}> [x]</span>
      </div>
    );
  };
}

export default connect(null, actions)(TodoItem);
