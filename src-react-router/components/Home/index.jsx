import React, { Component } from "react";
import {
  Route,
  Switch,
  Redirect,
} from "react-router-dom/cjs/react-router-dom.min";
import News from "./News";
import Message from "./Message";
import MyNavLink from "../MyNavLink";
export default class Home extends Component {
  render() {
    return (
      <div>
        <h1> I have two Sons. One is News,other is Message</h1>
        <div className="sons">
          <MyNavLink to="/home/news">News</MyNavLink>
          <MyNavLink to="/home/message">Message</MyNavLink>
        </div>
        <div className="sons-content">
          <Switch>
            <Route path="/home/news" component={News}></Route>
            <Route path="/home/message" component={Message}></Route>
            <Redirect to='/home/news'/>
          </Switch>
        </div>
      </div>
    );
  }
}
