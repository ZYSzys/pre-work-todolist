import React, { Component } from 'react';
import TodoInput from './TodoInput';
import TodoItem from './TodoItem';
import FilterButtons from './FilterButtons';
import './index.css';

import { getTD, addTD, deleteTD, toggleTD, changeTD } from '../../api';
import { formatDate, validateTodo } from '../../utils';

class TodoContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
      /*
        {
          todo: '吃饭',
          completed: 0
        },
        {
          todo: '睡觉',
          completed: 0
        },
        {
          todo: '打豆豆',
          completed: 0
        }*/
      ],
      status: 'all'
    };
  };

  componentDidMount() {
    console.log('DidMount')
    getTD()
        .then(res => {
            const getList = [];
            for(const item of res) {
                getList.unshift({
                    todo: item.fields.todo,
                    completed: parseInt(item.fields.completed),
                    expireDate: formatDate(item.fields.date)
                });
            }
            this.setState(({list}) => ({
                list: getList
            }));
        });
  };

  componentDidUpdate() {

  };

  addTodoItem = (todo, completed, expireDate) => {
    if (validateTodo(todo, this.state.list) === false) return;

    expireDate = formatDate(expireDate)
    this.setState(({ list }) => ({
      list: [{ todo, completed, expireDate}, ...list]
    }));
    addTD({ todo, completed, expireDate})
        .then(res => console.log(`addTD: ${res}`));
  };

  deleteTodoItem = needDelete => {
    this.setState(({ list }) => ({
      list: list.filter((todo, index) => index !== needDelete)
    }));
    const todo = this.state.list[needDelete].todo;
    deleteTD({todo}).then(res => console.log(res));
  };

  toggleTodo = toggled => {
    // eslint-disable-next-line
    this.state.list.map((todo, index) => {
      if (toggled === index) todo.completed = !todo.completed;
    });
    const todo = this.state.list[toggled].todo;
    toggleTD({todo}).then(res => console.log(res));
  };

  startChangeTodo = toggled => {
    this.setState(({ isChanging }) => ({
      isChanging: toggled
    }));
  };

  changeTodo = newTodo => {
    if (validateTodo(newTodo, this.state.list) === false) return;

    const index = this.state.isChanging;
    const newList = this.state.list;
    const todo = newList[index].todo;
    newList[index].todo = newTodo;

    this.setState(({ list }) => ({
      list: newList
    }));
    console.log(todo, newTodo);
    changeTD({todo, newTodo})
  };

  showAll = () => {
    this.setState(({ status }) => ({
      status: 'all'
    }));
  };

  showCompleted = () => {
    this.setState(({ status }) => ({
      status: 'completed'
    }));
  };

  showUncompleted = () => {
    this.setState(({ status }) => ({
      status: 'uncompleted'
    }));
  };

  render() {
    const finalList = this.state.list.filter((item, index) => {
      switch (this.state.status) {
        case 'completed':
          return item.completed;
        case 'uncompleted':
          return !item.completed;
        default:
          return true;
      }
    });

    return (
      <div className="TodoContainer">
        制定你的TodoList吧!
        <TodoInput addTodoItem={this.addTodoItem} />
        {finalList.map((item, idx) => (
          <TodoItem
            key={idx}
            index={idx}
            item={item}
            deleteTodoItem={this.deleteTodoItem.bind(this, idx)}
            toggleTodo={this.toggleTodo.bind(this, idx)}
            startChangeTodo={this.startChangeTodo.bind(this, idx)}
            changeTodo={this.changeTodo}
          />
        ))}
        <FilterButtons
          showAll={this.showAll}
          showCompleted={this.showCompleted}
          showUncompleted={this.showUncompleted}
        />
      </div>
    );
  }
}

export default TodoContainer;
