import React, { PureComponent } from 'react'

class precComp extends PureComponent {
  render() {
    return (
      <div>
        pure component {this.props.name}
      </div>
    )
  }
}
export default precComp