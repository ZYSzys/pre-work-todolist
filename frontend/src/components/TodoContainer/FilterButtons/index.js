import React, { Component } from 'react';
import './index.css';

export default class FilterTabs extends Component {
    render() {
        return (
            <div className="FilterButtons btn-group">
                <button
                    className="btn btn-success"
                    onClick={this.props.showCompleted}
                >
                已完成
                </button>
                <button
                    className="btn btn-primary"
                    onClick={this.props.showAll}
                >全部
                </button>
                <button
                    className="btn btn-warning"
                    onClick={this.props.showUncompleted}
                >
                未完成
                </button>
            </div>
        )
    }
}
