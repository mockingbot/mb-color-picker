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

import '!style-loader!css-loader!@ibot/ibot/lib/icon/style/index.css'
import './index.css'

const DUMB_FUNC = () => null


export default class ColorPicker extends PureComponent {
  static propTypes = {
    color: PropTypes.string,
    onChange: PropTypes.func,
    onContinouslyChange: PropTypes.func,
    applyDidMountSideEffect: PropTypes.func,
    applyWillUnmountSideEffect: PropTypes.func,
    themeColors: PropTypes.array,
    customColors: PropTypes.array,
    customColorsHeaderText: PropTypes.string,
    onDragStart: PropTypes.func,
    onClose: PropTypes.func,
    headerText: PropTypes.string,
  }

  static defaultProps = {
    applyDidMountSideEffect: DUMB_FUNC,
    applyWillUnmountSideEffect: DUMB_FUNC,
    headerText: 'Color Picker',
  }

  state = {
    hex: null,
    alpha: null
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

  handleChange = (hex, alpha) => {
    const { hex: propsHex, alpha: propsAlpha } = parseColor(this.props.color)

    if (hex === propsHex && alpha === propsAlpha) return // same color gets no pop up

    if (hex === 'transparent') {
      this.props.onChange('transparent')
    } else {
      this.props.onChange(hex2rgbaStr(hex, propsHex === 'transparent' ? 1 : alpha))
    }
  }

  handleColorChangeFromExternal = color => {
    const { hex, alpha } = parseColor(color)
    this.handleChange(hex, alpha)
  }

  handleHsvChange = hex => {
    this.handleChange(hex, this.state.alpha)
  }

  handleHsvDragChange = hex => {
    const { onContinouslyChange } = this.props

    if (!onContinouslyChange) {
      this.handleHsvChange(hex)
    } else {
      const color = hex2rgbaStr(hex, this.state.alpha)
      onContinouslyChange(color)
    }
  }

  handleRgbChange = rgb => {
    const hex = rgb2hex(rgb)
    const changeFromTransparent = this.state.hex === 'transparent'
    this.handleChange(hex, changeFromTransparent ? 1 : this.state.alpha)
  }

  handleHexChange = hexValue => {
    const hex = `#${hexValue}`
    const changeFromTransparent = this.state.hex === 'transparent'
    this.handleChange(hex, changeFromTransparent ? 1 : this.state.alpha)
  }

  handleChangeAlpha = a => this.handleChange(this.state.hex, a)

  handleDragChangeAlpha = a => {
    const { onContinouslyChange } = this.props

    if (!onContinouslyChange) {
      this.handleChangeAlpha(a)
    } else {
      onContinouslyChange(hex2rgbaStr(this.state.hex, a))
    }
  }

  render() {
    const { themeColors, customColors, onClose, customColorsHeaderText } = this.props
    const { hex, alpha } = this.state

    const hexValue = hex === 'transparent' ? 'TRANSPARENT' : hex.slice(1)

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
            handleEyedropperChange={this.props.onChange}
            handleDragChange={this.handleHsvDragChange}
            handleChange={this.handleHsvChange}
            handleDragChangeAlpha={this.handleDragChangeAlpha}
            handleChangeAlpha={this.handleChangeAlpha} />

          <div className="input-section">
            <HexInput
              hexValue={hexValue}
              handleChange={this.handleHexChange} />

            <RGBInput
              hex={hex}
              handleChange={this.handleRgbChange} />

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
  } else if (color.match(/^rgba\((.*)\)$/)) {
    const rgbaExtractor = /^rgba\((.*)\)$/
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
