import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import MyNavLink from "./components/MyNavLink";
class App extends Component {
  render() {
    return (
      <div>
        <div className="aside">
          {/* <Link to="/home">跳转到Home</Link> */}
          {/* <Link to="/about">跳转到About</Link> */}
          <MyNavLink to="/home">Home123</MyNavLink>
          <MyNavLink to="/about">About456</MyNavLink>
        </div>
        <div className="content">
          <Route path="/home" component={Home} />
          <Route path="/about" component={About} />
          <Redirect to="/home" />
        </div>
      </div>
    );
  }
}
export default App;
