import React, { Component } from 'react';
import './index.css'

export default class TodoInput extends Component {
    pressEnter = e => {
        if (e.key === 'Enter') {
            this.saveTodoItem(e);
        }
    };

    saveTodoItem = e => {
        e.preventDefault();

        const todo = this.refs.isEditing.value;
        if (this.validateTodo(todo)) {
            this.props.addTodoItem(todo, false);
            this.refs.isEditing.value = '';
        }
    };

    validateTodo = (todo) => {
        if (todo === '') {
            alert('请输入 Todo!');
            return false;
        }
        return true;
    };

    render() {
        return (
            <div className="TodoInput">
                <input
                    className="form-control TodoInput-Input"
                    type="text"
                    ref="isEditing"
                    onKeyPress={this.pressEnter}
                />
                <button className="btn btn-primary" onClick={this.saveTodoItem.bind(this)}>+</button>
            </div>
        )
    };
}