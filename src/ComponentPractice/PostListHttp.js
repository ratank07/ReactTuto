import React, { Component } from 'react'
import axios from 'axios';
export default class PostListHttp extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         posts: [],
         errMessg: ""
      }
    }
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts1')
        .then(response =>{
            console.log(response)
            this.setState({posts: response.data})
        })
        .catch(error=> {
            console.log(error)
            this.setState({errMessg:'error retriving data'})
        })
    }
    
  render() {
      const {posts, errMessg} = this.state
    return (
      <div>
        List of posts
        {
            posts.length ? 
            posts.map(post => <div key={post.id}>{post.title}</div>) :
            null
        }
        {
            errMessg ? <div>{errMessg}</div> : 
            null
        }
      </div>
    )
  }
}
