import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './index.css'

export default class TodoInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            expireDate: new Date()
        };
    };

    handleChange = (date) => {
        this.setState(({expireDate}) => ({
            expireDate: date
        }));
    };

    pressEnter = e => {
        if (e.key === 'Enter') {
            this.saveTodoItem(e);
        }
    };

    saveTodoItem = e => {
        e.preventDefault();

        const todo = this.refs.isEditing.value;
        const expireDate = this.state.expireDate;
        if (this.validateTodo(todo)) {
            this.props.addTodoItem(todo, 0, expireDate);
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
                    type="text"
                    placeholder="输入下一个 todo 任务"
                    className="form-control TodoInput-Input"
                    ref="isEditing"
                    onKeyPress={this.pressEnter}
                />
                <DatePicker
                    className="TodoInput-Picker form-control"
                    selected={this.state.expireDate}
                    onChange={this.handleChange}
                />
                <button
                    className="btn btn-primary"
                    onClick={this.saveTodoItem.bind(this)}
                >
                    +
                </button>
            </div>
        )
    };
}
