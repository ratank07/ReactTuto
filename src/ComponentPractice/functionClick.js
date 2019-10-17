import React, { Component } from 'react'

class FuncClick extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
          message: 'hii'
      }
      this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick(){
        this.setState({
            message: "hello, welcome"
        })
        
        console.log(this);
    }
  render() {
    return (
      <div>
          {this.state.message}
        {/* <button onClick={this.handleClick.bind(this)}>Click</button> */}
        {/* <button onClick={() => this.handleClick()}>Click</button> */}
        <button onClick={this.handleClick}>Click</button>



      </div>
    )
  }
}

export default FuncClick
