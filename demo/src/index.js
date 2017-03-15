import React from 'react'
import ReactDOM from 'react-dom'

import ColorPicker from '../../src'

const themes = []
for (let i = 0 ; i < 9 ; i ++) {
  themes.push('#' + (Math.random() * 0xFFFFFF >> 0).toString(16))
}

ReactDOM.render(
  <ColorPicker
    color={'#bec851'}
    opacity={40}
    themes={themes}
    onChange={(hex, opacity) => {
      /*console.log(hex, opacity)*/
    }}
  />, document.getElementById('demo')
)
