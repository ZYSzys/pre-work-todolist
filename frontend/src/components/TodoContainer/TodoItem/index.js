import React, { Component } from 'react';
import './index.css';

export default class TodoItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            completed: false
        }
    };

    toggleTodo = () => {
        this.setState(({ completed }) => ({
            completed: !completed
        }));
        this.props.toggleTodo(this.state.completed);
    };

    changeTodo = () => {
        console.log('changeTodo')
    }

    render() {
        return (
            <div className="TodoItem">
                <input type="checkbox"
                    className="TodoItem-Checkbox"
                    onClick={this.toggleTodo}
                />
                <input
                    className={`form-control TodoItem-Span ${this.state.completed ? "TodoItem-Completed":""}`}
                    value={this.props.item}
                    onChange={this.changeTodo}
                />
                <button
                    className="TodoItem-Button btn"
                    onClick={this.props.deleteTodoItem}
                > -
                </button>
            </div>
        )
    }
}
