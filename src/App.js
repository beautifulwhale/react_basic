import React, { Component } from 'react'
import HighOrderComponent from './HighOrderComponent'
import UseStyleComponent from './UseStyleComponent'
export default class App extends Component {
  render() {
    return (
      <div>
        <HighOrderComponent/>
        <UseStyleComponent/>
      </div>
    )
  }
}
