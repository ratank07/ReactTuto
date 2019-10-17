import React, { Component } from 'react'

class HoverCountertwo extends Component {
    constructor(props) {
      super(props)
  //  const this.count = 0;
      this.state = {
         count: 0
      }
    }
    HoverHandler = ()=> {
        this.setState(prevState=>{
           return {
            count : prevState.count +1
           }  
        })
    }

  render() {
      const {count } = this.state.count
    return (
      <div>
        <h1 onMouseOver={this.HoverHandler}>Hovered {count} timess</h1>
      </div>
    )
  }
}

export default HoverCountertwo
