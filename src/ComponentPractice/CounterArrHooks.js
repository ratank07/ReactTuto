import React, {useState} from 'react'

 function CounterArrHooks() {

    const [Items, setCount] = useState([])

    const AddItem = () => {
setCount([...Items, {
    id: Items.length,
    value:Math.floor(Math.random()*10)+1
}])
    }
  return (
    <div>
      <button onClick={AddItem}>Add item</button>
      <ul>
          {Items.map(item => (
              <li key={item.id}>{item.value}</li>
          ))}
      </ul>
    </div>
  )
}

export default CounterArrHooks
