import React, { Component } from 'react'
import LifecycleMountB from './LifecycleMountB'
export default class LifecycleMountA  extends Component {
  constructor(props) {
    super(props)
  console.log(' constructor LifecycleMountA ')
    this.state = {
       name: 'ratan'
    }
  }
  static getDerivedStateFromProps(props, state){
  console.log(' getDerivedStateFromProps LifecycleMountA ')

return null;
  }
  componentDidMount(){
    console.log(' componentDidMount LifecycleMountA ')
  }
  shouldComponentUpdate(){
    console.log(' shouldComponentUpdate LifecycleMountA ')
    return true;
  }
  getSnapshotBeforeUpdate(prevProps, prevState){
    console.log(' getSnapshotBeforeUpdate LifecycleMountA ')
    return null
 
  }
  componentDidUpdate(){
    console.log(' componentDidUpdate LifecycleMountA ')
  }

  ChangeState = ()=>{
    this.setState({
      name: 'CodeEvaluation'
    })
  }
  render() {
    console.log(' render LifecycleMountA ')
    return (
      <div>
        LifecycleMountA
        <button onClick={this.ChangeState}>change state</button>
        <LifecycleMountB />
      </div>
    )
  }
}
