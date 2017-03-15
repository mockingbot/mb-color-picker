import React from 'react'
import ColorBand from './ColorBand'

import './index.css'

export default class Bands extends React.Component {
  setColorOffset = (colorOffset) => {
    this.props.handleChange({ colorOffset })
  }
  setOpacityOffset = (opacityOffset) => {
    this.props.handleChange({ opacityOffset })
  }
  render () {
    const { color, colorOffset, opacityOffset } = this.props
    return (
      <section className="band-pane">
        <div className="color-bands">
          <ColorBand
            type="color"
            left={colorOffset}
            handleChange={this.setColorOffset} />
          <ColorBand
            type="opacity"
            color={color}
            left={opacityOffset}
            handleChange={this.setOpacityOffset} />
        </div>
        <div className="color-preview-bg">
          <div className="color-preview" style={{ backgroundColor: color, opacity: parseInt(opacityOffset) / 100 }}></div>
        </div>
      </section>
    )
  }
}

Bands.propTypes = {
  color: React.PropTypes.string,
  colorOffset: React.PropTypes.string,
  opacityOffset: React.PropTypes.string
}
