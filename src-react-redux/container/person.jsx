import { nanoid } from "nanoid";
import React, { Component } from "react";
import { connect } from "react-redux";
import { createAddPerson } from "../redux/actions/person";
class Person extends Component {
  addPerson = () => {
    const name = this.nameNode.value;
    const age = this.ageNode.value;
    this.props.addPerson({ id: nanoid(), name, age });
    this.nameNode.value = "";
    this.ageNode.value = "";
  };
  render() {
    return (
      <div>
        <h1>这是Person组件,上方组件求和为{this.props.countNum}</h1>
        姓名： <input type="text" ref={(c) => (this.nameNode = c)} />
        年龄： <input type="text" ref={(c) => (this.ageNode = c)} />
        <button onClick={this.addPerson}>添加人</button>
        <ul>
          {this.props.personList.map((p) => {
            return (
              <li key={p.id}>
                姓名：{p.name}----年龄：{p.age}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default connect(
  (state) => ({
    personList: state.personReducer,
    countNum: state.countReducer,
  }),
  {
    addPerson: createAddPerson,
  }
)(Person);
