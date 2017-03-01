import React from 'react'

import './index.css'

const themes = []
for (let i = 0 ; i < 9 ; i ++) {
  themes.push('#' + (Math.random() * 0xFFFFFF >> 0).toString(16))
}

export default class Theme extends React.Component {
  render () {
    return (
      <section className="theme-pane">
        {themes.map((t, i) => {
          return <div key={i} className="theme" style={{backgroundColor: t}}></div>
        })}
      </section>
    )
  }
}

Theme.propTypes = {
  'a': React.PropTypes.string
}

/* 以前写的渐变corner, 样式可以收藏起来
  <span className="color_mode flat_color"></span>
  <span className="color_mode linear_gradient"></span>
  <span className="color_mode radial_gradient"></span>
  <span className="color_mode pattern_fill"></span>
  <span className="color_mode transparent_color"></span>
*/