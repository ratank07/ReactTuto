import React from 'react'

const withCounter = wrappedComponent => {
    class withCounter extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
         count : 0
      }
    }
    incrementCount = () => {
        this.setState(prevState => {
            return { count: prevState.count +1}
        })
    }
    render(){
        return(
            <wrappedComponent 
            count = {this.state.count}
            incrementCount={this.incrementCount}/>
        )
    }
}
return withCounter
}
export default withCounter