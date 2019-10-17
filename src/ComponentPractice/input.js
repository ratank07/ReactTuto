import React, { Component } from 'react'

class Input extends Component {
  constructor(props) {
    super(props)
  this.inputRef = React.createRef()
    this.state = {
       
    }
  }
  
    render() {
    return (
      <div>
        <input ref={this.inputRef}/>
      </div>
    )
  }
}

export default Input
