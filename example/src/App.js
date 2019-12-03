import React, { Component } from 'react'
import uniqBy from 'lodash/unionBy'
import { colorPanelList } from './constant'
import ColorPicker, { parseColor } from 'mb-color-picker'

// NOTE: if you need to use @ibot icons, you should import this file in your project
import '@ibot/ibot/lib/icon/index.css'
import Icon from '@ibot/ibot/lib/icon'

const DEFAULT_COLOR = '#1D83BB'

const localStorageDelegate = window.localStorage

export default class App extends Component {
  state = {
    color: DEFAULT_COLOR,
    showColorPicker: true,
    colorPickerPosition: [0, 0],
    currentSelect: '最近使用',
    isClickExpand: false
  }

  handleChangeSelect = currentSelect => this.setState({ currentSelect })

  handleChange = color => this.setState({ color })

  handleConfirm = color => this.setState({ color })

  addHistoryColors = () => {
    colorPanelList.unshift({
      name: '最近使用',
      key: 'history',
      colors: JSON.parse(window.localStorage.getItem('prevColors') || '[]')
    })
    return colorPanelList
  }

  addLastColorToHistory = () => {
    const { color } = this.state
    let history = JSON.parse(localStorageDelegate.getItem('prevColors') || '[]')

    if (history.includes(color)) {
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

  handleToogleExpand = () => {
    this.setState({ isClickExpand: !this.state.isClickExpand })
  }

  render () {
    const {
      color,
      showColorPicker,
      colorPickerPosition: [ colorPickerLeft, colorPickerTop ],
      currentSelect,
      isClickExpand
    } = this.state
    const colorsData = uniqBy(this.addHistoryColors(), 'key')

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
              onConfirm={this.handleConfirm}
              onClose={this.hideColorPicker}
              applyDidMountSideEffect={this.centerColorPicker}
              applyWillUnmountSideEffect={this.addLastColorToHistory}
              onDragStart={this.handleDragStart}

              colorPanelList={colorsData}
              onChangeSelect={this.handleChangeSelect}
              currentSelect={currentSelect}
              isExpandFeature={true}
              onToogleExpand={this.handleToogleExpand}
              isClickExpand={isClickExpand}
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
  handleSystem = e => this.props.handleChange({ hex: e.target.value, a: this.props.alpha })

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
