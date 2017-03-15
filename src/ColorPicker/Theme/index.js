import React from 'react'

import './index.css'

export default class Theme extends React.Component {
  render () {
    const { themes } = this.props
    return (
      <section className="theme-pane">
        { themes.map((t, i) => {
          return <div key={i} className="theme" style={{backgroundColor: t}}></div>
        }) }
      </section>
    )
  }
}

Theme.propTypes = {
  themes: React.PropTypes.array
}

/* 以前写的渐变corner, 样式可以收藏起来
  <span className="color_mode flat_color"></span>
  <span className="color_mode linear_gradient"></span>
  <span className="color_mode radial_gradient"></span>
  <span className="color_mode pattern_fill"></span>
  <span className="color_mode transparent_color"></span>
*/