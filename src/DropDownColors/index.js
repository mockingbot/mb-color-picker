import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import '@ibot/ibot/lib/select/index.css'
import '@ibot/ibot/lib/ellipsis/index.css'
import Select from '@ibot/ibot/lib/select'
import './index.css'

export default class DropDownColors extends PureComponent {
  state = {
    select: this.props.defaultSelect
  }

  onChangeSelect = (select) => this.setState({ select })

  getOpacityPerc = (value) => {
    const opacityPerc = value.split(',')
    const len = opacityPerc.length
    const showBg = len > 3 && +opacityPerc[len - 1].replace(')', '') !== 1
    return showBg
  }

  handleSelect = e => {
    const { color } = e.target.dataset
    this.props.handleSelect(color)
  }

  render() {
    const { colorPanelList, defaultSelect } = this.props
    const { select } = this.state
    const optionList = colorPanelList.map(c => c.name)
    const { colors: paletteList } = colorPanelList.find(c => c.name === select) || {}
    return (
      <div className="panel-color-list">
        <header>
          <Select
            optionList={optionList}
            menuTheme="check"
            theme="core"
            value={defaultSelect}
            onChange={this.onChangeSelect}
          />
        </header>

        <ul className="current-palette">
          {
            paletteList && paletteList.length > 0 && paletteList.map((color, i) => (
              <div
                key={i}
                className={`current-palette-color ${this.getOpacityPerc(color) ? 'current-palette-color-imagback' : ''}`}
              >
                <li
                  className="current-palette-color-li"
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

DropDownColors.propTypes = {
  colorPanelList: PropTypes.array,
  defaultSelect: PropTypes.string,
  handleSelect: PropTypes.func
}
