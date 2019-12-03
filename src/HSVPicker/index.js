import PropTypes from 'prop-types'
import React, { PureComponent } from 'react'

import { rgb2hsv, hex2rgb, hsv2rgb, rgb2hex, rgb2rgbaStr } from '../utils/color'
import { stopReactEventPropagation } from '../utils/DOM'

import { StyledHSVPicker } from './styles'

export default class HSVPicker extends PureComponent {
  static propTypes = {
    hex: PropTypes.string,
    alpha: PropTypes.number,
    onChange: PropTypes.func,
    onConfirm: PropTypes.func,
    children: PropTypes.node,
  }

  static getDerivedStateFromProps(props, state) {
    let newState = null

    if (!state.changingFromInside && props.hex !== state.hex && props.hex !== 'transparent') {
      newState = {
        ...newState,
        hex: props.hex,
        ...rgb2hsv(hex2rgb(props.hex))
      }
    }

    if (props.alpha !== state.a) newState = { ...newState, a: props.alpha }

    return newState
  }

  state = {
    h: null,
    s: null,
    v: null,
    hex: null,
    a: null,
    // changingFromInside: this value indicates that color changes from inside
    // component, which we choose not to accept changes from outside, cause when
    // `v` in hsv is near 0, the output of converting hsv value to rgb, or vice versa,
    // becomes unstable(`h` value and `s` value), which causing pointer to tremble
    changingFromInside: false
  }

  setSVPlaneRef = ref => this.$SVPlane = ref
  setHBandRef = ref => this.$HBand = ref
  setABandRef = ref => this.$ABand = ref

  handleClickEyedropper = () => {}

  _getBaseHue = h => rgb2hex(hsv2rgb({ h, s: 1, v: 1 }))

  _getSVPointerStyle = (s, v) => {  // s for x, v for y, remember v decreases while y increases
    return {
      top: `${100 - v*100}%`,
      left: `${s*100}%`
    }
  }

  _getSVValue = (x, y) => { // s for x, v for y, remember v decreases while y increases
    const SVPlaneRect = this.$SVPlane.getBoundingClientRect()

    return {
      s: Math.min(1, Math.max(0, (x - SVPlaneRect.left)) / SVPlaneRect.width),
      v: 1 - Math.min(1, Math.max(0, (y - SVPlaneRect.top)) / SVPlaneRect.height)
    }
  }

  _getHPointerStyle = h => ({ left: `${h*100}%` })

  _getAPointerStyle = a => ({ left: `${a*100}%` })

  _getHValue = x => {
    const HBandRect = this.$HBand.getBoundingClientRect()

    return {
      h: Math.min(1, Math.max(0, (x - HBandRect.left)) / HBandRect.width)
    }
  }

  _getAValue = x => {
    const ABandRect = this.$ABand.getBoundingClientRect()

    const a = Math.min(1, Math.max(0, (x - ABandRect.left)) / ABandRect.width)

    return {
      a: Math.round(a*100)/100
    }
  }

  handleDragSVPlane = e => {
    stopReactEventPropagation(e)
    e.preventDefault()

    const { s, v } = this._getSVValue(e.clientX, e.clientY)
    const { h } = this.state
    const hex = rgb2hex(hsv2rgb({ h, s, v }))

    this.setState({
      h, s, v,
      hex,
      changingFromInside: true
    })

    this.props.onChange({ hex })

    const onMouseMove = e => {
      e.stopPropagation()
      e.stopImmediatePropagation()
      e.preventDefault()

      if (!this.$SVPlane) return

      const { s, v } = this._getSVValue(e.clientX, e.clientY)
      const { h } = this.state
      const hex = rgb2hex(hsv2rgb({ h, s, v }))

      this.setState({ h, s, v, hex })

      this.props.onChange({ hex })
    }

    const onMouseUp = e => {
      document.removeEventListener('mousemove', onMouseMove)
      document.removeEventListener('mouseup', onMouseUp)

      if (!this.$SVPlane) return

      const { s, v } = this._getSVValue(e.clientX, e.clientY)
      const { h } = this.state
      const hex = rgb2hex(hsv2rgb({ h, s, v }))

      this.setState({ h, s, v, hex })
      this.props.onConfirm({ hex })

      this.setState({ changingFromInside: false })
    }

    document.addEventListener('mousemove', onMouseMove)
    document.addEventListener('mouseup', onMouseUp)
  }

  handleDragHBand = e => {
    stopReactEventPropagation(e)
    e.preventDefault()

    const { h } = this._getHValue(e.clientX)
    const { s, v } = this.state
    const hex = rgb2hex(hsv2rgb({ h, s, v }))
    this.setState({
      h, s, v,
      hex,
      changingFromInside: true
    })

    this.props.onChange({ hex })

    const onMouseMove = e => {
      e.stopPropagation()
      e.stopImmediatePropagation()
      e.preventDefault()

      if (!this.$HBand) return

      const { h } = this._getHValue(e.clientX)
      const { s, v } = this.state
      const hex = rgb2hex(hsv2rgb({ h, s, v }))

      this.setState({ h, s, v, hex })

      this.props.onChange({ hex })
    }

    const onMouseUp = e => {
      document.removeEventListener('mousemove', onMouseMove)
      document.removeEventListener('mouseup', onMouseUp)

      if (!this.$HBand) return

      const { h } = this._getHValue(e.clientX)
      const { s, v } = this.state
      const hex = rgb2hex(hsv2rgb({ h, s, v }))

      this.setState({ h, s, v, hex })
      this.props.onConfirm({ hex })

      this.setState({ changingFromInside: false })
    }

    document.addEventListener('mousemove', onMouseMove)
    document.addEventListener('mouseup', onMouseUp)
  }

  handleDragABand = e => {
    stopReactEventPropagation(e)
    e.preventDefault()

    const { a } = this._getAValue(e.clientX)

    this.setState({ changingFromInside: true })

    this.props.onChange({ a })

    const onMouseMove = e => {
      e.stopPropagation()
      e.stopImmediatePropagation()
      e.preventDefault()

      if (!this.$ABand) return

      const { a } = this._getAValue(e.clientX)

      this.props.onChange({ a })
    }

    const onMouseUp = e => {
      document.removeEventListener('mousemove', onMouseMove)
      document.removeEventListener('mouseup', onMouseUp)

      if (!this.$ABand) return

      const { a } = this._getAValue(e.clientX)

      this.setState({ a })
      this.props.onConfirm({ a })

      this.setState({ changingFromInside: false })
    }

    document.addEventListener('mousemove', onMouseMove)
    document.addEventListener('mouseup', onMouseUp)
  }

  render() {
    const { h, s, v, a } = this.state
    const baseHue = this._getBaseHue(h)
    const SVPointerStyle = this._getSVPointerStyle(s, v)
    const HPointerStyle = this._getHPointerStyle(h)
    const APointerStyle = this._getAPointerStyle(a)

    return (
      <StyledHSVPicker className="hsv-picker">
        <section
          className="s-v-plane"
          ref={this.setSVPlaneRef}
          onMouseDown={this.handleDragSVPlane}>

          <div className="base-hue-layer" style={{ background: baseHue }} />
          <div className="s-layer" />
          <div className="v-layer" />

          <i className="pointer"
            style={SVPointerStyle} />
        </section>

        <div className="row">
          { this.props.children &&
            <div className="outside-color-picker-btn">
              { this.props.children }
            </div>
          }

          <div className="h-a-bands">
            <div
              className="h-band"
              onMouseDown={this.handleDragHBand}>
              <div className="rail"
                ref={this.setHBandRef}>
                <span className="slider" style={HPointerStyle} />
              </div>
            </div>

            <div
              className="a-band"
              onMouseDown={this.handleDragABand}>
              <div style={{
                width: '100%',
                height: '100%',
                background: `linear-gradient(to right, transparent 0%, ${rgb2rgbaStr(hsv2rgb({ h, s, v }))} 100%)`
              }} />
              <div className="rail"
                ref={this.setABandRef}>
                <span className="slider" style={APointerStyle} />
              </div>
            </div>
          </div>

          <div className="preview-container">
            <div style={{ height: '100%', background: rgb2rgbaStr({ ...hsv2rgb({ h, s, v }), a }) }} />
          </div>
        </div>
      </StyledHSVPicker>
    )
  }
}
