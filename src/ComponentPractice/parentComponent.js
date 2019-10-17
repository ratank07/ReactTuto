import React, { Component } from 'react'
import ChildComp from './childComponent';
class ParentComp extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       parentName : 'Parent'
    }
    this.GreetParent = this.GreetParent.bind(this);
  }
  GreetParent(childName){
      console.log("in geert function caled ")
      alert(`Hello ${this.state.parentName} from ${childName}`)
  }
  
    render() {
    return (
      <div>
        <ChildComp greetHandler={this.GreetParent}/>
      </div>
    )
  }
}

export default ParentComp
