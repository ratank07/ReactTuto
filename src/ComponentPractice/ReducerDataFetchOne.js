import React, {useEffect,useReducer, useState} from 'react'
import axios from 'axios'

const initialState = {
    loading:true,
    error:'',
    post:{}
}

const reducer = (state,action)=>{
console.log("inside reducer")
    switch(action.type){
        case 'FETCH_Success': 
        return {
            loading: false,
            error:'',
            post:action.payload
        }
        case 'FETCH_Error': 
        return {
            loading: false,
            error:'Something went wrong',
            post:{}
        }
        default : return state
    }
}
const ReducerDataFetchOne = () => {
    // //code for simple useState
    // const [loading, setLOading] = useState(true)
    // const [error, setError] = useState('')
    // const [post,setPost]= useState({})

    const [state, dispatch] = useReducer(reducer, initialState)
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/1`)
        .then(res=>{
            // setLOading(false)
            // setPost(res.data)
            // setError('')
            dispatch({type:'FETCH_Success', payload:res.data})
        })
        .catch(err=>{
            // setLOading(false)
            // setPost({})
            // setError('Something went wrong')
            dispatch({type:'FETCH_Error'})

        })
    },[])
  return (
    <div>
        <h3>From reducer Fetch</h3>
      {state.loading? 'loading': state.post.title}
      {state.error ? 'error loading post': null}
    </div>
  )
}

export default ReducerDataFetchOne
