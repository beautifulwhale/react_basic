import React, { Component } from "react";
import PropTypes from "prop-types";
import "./index.css";
class Item extends Component {
  state = { isEnter: false };
  static propTypes = {
    updateTodo: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired,
  };
  handleCheck = (id) => {
    return (event) => {
      this.props.updateTodo(id, event.target.checked);
    };
  };
  handleMouse = (flag) => {
    return () => {
      this.setState({ isEnter: flag });
    };
  };
  handleDelete = (id) => {
    return () => {
      if(window.confirm('确定删除吗?')){
        this.props.deleteTodo(id);
      }
    };
  };
  render() {
    const { id, name, done } = this.props;
    const { isEnter } = this.state;
    return (
      <div>
        <li
          onMouseEnter={this.handleMouse(true)}
          onMouseLeave={this.handleMouse(false)}
          style={{ backgroundColor: isEnter ? "#ddd" : "white" }}
        >
          <label>
            <input
              type="checkbox"
              checked={done}
              onChange={this.handleCheck(id)}
            />
            <span>{name}</span>
          </label>
          <button
            className="btn btn-danger"
            onClick={this.handleDelete(id)}
            style={{ display: isEnter ? "block" : "none" }}
          >
            删除
          </button>
        </li>
      </div>
    );
  }
}
export default Item;
