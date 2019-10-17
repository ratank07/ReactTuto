import React, { Component } from 'react'

export default class refscDemo extends Component {
    constructor(props) {
      super(props)
    this.inputRef = React.createRef
      this.state = {
         
      }
    }
    
  render() {
    return (
      <div>
          refs Demo
        <input type='text' ref={this.inputRef}/>
      </div>
    )
  }
}


