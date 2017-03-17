import React from 'react'

import Theme from './Theme'
import Canvas from './Canvas'
import History from './History'
import Bands from './Bands'
import DashBoard from './DashBoard'

import styles from './index.sass'

import { hexToHsb, hexToRgb, hsbToHex } from './utils'

export default class ColorPicker extends React.Component {
  constructor ({ color, opacity }) {
    super()
    this.setPosInfo(color, opacity)
  }
  setPosInfo (color, opacity = 100) {
    const hsb = hexToHsb(color)
    this.colorOffset = hsb.h + '%'
    this.canvasLeft = hsb.s + '%'
    this.canvasTop = 100 - hsb.b + '%'
    this.opacityOffset = opacity + '%'
  }
  handleChange = (state) => {
    Object.assign(this, state)
    const { canvasLeft, canvasTop, colorOffset, opacityOffset } = this
    // console.log(canvasLeft, canvasTop, colorOffset, opacityOffset)
    const opacity = parseInt(opacityOffset)
    const hex = '#' + hsbToHex({
      h: parseInt(colorOffset) * 360 / 100,
      s: parseInt(canvasLeft),
      b: 100 - parseInt(canvasTop)
    })
    this.props.onChange(hex, opacity)
  }
  handleTheme = (color) => {
    this.setPosInfo(color)
    this.props.onChange(color, 100)
  }
  render () {
    const { color, opacity, style, themes } = this.props
    const { canvasLeft, canvasTop, colorOffset, opacityOffset } = this
    // console.log(canvasLeft, canvasTop, colorOffset, opacityOffset)
    const rgb = hexToRgb(color)
    const canvasColor = '#' + hsbToHex({
      h: parseInt(colorOffset) * 360 / 100,
      s: 100,
      b: 100
    })

    return (
      <div className={styles['colorpicker']} style={style}>
        <Theme themes={themes} handleTheme={this.handleTheme} />
        <Canvas top={canvasTop} left={canvasLeft}
          color={canvasColor} handleChange={this.handleChange}>
        </Canvas>
        <Bands
          color={color} colorOffset={colorOffset}
          opacityOffset={opacityOffset} handleChange={this.handleChange}>
        </Bands>
        <DashBoard color={color} rgb={rgb} alpha={opacity} />
        <span className={styles['hr']}/>
        <History />
      </div>
    )
  }
}

ColorPicker.propTypes = {
  color: React.PropTypes.string,
  themes: React.PropTypes.array,
  opacity: React.PropTypes.number,
  onChange: React.PropTypes.func,
  style: React.PropTypes.object
}
ColorPicker.defaultProps = {
  color: '#F55D54',
  opacity: 50
}
