import React, { Component } from 'react'
import { colorPanelList } from './constant'
import ColorPicker from 'mb-color-picker'

// NOTE: if you need to use @ibot icons, you should import this file in your project
import '@ibot/ibot/lib/icon/index.css'

const TUBE_SVG = <svg width="14" height="14" xmlns="http://www.w3.org/2000/svg"><path d="M10.751.934l-2.2 2.2-.89-.89a.935.935 0 0 0-1.322 0l-.413.413a.935.935 0 0 0 0 1.322l.7.7L.59 10.714a.458.458 0 0 0-.132.377l-.003 2.045c0 .226.183.41.409.41H2.96c.122 0 .239-.049.325-.136l6.036-6.035.7.699a.935.935 0 0 0 1.321 0l.413-.413a.935.935 0 0 0 0-1.322l-.89-.89 2.2-2.2A1.636 1.636 0 0 0 10.751.933zM4.739 10.74l-2.414-.485L7.432 5.13 8.87 6.575 4.74 10.74z" fill="#415058" fillRule="nonzero"/></svg>
const DEFAULT_COLOR = '#1D83BB'

const localStorageDelegate = window.localStorage

export default class App extends Component {
  state = {
    color: DEFAULT_COLOR,
    showColorPicker: true,
    colorPickerPosition: [0, 0],
    currentSelect: '最近使用',
    isClickExpand: false,
    colorPanelList: []
  }

  componentDidMount() {
    this.addHistoryColors()
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
    this.setState({ colorPanelList })
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
      isClickExpand,
      colorPanelList
    } = this.state

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

              colorPanelList={colorPanelList}
              onChangeSelect={this.handleChangeSelect}
              currentSelect={currentSelect}
              isExpandFeature={true}
              onToogleExpand={this.handleToogleExpand}
              isClickExpand={isClickExpand}
              // palette={palette['dark']}
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
        {TUBE_SVG}
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
