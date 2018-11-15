import React, { Component } from 'react';
import TheHeader from './components/TheHeader';
import TodoContainer from './components/TodoContainer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TheHeader title="pre-work-todolist"/>
        <TodoContainer />
      </div>
    );
  }
}

export default App;
