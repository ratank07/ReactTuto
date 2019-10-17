import React, {useState, useEffect} from 'react'

const IntervalHookCounter = () => {
     const [count, setCount] = useState(0)

    // const tick =() => {
    //      setCount(countpass => countpass+1)
    //  }
      useEffect(()=> {
         const interval = setInterval(()=> setCount(countinc => countinc+1), 1000)
         return ()=> {
             clearInterval(interval)
         }
     },[])
  return (
    <div>
      in Hook COunter{count}
    </div>
  )
}

export default IntervalHookCounter
