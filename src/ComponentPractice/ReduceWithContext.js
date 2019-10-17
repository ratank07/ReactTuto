import React, {useContext} from 'react'
import {countContext} from '../App'
const ReduceWithContext = () => {
    const countContext = useContext(countContext)
  return (
    <div>
        <div>Count is {countContext.countState}</div>
      <button onClick={()=> countContext.countDispatch('increment')}>Increment</button>
      <button onClick={()=> countContext.countDispatch('decrement')}>Decrement</button>
      <button onClick={()=> countContext.countDispatch('reset')}>Reset</button>
    </div>
  )
}

export default ReduceWithContext
