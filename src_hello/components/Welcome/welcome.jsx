import React, { Component } from "react";
import "./welcome.css";
class welcome extends Component {
  state = { count: 0, fatherNum: 0 };
  render() {
    const { count } = this.state;
    const { name } = this.props;
    return (
      <div>
        <h1 className="welcome">Welcome React World</h1>
        <h3>{count}</h3>
        <h4>{name}</h4>
      </div>
    );
  }
  componentDidMount() {
    setInterval(() => {
      const { count } = this.state;
      this.setState({ count: count + 1 });
    }, 1000);
    console.log("componentDidMount");
  }
}
export default welcome;
