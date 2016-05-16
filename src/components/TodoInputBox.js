import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../redux/actions/todos';

class TodoInputBox extends Component {
  constructor(props) {
    super(props);

    this.state = { todo: '' };
  }

  handleChange(event) {
    this.setState({ todo: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();

    this.props.addTodo(this.state.todo);
    this.setState({ todo: '' });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)} className="todo-input-box">
        <h4>Add Todo</h4>
        <input
          onChange={this.handleChange.bind(this)}
          value={this.state.todo} />
        <button>Add</button>
      </form>
    );
  }
}

export default connect(null, actions)(TodoInputBox);
