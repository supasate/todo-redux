import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/todos';
import cx from 'classnames';

class TodoItem extends Component {
  handleOnClick(event) {
    this.props.toggleTodo(this.props.id);
  }

  render() {
    let itemClass = 'todo-item';
    if (this.props.status === 'completed') itemClass += ' todo-completed';

    return (
      <div className={itemClass} id={this.props.id} onClick={this.handleOnClick.bind(this)}>
        {this.props.text}
        <span className="todo-item-delete"> [x]</span>
      </div>
    );
  };
}

export default connect(null, actions)(TodoItem);
