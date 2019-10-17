import React from 'react'
import {useState} from 'react'

export default function ObjectHook() {
  const [name, setName] = useState({fname:'', lname:''})
    return (
    <div>
      <input
      type='text'
      value={name.fname}
      onChange={e=> setName({...name, fname:e.target.value})}
      />
         <input
      type='text'
      value={name.lname}
      onChange={e=> setName({...name, lname:e.target.value})}
      />
      <br/>
      <h2>Your fist name is{name.fname}</h2>
      <h2>Your last name is{name.lname}</h2>

    </div>
  )
}
