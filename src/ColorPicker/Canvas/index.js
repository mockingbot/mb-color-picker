import React from 'react'
import Circle from './Circle'
import './index.css'

export default class Canvas extends React.Component {
  handleDown = (e) => {
    this.mousedown = true
    const { offsetX: canvasLeft, offsetY: canvasTop } = e.nativeEvent
    this.props.handleChange({ canvasLeft, canvasTop })
  }
  handleMove = (e) => {
    if (!this.mousedown) return
    const { offsetX: canvasLeft, offsetY: canvasTop } = e.nativeEvent
    this.props.handleChange({ canvasLeft, canvasTop })
  }
  handleUp = (e) => {
    this.mousedown = false
  }
  render () {
    const backgroundColor = 'red'
    const { left, top } = this.props
    return (
      <section
        className="canvas-pane"
        style={{backgroundColor}}
        onMouseDown={this.handleDown}
        onMouseMove={this.handleMove}
        onMouseUp={this.handleUp}>
        <div className="overlay-1"></div>
        <div className="overlay-2"></div>
        <Circle {...{left, top}} />
      </section>
    )
  }
}

Canvas.propTypes = {
  changePosition: React.PropTypes.func
}
