//import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import React from 'react'

export default function ProtalsDemo() {
    return ReactDOM.createPortal(
        <h1>
          Protals demo app
        </h1>,
        document.getElementById('portal-root')
      )
}


//export default ProtalsDemo
