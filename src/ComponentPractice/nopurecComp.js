import React, { Component } from 'react'

 class nopurecComp extends Component {
  render() {
      console.log("germral component")
    return (
      <div>
        genral component {this.props.name}
      </div>
    )
  }
}

export default nopurecComp
