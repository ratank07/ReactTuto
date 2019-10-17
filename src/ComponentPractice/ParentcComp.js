import React, { Component } from 'react'
import MemofComp from './MemofCopm'
// import nopurecComp from './nopurecComp';
import precComp from './purecComp'
class ParentcComp extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:'ratan'
      }
    }
    componentDidMount(){
        setInterval(()=>{
            this.setState({
                name:'ratan'
            })
        }, 2000)
    }
  render() {
    console.log("comp re-rendored");

    return (
      <div>
        Parent Component
        <MemofComp name={this.state.name}/>
        {/* <precComp name={this.state.name}></precComp>
        <nopurecComp name={this.state.name}></nopurecComp> */}
      </div>
    )
  }
}

export default ParentcComp
