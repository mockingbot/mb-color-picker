import React from 'react'
import ColorBand from './ColorBand'
import ColorInput from './ColorInput'

import './index.css'

export default class Controller extends React.Component {
  setColorOffset = (colorOffset) => {
    this.props.handleChange({ colorOffset })
  }
  setOpacityOffset = (opacityOffset) => {
    this.props.handleChange({ opacityOffset })
  }
  render () {
    const { rgb, color, colorOffset, opacityOffset } = this.props
    return (
      <section className="ctrl-pane">
        <div className="band-pane">
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
        </div>
        <div className="value-pane">
          <ColorInput size="7" label="#" maxLength="6" value={color.slice(1)} />
          <ColorInput size="3" label="R" maxLength="3" value={rgb.r} />
          <ColorInput size="3" label="G" maxLength="3" value={rgb.g} />
          <ColorInput size="3" label="B" maxLength="3" value={rgb.b} />
          <ColorInput size="3" label="A" maxLength="6" value={parseInt(opacityOffset)} />
        </div>
      </section>
    )
  }
}

Controller.propTypes = {
  rgb: React.PropTypes.object,
  color: React.PropTypes.string,
  colorOffset: React.PropTypes.string,
  opacityOffset: React.PropTypes.string
}
