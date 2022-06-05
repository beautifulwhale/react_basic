import React, { Component } from "react";
import Hello from "./components/Hello/hello";
import Welcome from "./components/Welcome/welcome";
class App extends Component {
  render() {
    return (
      <div>
        <Hello />
        <Welcome name={888} />
      </div>
    );
  }
}
export default App;
