import React, { Component } from 'react';
import TodoInputBox from './TodoInputBox';
import TodoList from './TodoList';

class App extends Component {
  render() {
    return (
      <div className="app">
        <TodoInputBox />
        <TodoList />
      </div>
    );
  }
}

export default App;
