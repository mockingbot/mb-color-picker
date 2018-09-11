import PropTypes from 'prop-types'
import React, { PureComponent } from 'react'

import './index.css'


export default class CustomColors extends PureComponent {
  static defaultProps = {
    customColorsHeaderText: 'Custom Colors',
  }

  handleSelect = e => {
    const { color } = e.target.dataset
    this.props.handleSelect(color)
  }

  render () {
    const { customColors, customColorsHeaderText } = this.props

    if (customColors.length === 0) return null

    return (
      <div className="custom-color-list">
        <header>
          <div>{customColorsHeaderText}</div>
        </header>

        <ul className="custom-palette">
          {
            customColors.map((color, i) => (
              <li
                key={i}
                className="custom-palette-color"
                style={{ backgroundColor: color }}
                data-color={color}
                onClick={this.handleSelect}
              />
            ))
          }
        </ul>
      </div>
    )
  }
}

CustomColors.propTypes = {
  customColors: PropTypes.array,
  handleSelect: PropTypes.func,
  customColorsHeaderText: PropTypes.string,
}
