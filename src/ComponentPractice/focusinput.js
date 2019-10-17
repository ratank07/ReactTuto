import React, { Component } from 'react'
import Input from './input'
class focusinput extends Component {
 constructor(props) {
   super(props)
   this.componentRef = React.createRef()
   this.state = {
      
   }
 
}
    focusonInputHandler = ()=>{
     //   this.componentRef.current.focusinput() // focusinput is in input comp 
    }

    render() {
    return (
      <div>
          <Input  ref={this.componentRef}/>
        <button onClick={this.focusonInputHandler}>Focus</button>
      </div>
    )
  }
}

export default focusinput
