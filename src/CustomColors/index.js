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

  getOpacityPerc = (value) => {
    const opacityPerc = value.split(',')
    const len = opacityPerc.length
    const showBg = len > 3 && +opacityPerc[len - 1].replace(')', '') !== 1
    return showBg
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
              <div
                key={i}
                className={`custom-palette-color ${this.getOpacityPerc(color) ? 'custom-palette-color-imagback' : ''}`}
              >
                <li
                  className="custom-palette-color-li"
                  style={{ backgroundColor: color }}
                  data-color={color}
                  onClick={this.handleSelect}
                />
              </div>
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
