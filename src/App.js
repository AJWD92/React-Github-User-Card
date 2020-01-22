import React, { Component } from 'react'
import Followers from './components/Follower'
import User from './components/User'

export class App extends Component {
  render() {
    return (
      <div>
        <User />
      <br />
        <Followers/>
      </div>
    )
  }
}

export default App
