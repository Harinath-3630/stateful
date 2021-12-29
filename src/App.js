
import React, { Component } from 'react';
class Main extends Component {
  constructor() {

    super()
    this.state = {
         first_name:'Kathi',
         last_name:'Harinath'
    }
  }
  render() {
    return (
      <div>
        <p>{this.state.first_name}</p>
        <p>{this.state.last_name}</p>
      </div>
    )
  }
 }
export default Main;