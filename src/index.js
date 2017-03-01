import React from 'react'
import ReactDOM from 'react-dom'

import ColorPicker from './ColorPicker'

ReactDOM.render(
  <ColorPicker
    color={'#bec851'}
    opacity={40}
    onChange={(hex, opacity) => {
      /*console.log(hex, opacity)*/
    }}
  />, document.getElementById('root')
)
