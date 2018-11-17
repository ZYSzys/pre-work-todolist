import React, { Component } from 'react';
import TheHeader from './components/TheHeader';
import TodoContainer from './components/TodoContainer';
import './App.css';

import { getTD, addTD } from './api';

class App extends Component {
  render() {
    getTD()
        .then(res => console.log(res))
        .catch(e => console.log(e));



    return (
      <div className="App">
        <TheHeader title="pre-work-todolist" />
        <TodoContainer />
      </div>
    );
  }
}

export default App;
