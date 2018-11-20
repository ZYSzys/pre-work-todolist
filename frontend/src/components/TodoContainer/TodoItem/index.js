import React, { Component } from "react";
import "./index.css";

class TodoItem extends Component {
    changeTodo = () => {
        const newTodo = this.refs.isChanging.value;
        this.props.changeTodo(newTodo);
        this.refs.isChanging.value = "";
    };

    render() {
        return (
            <div className="TodoItem">
                <input
                    type="checkbox"
                    className="TodoItem-Checkbox"
                    onClick={this.props.toggleTodo}
                    checked={this.props.item.completed ? true : false}
                    onChange={()=>{}}
                />
                <span
                    className={`form-control TodoItem-Span ${
                        this.props.item.completed ? "TodoItem-Completed" : ""
                    }`}
                >
                    {this.props.item.todo}
                </span>
                <span style={{fontSize: 15}}>
                    {this.props.item.expireDate}
                </span>
                <span style={{fontSize: 15, marginLeft: 15}}>
                    {this.props.item.importance}
                </span>
                <button
                    data-toggle="modal"
                    data-target="#myModal"
                    className="btn btn-info"
                    onClick={this.props.startChangeTodo}
                >
                    编辑
                </button>
                <button
                    className="TodoItem-Button btn"
                    onClick={this.props.deleteTodoItem}
                >
                    -
                </button>
                <div
                    className="modal fade"
                    id="myModal"
                    tabIndex="-1"
                    role="dialog"
                    aria-labelledby="myModalLabel"
                    aria-hidden="true"
                >
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button
                                    type="button"
                                    className="close"
                                    data-dismiss="modal"
                                    aria-hidden="true"
                                >
                                    &times;
                                </button>
                                <h4 className="modal-title" id="myModalLabel">
                                    编辑 Todo 内容
                                </h4>
                            </div>
                            <textarea
                                type="text"
                                className="modal-body"
                                placeholder="请输入新 Todo"
                                ref="isChanging"
                            >
                            </textarea>
                            <div className="modal-footer">
                                <button
                                    type="button"
                                    className="btn btn-default"
                                    data-dismiss="modal"
                                >
                                    取消
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-primary"
                                    data-dismiss="modal"
                                    onClick={this.changeTodo}
                                >
                                    提交更改
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default TodoItem;
