import React, {useState,useEffect} from 'react'
import axios from 'axios'
import ContextUserB from './ContextUserB'
const DataFetchHttp = () => {
    const [posts, setPosts] = useState([])
    const [id, setId] = useState(1)
    const [idonBtnClick, setidonBtnClick] = useState(1)

        useEffect(()=>{ axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then(res=>{setPosts(res.data)})},[idonBtnClick])
    console.log(posts)
   const FetchPostHandler = () =>{
            setidonBtnClick(id)
    }
  return (
    <div>
        <input type="text" value={id} onChange={(e)=>setId(e.target.value)}></input>
        <button onClick={FetchPostHandler}>Fetch post</button>
      <div>
      <h1>{posts.title}</h1>
      <h2>{posts.body}</h2>

      </div>
<ContextUserB />
     
  {/* <ul>
  {posts.map(post=>(
  <li key={post.id}>{post.title}</li>
  ))
  }
  </ul>  */}
 </div>
  )
}

export default DataFetchHttp
