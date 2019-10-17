import React, { Component } from 'react'
import axios from 'axios'
class PostrequestHttp extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         userId: '',
         title:'',
         body:''
      }
    }
    changeHandler = (e) => {
        this.setState({[e.target.name]: e.target.value })
    } 
    submitHandler = e => {
        e.preventDefault()
        console.log(this.state)
        axios.post('https://jsonplaceholder.typicode.com/posts1',this.state)
        .then(res=>{
            console.log("response "+JSON.stringify(res.data))
        })
        .then(err=>{
            console.log("error is "+err)
        })
    }
  render() {
      const {userId, title, body} = this.state;
    return (
      <div>
        <form onSubmit={this.submitHandler}>
            <div>
                <input
            type="text"
            name="userId"
            value={userId}
            onChange={this.changeHandler}
            />
            <br/>
             <input
            type="text"
            name="title"
            value={title}
            onChange={this.changeHandler}
            />
            <br/>

                <input
            type="text"
            name="body"
            value={body}
            onChange={this.changeHandler}
            />
            </div>
            <button type="submit">Post data</button>
        </form> 
      </div>
    )
  }
}

export default PostrequestHttp
