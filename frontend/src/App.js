import React, { Component } from 'react';
import TodoContainer from './components/TodoContainer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        </header>
        <TodoContainer />
      </div>
    );
  }
}

export default App;
