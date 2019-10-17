import React, { Component } from 'react'

class Counter extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       count: 0
    }
  }
  // Increment(){
  //   this.setState({
  //     count: this.state.count+1
   
  // }, ()=>{ console.log('callback value '+this.state.count);})
  // //  this.state.count = this.state.count + 1;
  // }
  Increment(){
    this.setState((prevstate, props) => ({
      count: prevstate.count+1
   
    }))
  console.log('callback value '+this.state.count)
  //  this.state.count = this.state.count + 1;
  }
  IncrementFive(){
    this.Increment();
    this.Increment();
    this.Increment();
    this.Increment();
    this.Increment();

  }

  render() {
    return (
      <div>
        Count = {this.state.count}
        <button onClick= {()=> this.IncrementFive()}>inncrement</button>
      </div>
    )
  }
}

export default Counter
