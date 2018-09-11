import PropTypes from 'prop-types'
import React, { Component } from 'react'

import './index.css'


export default class Theme extends Component {

  handleClick = e => {
    const { color } = e.currentTarget.dataset
    this.props.handleSelect(color)
  }

  render () {
    const { themes } = this.props
    return (
      <ul className="theme-palette">
        {
          themes.map((color, i) => (
            <li
              key={i}
              className={`theme-palette-color${color === 'transparent' ? ' transparent' : ''}`}
              style={{ backgroundColor: color }}
              data-color={color}
              onClick={this.handleClick}
            />
          ))
        }
      </ul>
    )
  }
}

Theme.propTypes = {
  themes: PropTypes.array,
  onClose: PropTypes.func,
  handleSelect: PropTypes.func
}
