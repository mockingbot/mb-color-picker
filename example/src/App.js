import React, { Component } from 'react'

import ColorPicker, { parseColor } from 'mb-color-picker'

// NOTE: if you need to use @ibot icons, you should import this file in your project
import '@ibot/ibot/lib/icon/style/index.css'
import { Icon } from '@ibot/ibot'

const DEFAULT_COLOR = '#1D83BB'

const THEME_COLORS = [
  'transparent',
  '#ffffff',
  '#3f51b5',
  '#ff4081',
  '#e51c23',
  '#009688',
  '#259b24',
  '#8bc34a',
  '#ff9800',
]

const localStorageDelegate = window.localStorage

export default class App extends Component {
  state = {
    color: DEFAULT_COLOR,
    showColorPicker: true,
    colorPickerPosition: [0, 0]
  }

  handleChange = color => this.setState({ color })

  getHistoryColors = () => {
    return JSON.parse(localStorageDelegate.getItem('prevColors') || '[]')
  }

  addLastColorToHistory = () => {
    const { color } = this.state
    const { hex, alpha } = parseColor(color)
    let history = JSON.parse(localStorageDelegate.getItem('prevColors') || '[]')

    if (THEME_COLORS.includes(hex) && alpha === 1 || color === 'transparent') {
      return
    } else if (history.includes(color)) {
      history.splice(history.indexOf(color), 1)
    } else {
      history = history.slice(0, 17)
    }

    history.unshift(color)

    localStorageDelegate.setItem('prevColors', JSON.stringify(history))
  }

  showColorPicker = () => this.setState({ showColorPicker: true })
  hideColorPicker = () => this.setState({ showColorPicker: false })

  centerColorPicker = $colorPicker => {
    const colorPickerRect = $colorPicker.getBoundingClientRect()
    this.setState({
      colorPickerPosition: [
        Math.round((window.innerWidth - colorPickerRect.width) / 2),
        Math.round((window.innerHeight - colorPickerRect.height) / 2),
      ]
    })
  }

  handleDragStart = e => {
    const mouseStartX = e.clientX
    const mouseStartY = e.clientY
    const { colorPickerPosition: [ initialX, initialY ] } = this.state

    const onMouseMove = e => {
      const offsetX = e.clientX - mouseStartX
      const offsetY = e.clientY - mouseStartY
      this.setState({
        colorPickerPosition: [
          initialX + offsetX,
          initialY + offsetY,
        ]
      })
    }

    const onMouseUp = () => {
      document.removeEventListener('mousemove', onMouseMove)
      document.removeEventListener('mouseup', onMouseUp)
    }

    document.addEventListener('mousemove', onMouseMove)
    document.addEventListener('mouseup', onMouseUp)
  }

  render () {
    const {
      color,
      showColorPicker,
      colorPickerPosition: [ colorPickerLeft, colorPickerTop ]
    } = this.state
    const historyColors = this.getHistoryColors()

    return (
      <div className="playground">
        <h1>🌈 Color Picker playground</h1>
        <h3>
          <button onClick={this.showColorPicker}>
            Show color picker
          </button>
        </h3>
        {
          showColorPicker &&
          <div
            style={{
              position: 'absolute',
              top: colorPickerTop,
              left: colorPickerLeft,
            }}>
            <ColorPicker
              color={color}
              onChange={this.handleChange}
              onClose={this.hideColorPicker}
              themeColors={THEME_COLORS}
              customColors={historyColors}
              customColorsHeaderText="History Colors"
              applyDidMountSideEffect={this.centerColorPicker}
              applyWillUnmountSideEffect={this.addLastColorToHistory}
              onDragStart={this.handleDragStart}
            >
              <SystemColorPicker />
            </ColorPicker>
          </div>
        }
      </div>
    )
  }
}

class SystemColorPicker extends React.Component {
  handleSystem = e => this.props.handleChange(e.target.value, this.props.alpha)

  render() {
    const { hex } = this.props
    return (
      <div className="system-color-picker-wrapper">
        <Icon type="dora" name="tube" />
        <input
          className="system-color-picker"
          type="color"
          value={hex}
          onChange={this.handleSystem}
        />
      </div>
    )
  }
}
