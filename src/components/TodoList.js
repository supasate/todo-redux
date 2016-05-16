import React, { Component } from 'react';
import TodoItem from './TodoItem';
import { connect } from 'react-redux';

class TodoList extends Component {

  render() {
    const list = this.props.todos.map(todo => <li key={todo.text}><TodoItem text={todo.text} /></li>);

    return (
      <ul className="todo-list">
        {list}
      </ul>
    );
  }
}

const mapStateToProps = (state) => {
  return { todos: state.todos };
};

export default connect(mapStateToProps)(TodoList);
