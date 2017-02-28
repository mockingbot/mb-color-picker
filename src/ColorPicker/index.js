import React from 'react'

import Theme from './Theme'
import Canvas from './Canvas'
import History from './History'
import Controller from './Controller'

import './index.css'

export default class ColorPicker extends React.Component {
  constructor (props) {
    super()
    this.state = {
      canvasTop: 30,
      canvasLeft: 50,
      colorOffset: 30,
      opacityOffset: 40
    }
  }
  handleChange = (state) => {
    this.setState(state)
  }
  render () {
    const { canvasLeft, canvasTop, colorOffset, opacityOffset } = this.state
    const { color } = this.props
    return (
      <div className="mb-colorpicker">
        <Theme />
        <Canvas
          color={color}
          top={canvasTop}
          left={canvasLeft}
          handleChange={this.handleChange}
        />
        <Controller
          color={color}
          colorOffset={colorOffset}
          opacityOffset={opacityOffset}
          handleChange={this.handleChange}
        />
        <span className="color-hr"/>
        <History />
      </div>
    )
  }
}

ColorPicker.propTypes = {
  color: React.PropTypes.string
}
ColorPicker.defaultProps = {
  color: '#F00'
}
