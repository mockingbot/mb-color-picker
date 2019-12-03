import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import '@ibot/ibot/lib/select/index.css'
import '@ibot/ibot/lib/ellipsis/index.css'
import Select from '@ibot/ibot/lib/select'
import { StyledDropDownColors } from './styles'

const EXPAND_SVG = <svg width="14" height="9" xmlns="http://www.w3.org/2000/svg"><path d="M13.263 3.56a.5.5 0 1 1 .474.88L6.99 8.073.748 4.432a.5.5 0 0 1 .504-.864L7.01 6.927zm0-3a.5.5 0 1 1 .474.88L6.99 5.073.748 1.432a.5.5 0 0 1 .504-.864L7.01 3.927z" fill="#8D9EA7" fillRule="nonzero"/></svg>

export default class DropDownColors extends PureComponent {
  handleChangeSelect = (select) => {
    this.props.onChangeSelect(select)
  }

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
    const { colorPanelList, isExpandFeature, isClickExpand, currentSelect, onToogleExpand } = this.props
    const optionList = colorPanelList.map(c => c.name)
    const { colors: paletteList } = colorPanelList.find(c => c.name === currentSelect) || {}
    const hasExpand = isExpandFeature && (paletteList && paletteList.length > 4 * 9)

    return (
      <StyledDropDownColors className="panel-color-list">
        <header>
          <Select
            optionList={optionList}
            menuTheme="check"
            theme="core"
            value={currentSelect}
            onChange={this.handleChangeSelect}
            menuClassName="mb-color-selectMenu"
          />
        </header>

        <ul className={`current-palette ${hasExpand && !isClickExpand ? 'is-expand' : ''}`}>
          {
            paletteList && paletteList.length > 0 && paletteList.map((color, i) => (
              <div
                key={i}
                className={`current-palette-color ${this.getOpacityPerc(color) ? 'current-palette-color-imagback' : ''}`}
              >
                <li
                  className={`current-palette-color-li${color === 'transparent' ? ' transparent' : ''}`}
                  style={{ backgroundColor: color }}
                  data-color={color}
                  onClick={this.handleSelect}
                />
              </div>
            ))
          }
        </ul>

        { hasExpand && <span className={`expand-icon ${isClickExpand ? 'is-pack-up' : ''}`} onClick={onToogleExpand}>{EXPAND_SVG}</span> }
      </StyledDropDownColors>
    )
  }
}

DropDownColors.propTypes = {
  colorPanelList: PropTypes.array,
  defaultSelect: PropTypes.string,
  handleSelect: PropTypes.func,
  onChangeSelect: PropTypes.func,
  currentSelect: PropTypes.string,
  isExpandFeature: PropTypes.bool,
  onToogleExpand: PropTypes.func,
  isClickExpand: PropTypes.bool
}
