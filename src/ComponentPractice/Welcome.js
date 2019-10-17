import React, { Component}  from 'react';

export class Welcome extends Component {
    constructor(){
        super()
        this.state = {
            message: "Welcome Visitor from state"
        }
    }
    changeMessage() {
        this.setState({
            message: "thank you for subscribing"
        })
    }
    render() {
        return <div><h1>{this.state.message}</h1>
        <button onClick={()=>this.changeMessage()}>Subscribe</button>
        </div>
    }
}
export default Welcome;