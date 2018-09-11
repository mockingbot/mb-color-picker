import PropTypes from 'prop-types'
import React, { PureComponent } from 'react'

import './RGBInput/index.css'


export default class AlphaInput extends PureComponent {

  state = {
    a: null,
    prevAFromProps: null
  }

  static getDerivedStateFromProps (props, state) {
    if (props.a !== state.prevAFromProps) return { a: props.a, prevAFromProps: props.a }

    return null
  }

  selectWhenClick = e => {
    e.target.select()
    this._originalValueOfInput = e.target.value
  }

  handleChange = e => {
    let value = e.target.value.replace(/\D/g, '')

    value = value.replace(/^0*(?=[0-9])/, '') // 000000

    if (value.match(/^100/)) {
      value = value.slice(0, 3)
    } else {
      value = value.slice(0, 2)
    }

    this.setState({ a: value })
  }

  handleBlur = e => this.props.handleChangeAlpha(this.state.a / 100)

  handleEnter = e => {
    if (e.key !== 'Enter') return

    this.props.handleChangeAlpha(this.state.a / 100)

    e.target.select()
  }

  render() {
    const { a } = this.state

    return (
      <label className="color-input">
        <input
          value={a}
          onClick={this.selectWhenClick}
          onKeyUp={this.handleEnter}
          onChange={this.handleChange}
          onBlur={this.handleBlur} />
        <span>A</span>
      </label>
    )
  }
}

AlphaInput.propTypes = {
  a: PropTypes.number,
  handleChangeAlpha: PropTypes.func
}
