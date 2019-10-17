import React, { Component } from 'react'

class ErrorBoundary extends Component {
  
    constructor(props) {
      super(props)
    
      this.state = {
         hasError: false
      }
    }
    // static getDerivedStateFromError(error){
    //     return {
    //         hasError: true
    //     }
    // }
    componentDidCatch(error, info){
        this.setState({
            hasError: true
        })
console.log(error)
console.log(info)
    }
    

    render() {
        if(this.state.hasError){
            return (
                <div>Here comes JSX !</div>
            );
        }
        else{
            return this.props.children

        }
   
  }
}

export default ErrorBoundary
