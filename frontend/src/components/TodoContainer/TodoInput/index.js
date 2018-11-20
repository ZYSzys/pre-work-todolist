import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import Select from 'react-select';
import 'react-datepicker/dist/react-datepicker.css';
import './index.css';

const options = [
    {value: 'important', label: 'H'},
    {value: 'middle', label: 'M'},
    {value: 'notInHurry', label: 'L'}
];

export default class TodoInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            expireDate: new Date(),
            importance: {value: 'middle', label: 'M'}
        };
    };

    setExpireDate = (date) => {
        this.setState(({expireDate}) => ({
            expireDate: date
        }));
    };

    setImportance = (option) => {
        this.setState(({importance}) => ({
            importance: option
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
        const { expireDate, importance } = this.state;
        console.log(importance);

        this.props.addTodoItem(todo, 0, expireDate, importance.label);
        this.refs.isEditing.value = '';
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
                    onChange={this.setExpireDate}
                />
                <Select
                    className="TodoInput-Select"
                    value={this.state.importance}
                    onChange={this.setImportance}
                    options={options}
                />
                <button
                    className="btn btn-primary"
                    onClick={this.saveTodoItem}
                >
                    +
                </button>
            </div>
        )
    };
}
