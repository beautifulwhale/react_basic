import React, { Component } from "react";
import { Button } from "antd";
import store from "./redux/store";
import {createDecrementAction,createIncrementAction,createAsyncIncrement} from "./redux/count_action";

export default class Count extends Component {
    increment = () => {
    const { value } = this.selectVale;
    store.dispatch(createIncrementAction(value*1))
  };
  decrement = () => {
    const { value } = this.selectVale;
      store.dispatch(createDecrementAction(value*1))
  };
  incrementIfOdd = () => {
    const { value } = this.selectVale;
    const  count  = store.getState()
    if (count % 2 !== 0) {
        store.dispatch(createIncrementAction(value*1))
    }
  };
  incrementAsync = () => {
    const { value } = this.selectVale;
    // setTimeout(() => {
    //     store.dispatch(createIncrementAction(value*1))
    // }, 500);
      store.dispatch(createAsyncIncrement(value*1,1000))
  };
  render() {
    return (
      <div>
        <h1>当前值为：{store.getState()}</h1>
        <select ref={(c) => (this.selectVale = c)}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        <Button type="primary" size="large" onClick={this.increment}>
          +
        </Button>
        <Button type="primary" size="large" onClick={this.decrement}>
          -
        </Button>
        <Button type="primary" size="large" onClick={this.incrementIfOdd}>
          increament if odd
        </Button>
        <Button type="primary" size="large" onClick={this.incrementAsync}>
          increament async
        </Button>
      </div>
    );
  }
}
<style></style>;
