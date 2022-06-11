import { connect } from "react-redux";
import {
  createIncrementAction,
  createDecrementAction,
  createAsyncIncrement,
} from "../redux/actions/count";
// const a = (state) => {
//   return { count: state };
// };
// const b = (dispatch) => {
//   return {
//     increment: (value) => dispatch(createIncrementAction(value)),
//     decrement: (value) => dispatch(createDecrementAction(value)),
//     incrementAsync: (value, time) =>
//       dispatch(createAsyncIncrement(value, time)),
//   };
// };
// export default connect(a, b)(Count);

import React, { Component } from "react";
import { Button } from "antd";

class Count extends Component {
  increment = () => {
    const { value } = this.selectVale;
    this.props.increment(value * 1);
  };
  decrement = () => {
    const { value } = this.selectVale;
    this.props.decrement(value * 1);
  };
  incrementIfOdd = () => {
    const { value } = this.selectVale;
    const { count } = this.props;
    if (count % 2 !== 0) {
      this.props.increment(value * 1);
    }
  };
  incrementAsync = () => {
    const { value } = this.selectVale;
    this.props.incrementAsync(value * 1, 1000);
  };
  render() {
    return (
      <div>
        <h1>这是Count组件，下方组件是{this.props.personNum}个人</h1>
        <h1>当前值为：{this.props.count}</h1>
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
export default connect(
  (state) => ({
    count: state.countReducer,
    personNum: state.personReducer.length,
  }),
  {
    increment: createIncrementAction,
    decrement: createDecrementAction,
    incrementAsync: createAsyncIncrement,
  }
)(Count);
