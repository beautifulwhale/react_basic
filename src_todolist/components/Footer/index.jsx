import React, { Component } from "react";
import "./index.css";
export default class Footer extends Component {
  handleAllDone = (event) => {
    this.props.changeAllTodo(event.target.checked);
  };
  handleClearDone = () => {
    this.props.clearDoneTodo();
  };
  render() {
    const { todos } = this.props;
    const doneList = todos.filter((item) => item.done);
    const doneCount = doneList.length;
    const total = todos.length;
    return (
      <div className="todo-footer">
        <label>
          <input
            type="checkbox"
            checked={doneCount === total && total !== 0 ? true : false}
            onChange={this.handleAllDone}
          />
        </label>
        <span>
          <span>已完成{doneCount}/</span> 全部{total}
        </span>
        <button className="btn btn-danger" onClick={this.handleClearDone}>
          清除已完成任务
        </button>
      </div>
    );
  }
}
