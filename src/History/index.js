import React from 'react'
import './index.css'

export default class History extends React.Component {
  render () {
    return (
      <div className="history-pane">
        <span>最近使用的颜色</span>
        <div className="colpick_prev1 colpick_prev" style={{'backgroundColor': 'rgb(98, 0, 255)'}}></div>
        <div className="colpick_prev2 colpick_prev" style={{'backgroundColor': 'rgb(98, 0, 255)'}}></div>
        <div className="colpick_prev3 colpick_prev" style={{'backgroundColor': 'rgb(98, 0, 255)'}}></div>
        <div className="colpick_prev4 colpick_prev" style={{'backgroundColor': 'rgb(98, 0, 255)'}}></div>
        <div className="colpick_prev5 colpick_prev" style={{'backgroundColor': 'rgb(98, 0, 255)'}}></div>
        <div className="colpick_prev6 colpick_prev" style={{'backgroundColor': 'rgb(98, 0, 255)'}}></div>
        <div id="colpick_transparent" className="colpick_prev"></div>
      </div>
    )
  }
}

History.propTypes = {
  'a': React.PropTypes.string
}
