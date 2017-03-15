import React from 'react'

import Theme from './Theme'
import Canvas from './Canvas'
import History from './History'
import Bands from './Bands'
import DashBoard from './DashBoard'

import './index.sass'
import { hexToHsb, hsbToRgb, rgbToHex, hsbToHex } from './utils'

export default class ColorPicker extends React.Component {
  constructor (props) {
    super()
    const hsb = hexToHsb(props.color)
    console.log(props.color)
    console.log(hsb)
    const opacity = props.opacity
    this.state = {
      colorOffset: hsb.h + '%',
      canvasLeft: hsb.s + '%',
      canvasTop: hsb.b + '%',
      opacityOffset: opacity + '%',
    }
  }
  handleChange = (state) => {
    this.setState(state)
  }
  componentDidUpdate () {
    this.props.onChange(this.hex, this.opacity)
  }
  render () {
    const { canvasLeft, canvasTop, colorOffset, opacityOffset } = this.state
    const rgb = hsbToRgb({
      h: parseInt(colorOffset) * 360 / 100,
      s: parseInt(canvasLeft),
      b: 100 - parseInt(canvasTop)
    })
    const canvasColor = '#' + hsbToHex({
      h: parseInt(colorOffset) * 360 / 100,
      s: 100,
      b: 100
    })
    this.hex = '#' + rgbToHex(rgb)
    this.opacity = parseInt(opacityOffset)

    return (
      <div className="mb-colorpicker">
        <Theme themes={this.props.themes} />
        <Canvas top={canvasTop} left={canvasLeft}
          color={canvasColor} handleChange={this.handleChange}>
        </Canvas>
        <Bands
          color={this.hex} colorOffset={colorOffset}
          opacityOffset={opacityOffset} handleChange={this.handleChange}>
        </Bands>
        <DashBoard color={this.hex} rgb={rgb} alpha={this.opacity} />
        <span className="color-hr"/>
        <History />
      </div>
    )
  }
}

ColorPicker.propTypes = {
  color: React.PropTypes.string,
  themes: React.PropTypes.array,
  opacity: React.PropTypes.number
}
ColorPicker.defaultProps = {
  color: '#bec851',
  opacity: 50
}
