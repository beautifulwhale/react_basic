import React, { Component } from "react";
import Header from "./components/Header";
import List from "./components/List";
import Footer from "./components/Footer";
import "./App.css";
class App extends Component {
  // 由于暂时无法实现兄弟组件的通信 把Header List 公用数据放在父组件
  state = {
    todos: [
      { id: 1, name: "吃饭", done: true },
      { id: 2, name: "睡觉", done: false },
      { id: 3, name: "打游戏", done: true },
      { id: 4, name: "写代码", done: false },
    ],
  };
  //添加todo
  addTodo = (todoObj) => {
    const { todos } = this.state;
    let newTodos = [todoObj, ...todos];
    this.setState({ todos: newTodos });
  };
  // 更新todo状态
  updateTodo = (id, done) => {
    const { todos } = this.state;
    const newTodoList = todos.map((item) => {
      if (item.id === id) {
        item.done = done;
        return item;
      }
      return item;
    });
    // const filterTodo = todos.filter((item) => {
    //   if (item.id !== id) return item;
    //   item.done = done;
    //   return item;
    // });
    this.setState({ todos: newTodoList });
  };
  // 删除todo
  deleteTodo = (id) => {
    const { todos } = this.state;
    const newList = todos.filter((item) => item.id !== id);
    this.setState({ todos: newList });
  };
  changeAllTodo = (ischecked) => {
    const { todos } = this.state;
    const newList = todos.map((item) => {
      return { ...item, done: ischecked };
      // if (item.done !== ischecked) {
      //   item.done = ischecked;
      // }
      // return item;
    });
    this.setState({ todos: newList });
  };
  clearDoneTodo = () => {
    const { todos } = this.state;
    const newList = todos.filter((item) => !item.done);
    this.setState({ todos: newList });
  };
  render() {
    const { todos } = this.state;
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header addTodo={this.addTodo} />
          <List
            todos={todos}
            updateTodo={this.updateTodo}
            deleteTodo={this.deleteTodo}
          />
          <Footer
            todos={todos}
            changeAllTodo={this.changeAllTodo}
            clearDoneTodo={this.clearDoneTodo}
          />
        </div>
      </div>
    );
  }
}
export default App;
