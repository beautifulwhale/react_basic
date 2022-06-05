import React, { Component } from "react";
import PropTypes from 'prop-types'
import { nanoid } from "nanoid";
import "./index.css";
class Header extends Component {
  static propTypes = {
    addTodo: PropTypes.func.isRequired,
  }
  handleInput = (event) => {
    const { key, target } = event;
    if (key !== "Enter") return;
    if (target.value.trim() === "") {
      alert("输入的内容不能为空");
      return;
    }
    const todoObj = { id: nanoid(), name: target.value, done: false };
    this.props.addTodo(todoObj);
    target.value = ''
  };
  render() {
    return (
      <div className="todo-header">
        <input
          type="text"
          placeholder="请输入你的任务名称"
          onKeyUp={this.handleInput}
        />
      </div>
    );
  }
}
export default Header;
