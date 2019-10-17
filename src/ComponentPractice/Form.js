import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
          uname:'',
          comment: '',
          Skill:'Angular'
      }
    }
    UnameHandler = (event) => {
        this.setState({
            uname: event.target.value
        }
          
        )
    }
    CommentHandler = event =>{
        this.setState({
            comment: event.target.value
        }
          
        )
    }
    submitHandler = event => {
        console.log(`uname is ${this.state.uname}`)
        alert(` ${this.state.uname} ${this.state.comment} ${this.state.Skill}`)
        event.preventDefault();
    }

    TopicHandler = (event)=>{
        this.setState({
            Skill: event.target.value
        })
        
    }
    render() {
    return (
      <div>
        <form onSubmit={this.submitHandler}>
            <div>
                <label name='uname'>Enter Name</label>
                <input type="text" value={this.state.uname} onChange={this.UnameHandler}/>
            </div>
            <div>
                <label name='Comment'>Comment</label>
                <input type="textarea" value={this.state.comment} onChange={this.CommentHandler}/>
            </div>
            <div>
            <label name='Skill'>Skill</label>
                <select name='Skill' value={this.state.Skill} onChange={this.TopicHandler}>
                <option value="Angular" >Angular</option>
                <option value="React" >React</option>
                <option value="Vue" >Vue</option>
                </select>
            </div>
            <button type="">Submit Data</button>
        </form>
      </div>
    )
  }
}

export default Form
