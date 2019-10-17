import React, { Component } from 'react'

class UserGreetings extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       isLoggedin : true
    }
  }
  
    render() {
        //short circuits
        return  this.state.isLoggedin && <div>  Welcome Ratan</div>
        //ternary opre
        // return(
        //     this.state.isLoggedin? <div>  Welcome Ratan</div> :<div>  Welcome Guest</div>
        // )


        // element apprioch

    //     let message 
    //     if(this.state.isLoggedin){
    //         message = <div>  Welcome Ratan</div>
    //     }
    //     else {
    //          message = <div>  Welcome Guest</div>
    //     }
    //    return <div>{message}</div>
        // if(this.state.isLoggedin){
        
        //   return   <div>  Welcome Guest</div>
        // }
        // else     return   <div>  Welcome Ratan</div>
    // return (
    // //   <div>
    // //       <div>  Welcome Guest</div>
    // //       <div>  Welcome Ratan</div>
    // //   </div>
    // )
  }
}

export default UserGreetings
