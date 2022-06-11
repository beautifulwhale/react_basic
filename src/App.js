import React, { Component } from "react";
import ChildCpn from './ChildCpn'
import Navbar from "./Navbar";
class App extends Component {
  state = {
    tabs: [
      { id: 1, name: '新款' },
      { id: 2, name: '流行' },
      { id: 3, name: '精选' },
    ],
    activeName: 1,
  }

  clickTabName = (id) => {
    this.setState({
      activeName: id
    })
  }
  render() {
    const { tabs, activeName } = this.state
    let currentTitle = activeName === 1 ? '新款' : activeName === 2 ? '流行' : '精选'
    return (
      <div>
        <ChildCpn tabs={tabs} activeName={activeName} clickTabName={this.clickTabName} />
        <section>
          <h1>
            {currentTitle}
          </h1>
        </section>
        <Navbar leftSlot={<span>left</span>} centerSlot={<h3>center</h3>} rightSlot={<strong>right</strong>} />
      </div>
    );
  }
}
export default App;
