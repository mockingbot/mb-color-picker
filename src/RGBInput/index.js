import PropTypes from 'prop-types'
import React, { PureComponent } from 'react'

import { hex2rgb } from '../utils/color'

import { StyledRGBInput } from './styles'
// import './index.css'

export default class RGBInput extends PureComponent {

  _originalValueOfInput = ''
  _invalidFace = ''
  _changedMannually = false

  state = {
    r: null,
    g: null,
    b: null,
    prevHexFromProps: null
  }

  static getDerivedStateFromProps(props, state) {
    if (props.hex !== state.prevHexFromProps && props.hex !== 'transparent') {
      return { ...hex2rgb(props.hex), prevHexFromProps: props.hex }
    } else if (props.hex !== state.prevHexFromProps && props.hex === 'transparent') {
      return {
        r: 255,
        g: 255,
        b: 255,
        prevHexFromProps: 'transparent'
      }
    } else {
      return null
    }
  }

  selectWhenClick = e => {
    e.target.select()
    this._originalValueOfInput = e.target.value
  }

  _correctInput = value => value.replace(/\D/g, '').slice(0, 3)

  handleChange = e => {
    this._changedMannually = true

    const { face } = e.target.dataset
    const value = this._correctInput(e.target.value)

    this.validate(face, value)

    this.setState({
      [face]: value
    })
  }

  validate = (face, value) => {
    if (value === '' || Number(value) > 255) {
      this._invalidFace = face
      return false
    } else {
      this._invalidFace = ''
      return true
    }
  }

  emitChange = () => {
    if (!this._changedMannually) return

    const { r, g, b } = this.state
    this.props.handleChange({ r, g, b })
  }

  handleBlur = e => {
    const { face } = e.target.dataset

    if (face === this._invalidFace) {
      this.setState({ [face]: this._originalValueOfInput })
    } else {
      this.emitChange()
    }

    this._invalidFace = ''
    this._originalValueOfInput = ''
  }

  handleEnter = e => {
    if (e.key !== 'Enter') return

    const { face } = e.target.dataset

    if (face === this._invalidFace) {
      this.setState({ [face]: this._originalValueOfInput })
    } else {
      this._originalValueOfInput = this.state[face]

      this.emitChange()
    }

    this._invalidFace = ''

    e.target.select()
  }

  render() {
    const { r, g, b } = this.state
    const { theme } = this.props

    return (
      <React.Fragment>
        <StyledRGBInput className="color-input" theme={theme}>
          <input
            className={this._invalidFace === 'r' ? 'invalid' : ''}
            data-face="r"
            value={r}
            onClick={this.selectWhenClick}
            onKeyUp={this.handleEnter}
            onChange={this.handleChange}
            onBlur={this.handleBlur}
          />
          <span>R</span>
        </StyledRGBInput>

        <StyledRGBInput className="color-input" theme={theme}>
          <input
            className={this._invalidFace === 'g' ? 'invalid' : ''}
            data-face="g"
            value={g}
            onClick={this.selectWhenClick}
            onKeyUp={this.handleEnter}
            onChange={this.handleChange}
            onBlur={this.handleBlur}
          />
          <span>G</span>
        </StyledRGBInput>

        <StyledRGBInput className="color-input" theme={theme}>
          <input
            className={this._invalidFace === 'b' ? 'invalid' : ''}
            data-face="b"
            value={b}
            onClick={this.selectWhenClick}
            onKeyUp={this.handleEnter}
            onChange={this.handleChange}
            onBlur={this.handleBlur}
          />
          <span>B</span>
        </StyledRGBInput>
      </React.Fragment>
    )
  }
}

RGBInput.propTypes = {
  hex: PropTypes.string,
  handleChange: PropTypes.func,
  theme: PropTypes.object
}
