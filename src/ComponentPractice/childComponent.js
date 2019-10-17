import React from 'react'

export default function ChildComp(props){
  return (
    <div>
      <button onClick={props.greetHandler}>Greet Parent</button>
    </div>
  )
}
