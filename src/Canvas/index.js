import React from 'react'
import Circle from './Circle'
import styles from './index.sass'

export default class Canvas extends React.Component {
  componentDidMount () {
    /*
      TODO rect的计算放到DidMount会导致页面滚动后, clientRect变化了,
      但使用的还是原数值, 但考虑到墨刀没有滚动, 放在这里能省去不少重复的计算
    */
    const rect = this.canvas.getBoundingClientRect()
    this.top = rect.top
    this.left = rect.left
    this.width = rect.width
    this.height = rect.height
  }
  handleDown = (e) => {
    this.mousedown = true
    this.updatePosition(e.nativeEvent)
    document.addEventListener('mousemove', this.updatePosition)
    document.addEventListener('mouseup', this.detachEvent)
  }
  updatePosition = (e) => {
    if (!this.mousedown) return
    const { clientX, clientY } = e
    let percentX = (clientX - this.left) / this.width * 100
    let percentY = (clientY - this.top) / this.height * 100
    if (percentX < 0)   percentX = 0
    if (percentX > 100) percentX = 100
    if (percentY < 0)   percentY = 0
    if (percentY > 100) percentY = 100
    const canvasLeft = percentX + '%'
    const canvasTop = percentY + '%'
    this.props.handleChange({ canvasLeft, canvasTop })
  }
  detachEvent = (e) => {
    this.mouseDown = false
    document.removeEventListener('mousemove', this.updatePosition)
    document.removeEventListener('mouseup', this.detachEvent)
  }
  render () {
    const { color: backgroundColor, left, top } = this.props
    return (
      <section
        ref={(ref) => { this.canvas = ref }}
        className={styles['canvas-pane']}
        style={{backgroundColor}}
        onMouseDown={this.handleDown}>
        <div className={styles['overlay-1']}></div>
        <div className={styles['overlay-2']}></div>
        <Circle {...{left, top}} />
      </section>
    )
  }
}

Canvas.propTypes = {
  changePosition: React.PropTypes.func
}
