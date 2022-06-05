import React, { Component } from "react";
import axios from "axios";
class Search extends Component {
  search = () => {
    const {
      keyWordElement: { value: keyWords },
    } = this;
    this.props.updateAppState({ isFirst: false, isLoading: true });
    axios
      .get(`http://api.github.com/search/users?q=${keyWords}`)
      .then((res) => {
        // console.log("成功的~", res.data);
        this.props.updateAppState({ isLoading: false, users: res.data.items });
      })
      .catch((err) => {
        this.props.updateAppState({ isLoading: false, err: err.message });
      });
    // 测试react代理的方法
    // axios
    //   .get("/api/students")
    //   .then((res) => {
    //     console.log("成功的~", res.data);
    //   })
    //   .catch((err) => {
    //     console.log("失败了～", err);
    //   });
  };
  render() {
    return (
      <section className="jumbotron">
        <h1 className="jumbotron-heading">Search Github Users</h1>
        <div>
          <input
            type="text"
            ref={(c) => (this.keyWordElement = c)}
            placeholder="enter the name you search"
          />
          &nbsp;<button onClick={this.search}>Search</button>
        </div>
      </section>
    );
  }
}
export default Search;
