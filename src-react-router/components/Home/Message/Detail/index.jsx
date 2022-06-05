import React, { Component } from "react";
export default class Detail extends Component {
  state = {
    messageContent: [
      { id: "1", content: "hello Jay" },
      { id: "2", content: "hello Eason" },
      { id: "3", content: "hello VAE" },
    ],
  };
  render() {
    //params参数
    const { id, title } = this.props.match.params;
    //query参数
    // const { search } = this.props.location;
    // const result = new URLSearchParams(search.slice(1));
    // const id = result.get("id");
    // const title = result.get("title");
    // state参数
    // const { id, title } = this.props.location.state;
    const findResult = this.state.messageContent.find((item) => {
      return item.id === id;
    });
    return (
      <div>
        <h1>id:{id}</h1>
        <h1>title:{title}</h1>
        <h1>content:{findResult.content}</h1>
      </div>
    );
  }
}
