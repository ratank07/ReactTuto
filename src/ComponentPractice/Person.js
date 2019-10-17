import React from 'react'

export default function Person({person}){
  return (
    <div>
      <h3>
         Name is {person.name}. Age is {person.age} and Skills is {person.skill}
    </h3>
    </div>
  )
}
