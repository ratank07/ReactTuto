import React, {useState, useEffect} from 'react'

 function EffectHookCount() {
    const [count, setCount] = useState(0)

    useEffect(()=>{
        document.title=`you clicked ${count} times`
    })
  return (
    <div>
      <button onClick={()=> setCount(count+1)}>clicked  {count} times s</button>
      <h2>count value is {count}</h2>
    </div>
  )
}

export default EffectHookCount
