import React, { Component } from 'react'
import FRInput from './FRInput'
class FRParentInput extends Component {
    constructor(props) {
      super(props)
        this.inputerf = React.createRef()
      this.state = {
         
      }
    }
    ForwordFocus = ()=>{
        this.inputerf.current.focus()
    }
  render() {
    return (
      <div>
          <FRInput ref={this.inputerf} />
        <button onClick={this.ForwordFocus}>focus input</button>
      </div>
    )
  }
}

export default FRParentInput
