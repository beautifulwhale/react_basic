import React, { Component } from "react";
import "./index.css";
class List extends Component {
  render() {
    const { users, isFirst, isLoading, err } = this.props;
    return (
      <div>
        {isFirst ? (
          <h1>欢迎来到搜索，输入用户名进行搜索</h1>
        ) : isLoading ? (
          <h1>Loading....</h1>
        ) : err ? (
          <h1 style={{ color: "red" }}>{err}</h1>
        ) : (
          users.map((item) => {
            return (
              <div className="card" key={item.id}>
                <a href={item.html_url} target="_blank" rel="noreferrer">
                  <img
                    src={item.avatar_url}
                    alt=""
                    style={{ width: "100px" }}
                  />
                  <p className="card-text">{item.login}</p>
                </a>
              </div>
            );
          })
        )}
      </div>
    );
  }
}
export default List;
