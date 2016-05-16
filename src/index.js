import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import TodoInputBox from './components/TodoInputBox';
import TodoList from './components/TodoList';

class App extends Component {
  render() {
    return (
      <div>
        <TodoInputBox />
        <TodoList />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
