import React, { Component } from 'react';

export default class FilterTabs extends Component {
    render() {
        return (
            <div className="FilterTabs btn-group">
                <button
                    className="btn btn-default"
                    onClick={this.props.showAll}
                >全部
                </button>
                <button
                    className="btn btn-default"
                    onClick={this.props.showCompleted}
                >
                已完成
                </button>
                <button
                    className="btn btn-default"
                    onClick={this.props.showUncompleted}
                >
                未完成
                </button>
            </div>
        )
    }
}
