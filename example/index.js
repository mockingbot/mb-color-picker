import React from 'react'
import ReactDOM from 'react-dom'

import ColorPicker from '../src'

const themes = []
for (let i = 0 ; i < 9 ; i ++) {
  themes.push('#' + (Math.random() * 0xFFFFFF >> 0).toString(16))
}

class App extends React.Component {
  constructor () {
    super()
    this.state = {
      color: '#ff0000',
      opacity: 100
    }
  }
  handleChange = (color, opacity) => {
    this.setState({ color, opacity })
  }
  render () {
    const { color, opacity } = this.state
    return (
      <ColorPicker
        color={color}
        opacity={opacity}
        themes={themes}
        style={{left: 50, top: 30}}
        onChange={this.handleChange}
      />
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
