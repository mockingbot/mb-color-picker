import React from 'react'
import './index.css'

export default class Circle extends React.Component {
  render () {
    const { left, top } = this.props
    return (
      <span style={{left, top}} className="color-circle"></span>
    )
  }
}
