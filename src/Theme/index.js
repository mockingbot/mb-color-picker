import React from 'react'

import styles from './index.sass'

export default class Theme extends React.Component {
  handleClick = (e) => {
    const { color } = e.currentTarget.dataset
    const { handleTheme } = this.props
    handleTheme(color)
  }
  render () {
    const { themes } = this.props
    return (
      <section className={styles['theme-pane']}>
        { themes.map((color, i) => {
          return (
            <div
              key={i}
              data-color={color}
              onClick={this.handleClick}
              className={`${styles['theme']} ${i===0 && styles['transparent']}`}
              style={{backgroundColor: color}}>
            </div>
          )
        }) }
      </section>
    )
  }
}

Theme.propTypes = {
  themes: React.PropTypes.array,
  handleTheme: React.PropTypes.func
}

/* 以前写的渐变corner, 样式可以收藏起来
  <span className="color_mode flat_color"></span>
  <span className="color_mode linear_gradient"></span>
  <span className="color_mode radial_gradient"></span>
  <span className="color_mode pattern_fill"></span>
  <span className="color_mode transparent_color"></span>
*/