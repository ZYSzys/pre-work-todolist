import React, { Component } from 'react';
import TodoInput from './TodoInput.js'
import TodoItem from './TodoItem.js';
import './index.css';

export default class TodoContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [
                {
                    'todo': '吃饭'
                },
                {
                    'todo': '睡觉'
                }
            ]
        }
    };

    addTodoItem = (todo) => {
        this.setState(({list}) => ({
            list: [{ todo }, ...list]
        }));
    };

    deleteTodoItem = (needDelete) => {
        this.setState(({list}) => ({
            list: list.filter((todo, idx) => idx !== needDelete)
        }));
    };

    render() {
        return (
            <div className="TodoContainer">
                制定你的TodoList吧!
                <TodoInput addTodoItem={this.addTodoItem}/>
                {this.state.list.map((item, idx) =>
                    <TodoItem
                        key={idx}
                        item={item.todo}
                        deleteTodoItem={this.deleteTodoItem.bind(this, idx)}
                    />)}
            </div>
        )
    };
}
