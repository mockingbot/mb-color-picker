import PropTypes from 'prop-types'
import React, { PureComponent } from 'react'

import { StyledRGBInput } from '../RGBInput/styles'


export default class HexInput extends PureComponent {

  // _invalid:
  // default to false if do not change
  _invalid = false
  _originalValueOfInput = ''
  _changedMannually = false

  $input = null

  state = {
    // naming `hexValue` here cause we store the value without `#`
    hexValue: null,
    prevHexValueFromProps: null
  }

  static getDerivedStateFromProps(props, state) {
    const propsValue = props.hexValue.toUpperCase()

    if (propsValue !== state.prevHexValueFromProps) {
      return { prevHexValueFromProps: propsValue, hexValue: propsValue }
    } else {
      return null
    }
  }

  setInputRef = ref => this.$input = ref

  selectWhenClick = e => {
    e.target.select()
    this._originalValueOfInput = e.target.value
  }

  _correctInput = value => value.toUpperCase().replace(/[^0-9A-F]/g, '').slice(0, 6)

  handleChange = e => {
    this._changedMannually = true

    const value = this._correctInput(e.target.value)

    if (value.length === 3 || value.length === 6) {
      this._invalid = false
    } else {
      this._invalid = true
    }

    this.setState({ hexValue: value })
  }

  _format3DigitValue = v => `${v[0]}${v[0]}${v[1]}${v[1]}${v[2]}${v[2]}`

  formatAndHandleChange = () => {
    if (!this._changedMannually) return

    const { hexValue } = this.state

    let formattedValue = hexValue

    if (hexValue.length === 3) {
      formattedValue = this._format3DigitValue(formattedValue)
      this.setState({ hexValue: formattedValue })
    }

    formattedValue.toLowerCase()
    this.props.handleChange(formattedValue)

    return formattedValue
  }

  handleBlur = e => {
    if (this._invalid) {
      this.setState({ hexValue: this._originalValueOfInput })
    } else {
      this.formatAndHandleChange()
    }

    this._invalid = false
    this._originalValueOfInput = ''
  }

  handleEnter = e => {
    if (e.key !== 'Enter') return

    if (this._invalid) {
      this.setState({ hexValue: this._originalValueOfInput })
    } else {
      const formattedValue = this.formatAndHandleChange()
      this._originalValueOfInput = formattedValue
    }

    this._invalid = false

    e.target.select()
  }

  render() {
    const { hexValue } = this.state
    const { theme } = this.props

    let inputValue = hexValue
    if (hexValue === 'TRANSPARENT' || hexValue === 'transparent') {
      inputValue = 'FFFFFF'
    }

    return (
      <StyledRGBInput
        className="color-input hex-input"
        theme={theme}
        style={{ width: '62px' }}>
        <input
          ref={this.setInputRef}
          value={inputValue}
          onClick={this.selectWhenClick}
          onKeyUp={this.handleEnter}
          onChange={this.handleChange}
          onBlur={this.handleBlur} />
        <span>Hex</span>
      </StyledRGBInput>
    )
  }
}

HexInput.propTypes = {
  hexValue: PropTypes.string,
  handleChange: PropTypes.func,
  theme: PropTypes.object
}
