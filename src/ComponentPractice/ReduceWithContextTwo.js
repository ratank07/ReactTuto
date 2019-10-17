import React, {useContext} from 'react'
import countContext from '../App'
const ReduceWithContextTwo = () => {
 const context = useContext(countContext)
  return (
  
       <div>
        {/* <div>Count is {context.countState}</div> */}
      <button onClick={()=> context.countDispatch('increment')}>Increment</button>
      <button onClick={()=> context.countDispatch('decrement')}>Decrement</button>
      <button onClick={()=> context.countDispatch('reset')}>Reset</button>
    </div>
   
  )
}

export default ReduceWithContextTwo
