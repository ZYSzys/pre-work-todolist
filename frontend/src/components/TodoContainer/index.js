import React, { Component } from 'react';
import TodoInput from './TodoInput'
import TodoItem from './TodoItem';
import FilterTabs from './FilterTabs';
import './index.css';

export default class TodoContainer extends Component {
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
            ]
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

    showAll = () => {

    };

    showCompleted = () => {
        this.setState(({list}) => ({
            list: list.filter((item, index) => item.completed === true)
        }));
    };

    showUncompleted = () => {

    };

    render() {
        return (
            <div className="TodoContainer">
                制定你的TodoList吧!
                <TodoInput addTodoItem={this.addTodoItem} />
                {this.state.list.map((item, idx) =>
                    <TodoItem
                        key={idx}
                        item={item.todo}
                        deleteTodoItem={this.deleteTodoItem.bind(this, idx)}
                        toggleTodo={this.toggleTodo.bind(this, idx)}
                    />)}
                <FilterTabs showCompleted={this.showCompleted.bind(this)}/>
            </div>
        )
    };
}
