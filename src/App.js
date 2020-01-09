import React, { Component } from 'react'
import MasterHog from './MasterHog'
import './App.css'
import offspring from './db'

/*


*/


export default class App extends Component {
  constructor(){
    super()
    this.state = {
      offspring: offspring
    }
  }


  render() {
    // console.log(offspring)
    return (
      <div className="App">
        <MasterHog offspring={this.state.offspring}/>
      </div>
    )
  }

}
