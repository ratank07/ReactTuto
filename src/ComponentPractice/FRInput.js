import React from 'react'

 const FRIput = React.forwardRef((props, ref) => {
  return (
    <div>
      <input type="text" ref={ref}/>
    </div>
  )
})
export default FRIput;
