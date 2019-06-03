import PropTypes from 'prop-types'
import React, { PureComponent } from 'react'

import Icon from '@ibot/ibot/lib/icon'

import Theme from './Theme'
import CustomColors from './CustomColors'
import HSVPicker from './HSVPicker'
import RGBInput from './RGBInput'
import HexInput from './HexInput'
import AlphaInput from './AlphaInput'

import { hex2rgbaStr, rgb2hex, formatHex } from './utils/color'
import { stopReactEventPropagation } from './utils/DOM'

import './index.css'

const DUMB_FUNC = () => null


export default class ColorPicker extends PureComponent {
  static propTypes = {
    color: PropTypes.string,
    onChange: PropTypes.func,
    onConfirm: PropTypes.func,
    applyDidMountSideEffect: PropTypes.func,
    applyWillUnmountSideEffect: PropTypes.func,
    themeColors: PropTypes.array,
    customColors: PropTypes.array,
    customColorsHeaderText: PropTypes.string,
    onDragStart: PropTypes.func,
    onClose: PropTypes.func,
    headerText: PropTypes.string,
    children: PropTypes.node,
  }

  static defaultProps = {
    applyDidMountSideEffect: DUMB_FUNC,
    applyWillUnmountSideEffect: DUMB_FUNC,
    headerText: 'Color Picker',
  }

  static getDerivedStateFromProps (props, state) {
    const { hex, alpha } = parseColor(props.color)

    if (hex.toLowerCase() === state.props && alpha === state.alpha) {
      return null
    } else {
      return {
        hex,
        alpha,
      }
    }
  }

  state = {
    hex: null,
    alpha: null
  }

  setContainerRef = ref => this.$container = ref

  componentDidMount() {
    this.props.applyDidMountSideEffect(this.$container)
  }

  componentWillUnmount () {
    this.props.applyWillUnmountSideEffect(this.$container)
  }

  handleDragStart = e => {
    e.preventDefault()
    if (this.props.onDragStart) {
      this.props.onDragStart(e)
    }
  }

  handleClose = e => this.props.onClose(e)

  handleColorChangeFromExternal = color => {
    const { hex, alpha } = parseColor(color)
    this.hsvConfirm({ hex, a: alpha })
  }

  handleRgbChange = rgb => {
    const hex = rgb2hex(rgb)
    const changeFromTransparent = this.state.hex === 'transparent'
    this.hsvConfirm({ hex, a: changeFromTransparent ? 1 : this.state.alpha })
  }

  handleHexChange = hexValue => {
    const hex = `#${hexValue}`
    const changeFromTransparent = this.state.hex === 'transparent'
    this.hsvConfirm({ hex, a: changeFromTransparent ? 1 : this.state.alpha })
  }

  hsvChange = ({hex, a}) => {
    const { hex: propsHex } = parseColor(this.props.color)
    if (!hex) hex = this.state.hex
    if (!a) a = this.state.alpha

    if (hex === 'transparent') {
      this.props.onChange('transparent')
    } else {
      this.props.onChange(hex2rgbaStr(hex, propsHex === 'transparent' ? 1 : a))
    }
  }

  hsvConfirm = ({hex, a}) => {
    const { hex: propsHex } = parseColor(this.props.color)
    if (!hex) hex = this.state.hex
    if (!a) a = this.state.alpha

    if (hex === 'transparent') {
      this.props.onConfirm('transparent')
    } else {
      this.props.onConfirm(hex2rgbaStr(hex, propsHex === 'transparent' ? 1 : a))
    }
  }

  handleChangeAlpha = a => this.hsvConfirm({ hex: this.state.hex, a })

  genOutsideColorPicker = () => {
    const passedOutsideColorPicker = this.props.children
    return React.cloneElement(passedOutsideColorPicker, {
      hex: this.state.hex,
      alpha: this.state.alpha,
      handleChange: this.hsvConfirm
    })
  }

  render() {
    const { themeColors, customColors, onClose, customColorsHeaderText } = this.props
    const { hex, alpha } = this.state

    const hexValue = hex === 'transparent' ? 'TRANSPARENT' : hex.slice(1)

    let outsideColorPicker
    if (this.props.children) outsideColorPicker = this.genOutsideColorPicker()

    return (
      <div
        className="--mb--color-picker"
        ref={this.setContainerRef}
        onMouseDown={stopReactEventPropagation}
        onClick={stopReactEventPropagation}
      >

        <header className="color-picker-header" onMouseDown={this.handleDragStart}>
          <div className="header-text">{this.props.headerText}</div>
          {
            onClose &&
            <Icon type="dora" name="times" onMouseDown={this.handleClose} />
          }
        </header>

        <div className="color-picker-body">
          {
            themeColors &&
            <Theme themes={themeColors} handleSelect={this.handleColorChangeFromExternal} />
          }

          <HSVPicker
            hex={hex}
            alpha={alpha}
            onChange={this.hsvChange}
            onConfirm={this.hsvConfirm}
          >
            { outsideColorPicker }
          </HSVPicker>

          <div className="input-section">
            <HexInput
              hexValue={hexValue}
              handleChange={this.handleHexChange}
            />

            <RGBInput
              hex={hex}
              handleChange={this.handleRgbChange}
            />

            <AlphaInput
              a={parseInt(alpha*100)}
              handleChangeAlpha={this.handleChangeAlpha}
            />
          </div>

          {
            customColors &&
            <CustomColors
              customColors={customColors}
              customColorsHeaderText={customColorsHeaderText}
              handleSelect={this.handleColorChangeFromExternal}
            />
          }
        </div>
      </div>
    )
  }
}

export const parseColor = c => {
  const color = c.trim().toLowerCase() // keep lower cases hex in the component
  const rgbaExtractor = /^rgba?\((.*)\)$/

  if (color.match(/transparent/)) {
    return {
      hex: 'transparent',
      alpha: 0
    }
  } else if (color.match(/^#[0-9a-f]{6}$|^#[0-9a-f]{3}$/)) {
    return {
      hex: formatHex(color),
      alpha: 1
    }
  } else if (color.match(rgbaExtractor)) {
    const rgbaStr = rgbaExtractor.exec(color)[1]

    const [ r, g, b, a ] = rgbaStr.split(',').map(i => i.trim())

    return {
      hex: rgb2hex({
        r: parseInt(r),
        g: parseInt(g),
        b: parseInt(b),
      }),
      alpha: !a ? 1 : parseFloat(a)
    }
  } else {
    return DEFAULT_COLOR
  }
}

const DEFAULT_COLOR = {
  hex: '#000000',
  alpha: 1
}
