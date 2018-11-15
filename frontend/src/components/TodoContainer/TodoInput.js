import React, { Component } from 'react';
import './TodoInput.css'

export default class TodoInput extends Component {
    saveTodoItem = e => {
        e.preventDefault();

        const todo = this.refs.isEditing.value;
        if (this.validateTodo(todo)) {
            this.props.addTodoItem(todo);
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
                <input className="form-control TodoInput-Input" type="text" ref="isEditing"/>
                <button className="btn btn-primary" onClick={this.saveTodoItem.bind(this)}>+</button>
            </div>
        )
    };
}
