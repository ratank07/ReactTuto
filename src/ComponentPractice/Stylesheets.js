import React from 'react'
import './myStyles.css'

const heading = {
    fontSize: '32px',
    color: 'red'
}
export default function Stylesheet(props) {
   const className = props.primary ? 'primary' : ""
  return (
    <div>
      <h1 className={ `${className} font-ml`}>Stylesheets</h1>
    <h2 style={heading}>Inline styles</h2>
    </div>
  )
}
