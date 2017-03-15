import React from 'react'
import ColorInput from './ColorInput'
import styles from './index.sass'

export default class DashBoard extends React.Component {
  render () {
    const { color, rgb, alpha } = this.props
    return (
      <section className={styles['value-pane']}>
        <ColorInput size="7" label="#" maxLength="6" value={color.slice(1)} />
        <ColorInput size="3" label="R" maxLength="3" value={rgb.r} />
        <ColorInput size="3" label="G" maxLength="3" value={rgb.g} />
        <ColorInput size="3" label="B" maxLength="3" value={rgb.b} />
        <ColorInput size="3" label="A" maxLength="6" value={alpha} />
      </section>
    )
  }
}

DashBoard.propTypes = {
  rgb: React.PropTypes.object,
  alpha: React.PropTypes.number
}
