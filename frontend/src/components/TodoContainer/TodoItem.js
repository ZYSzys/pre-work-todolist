import React, { Component } from 'react';
import './TodoItem.css';

export default class TodoItem extends Component {
    render() {
        return (
            <div className="TodoItem">
                <input type="checkbox" />
                <span className="TodoItem-Span">{this.props.item}</span>
                <button className="TodoItem-Button btn btn-info" onClick={this.props.deleteTodoItem}> - </button>
            </div>
        )
    }
}
