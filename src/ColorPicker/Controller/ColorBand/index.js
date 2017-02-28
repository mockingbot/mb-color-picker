import React from 'react'
import './index.css'

const CLASSNAME = {
  color: 'color-band',
  opacity: 'opacity-band'
}

export default class ColorBand extends React.Component {
  handleDown = (e) => {
    this.mouseDown = true
    const { offsetX } = e.nativeEvent
    this.props.handleChange(offsetX)
  }
  handleMove = (e) => {
    if (!this.mouseDown) return
    const { offsetX } = e.nativeEvent
    this.props.handleChange(offsetX)
  }
  handleUp = (e) => {
    this.mouseDown = false
  }
  render () {
    const { type, left, color } = this.props
    return (
      <div
        className={`band ${CLASSNAME[type]}`}
        onMouseDown={this.handleDown}
        onMouseMove={this.handleMove}
        onMouseUp={this.handleUp}
        style={{ backgroundColor: color }}>
        <span className="value-btn" style={{ left }}></span>
      </div>
    )
  }
}
