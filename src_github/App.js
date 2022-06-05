import React, { Component } from "react";
import Search from "./components/Search/index";
import List from "./components/List";
class App extends Component {
  state = { users: [], isFirst: true, isLoading: false, err: "" };
  updateAppState = (stateObj) =>{
    this.setState(stateObj)
  }
  render() {
   return (
      <div>
        <Search updateAppState={this.updateAppState} />
        <List {...this.state} />
      </div>
    );
  }
}
export default App;
