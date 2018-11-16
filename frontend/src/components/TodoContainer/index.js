import React, { Component } from 'react';
import TodoInput from './TodoInput'
import TodoItem from './TodoItem';
import FilterButtons from './FilterButtons';
import './index.css';

class TodoContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [
                {
                    todo: '吃饭',
                    completed: false
                },
                {
                    todo: '睡觉',
                    completed: false
                },
                {
                    todo: '打豆豆',
                    completed: false
                }
            ],
            status: 'all'
        }
    };

    addTodoItem = (todo, completed) => {
        this.setState(({list}) => ({
            list: [{ todo, completed }, ...list]
        }));
    };

    deleteTodoItem = (needDelete) => {
        this.setState(({list}) => ({
            list: list.filter((todo, index) => index !== needDelete)
        }));
    };

    toggleTodo = (toggled) => {
        // eslint-disable-next-line
        this.state.list.map((todo, index) => {
            if (toggled === index)
                todo.completed = !todo.completed;
        });
    };

    changeTodo = (toggled, newTodo) => {
        // eslint-disable-next-line
        this.state.list.map((todo, index) => {
            if (toggled === index)
                todo.todo = newTodo;
        });
    };

    showAll = () => {
        this.setState(({status}) => ({
            status: 'all'
        }));
    };

    showCompleted = () => {
        this.setState(({status}) => ({
            status: 'completed'
        }));
    };

    showUncompleted = () => {
        this.setState(({status}) => ({
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
                {finalList.map((item, idx) =>
                    <TodoItem
                        key={idx}
                        item={item}
                        deleteTodoItem={this.deleteTodoItem.bind(this, idx)}
                        toggleTodo={this.toggleTodo.bind(this, idx)}
                        changeTodo={this.changeTodo.bind(this, idx)}
                    />)}
                <FilterButtons
                    showAll={this.showAll}
                    showCompleted={this.showCompleted.bind(this)}
                    showUncompleted={this.showUncompleted}
                />
            </div>
        )
    };
}

export default TodoContainer;
