import React, {useContext} from 'react'
import {UserContext, ChannelContext} from '../App'

const ContextUserB = () => {

  const user = useContext(UserContext)
  const channel = useContext(ChannelContext)
  return (
    <div>
value from context is {user} and channel is {channel}
      {/* <UserContext.Consumer>
          {value => {
              return(
                  <div>User context post title and content is {value}
                      {/* <h3>{post.title}</h3>
                      <h4>{post.body}</h4> */}
                  {/* </div>
              )
          }}
      </UserContext.Consumer> */} 
    </div>
  )
}

export default ContextUserB
