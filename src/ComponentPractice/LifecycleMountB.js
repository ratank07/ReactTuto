import React, { Component } from 'react'

export default class LifecycleMountB  extends Component {
  constructor(props) {
    super(props)
  console.log(' constructor LifecycleMountB ')
    this.state = {
       
    }
  }
  static getDerivedStateFromProps(props, state){
  console.log(' getDerivedStateFromProps LifecycleMountB ')

return null;
  }
  componentDidMount(){
    console.log(' componentDidMount LifecycleMountB ')
  }
  shouldComponentUpdate(){
    console.log(' shouldComponentUpdate LifecycleMountB ')
    return true;
  }
  getSnapshotBeforeUpdate(prevProps, prevState){
    console.log(' getSnapshotBeforeUpdate LifecycleMountB ')
    return null
}
  componentDidUpdate(){
    console.log(' componentDidUpdate LifecycleMountB ')
  }
  
  render() {
    console.log(' render LifecycleMountB ')

    return (
      <div>
        LifecycleMountB
        
      </div>
    )
  }
}
