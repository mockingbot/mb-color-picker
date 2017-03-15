import React from 'react'
import styles from './index.sass'

export default class Circle extends React.Component {
  render () {
    const { left, top } = this.props
    return (
      <span style={{left, top}} className={styles['color-circle']}></span>
    )
  }
}
