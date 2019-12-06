import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import '@ibot/ibot/lib/select/index.css'
import '@ibot/ibot/lib/ellipsis/index.css'
import Select from '@ibot/ibot/lib/select'
import { hex2rgb, rgb2hsv } from '../utils/color'
import { parseColor } from '../index'
import { StyledDropDownColors, GlobalStyledSelect } from './styles'

const EXPAND_SVG = <svg width="14" height="9" xmlns="http://www.w3.org/2000/svg"><path d="M13.263 3.56a.5.5 0 1 1 .474.88L6.99 8.073.748 4.432a.5.5 0 0 1 .504-.864L7.01 6.927zm0-3a.5.5 0 1 1 .474.88L6.99 5.073.748 1.432a.5.5 0 0 1 .504-.864L7.01 3.927z" fill="#8D9EA7" fillRule="nonzero"/></svg>
const CHECK_SVG = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10" ariaHidden="true"><path d="M1 5.1C1 5.3 1.1 5.5 1.2 5.6L3.3 7.8C3.5 7.9 3.7 8 3.9 8 4.1 8 4.2 7.9 4.4 7.8L8.8 3.3C8.9 3.1 9 3 9 2.8 9 2.5 8.9 2.4 8.8 2.2 8.6 2.1 8.5 2 8.3 2 8.1 2 7.9 2.1 7.7 2.2L3.9 6.2 2.3 4.5C2.1 4.4 1.9 4.3 1.7 4.3 1.5 4.3 1.4 4.4 1.2 4.5 1.1 4.7 1 4.9 1 5.1Z"></path></svg>
export default class DropDownColors extends PureComponent {
  state = {
    currentColor: '',
    activeBorderColor: ''
  }

  handleChangeSelect = (select) => {
    this.props.onChangeSelect(select)
    this.setState({ currentColor: '' })
  }

  getOpacityPerc = (value) => {
    const opacityPerc = value.split(',')
    const len = opacityPerc.length
    const showBg = len > 3 && +opacityPerc[len - 1].replace(')', '') !== 1
    return showBg
  }

  handleSelect = (e, i) => {
    const { color } = e.target.dataset
    const { hex } = parseColor(color)
    const { v } = rgb2hsv(hex2rgb(hex))
    const activeBorderColor = (v > 0.7) ? 'rgba(0, 0, 0, 0.5)' : 'rgba(255, 255, 255, 0.95)'
    this.props.handleSelect(color)
    this.setState({ currentColor: i, activeBorderColor })
  }

  render() {
    const { currentColor, activeBorderColor } = this.state
    const { colorPanelList, isExpandFeature, isClickExpand, currentSelect, onToogleExpand, theme } = this.props
    const optionList = colorPanelList.map(c => c.name)
    const { colors: paletteList } = colorPanelList.find(c => c.name === currentSelect) || {}
    const hasExpand = isExpandFeature && (paletteList && paletteList.length > 4 * 9)

    return (
      <StyledDropDownColors className="panel-color-list" theme={theme} activeBorderColor={activeBorderColor}>
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
                  className={`current-palette-color-li${color === 'transparent' ? ' transparent' : ''}${currentColor === i ? ' active' : ''}`}
                  style={{ backgroundColor: color }}
                  data-color={color}
                  onClick={(e) => this.handleSelect(e, i)}
                />
                { currentColor === i && CHECK_SVG}
              </div>
            ))
          }
        </ul>

        { hasExpand && <span className={`expand-icon ${isClickExpand ? 'is-pack-up' : ''}`} onClick={onToogleExpand}>{EXPAND_SVG}</span> }
        <GlobalStyledSelect theme={theme} />
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
  isClickExpand: PropTypes.bool,
  theme: PropTypes.object
}
