import React, { Component } from "react";
import { Route, Link } from "react-router-dom/cjs/react-router-dom";
import Detail from "./Detail";
export default class Message extends Component {
  state = {
    messageArr: [
      { id: "1", title: "message1" },
      { id: "2", title: "message2" },
      { id: "3", title: "message3" },
    ],
  };
  render() {
    const { messageArr } = this.state;
    return (
      <div>
        <div className="message-title">
          {messageArr.map((item) => {
            return (
                <Link key={item.id} to={`/home/message/detail/${item.id}/${item.title}`}>
                  {item.title}
                </Link>
              //   <Link
              //     key={item.id}
              //     to={`/home/message/detail/?id=${item.id}&title=${item.title}`}
              //   >
              //     {item.title}
              //   </Link>
            //   <Link
            //     key={item.id}
            //     to={{
            //       pathname: "/home/message/detail",
            //       state: { id: item.id, title: item.title },
            //     }}
            //   >
            //     {item.title}
            //   </Link>
            );
          })}
        </div>
        <div className="content">
          <Route path='/home/message/detail/:id/:title' component={Detail}></Route>
          {/* <Route path="/home/message/detail" component={Detail}></Route> */}
          {/* <Route path="/home/message/detail" component={Detail}></Route> */}
        </div>
      </div>
    );
  }
}
