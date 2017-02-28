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
    const { color, colorOffset, opacityOffset } = this.props
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
            <div className="color-preview" style={{ backgroundColor: color }}></div>
          </div>
        </div>
        <div className="value-pane">
          <ColorInput size="7" label="#" maxLength="6" value="2253BB" />
          <ColorInput size="3" label="R" maxLength="3" value="34" />
          <ColorInput size="3" label="G" maxLength="3" value="83" />
          <ColorInput size="3" label="B" maxLength="3" value="187" />
          <ColorInput size="3" label="A" maxLength="6" value="50" />
        </div>
      </section>
    )
  }
}

Controller.propTypes = {
  color: React.PropTypes.string,
  colorOffset: React.PropTypes.num,
  opacityOffset: React.PropTypes.num
}
