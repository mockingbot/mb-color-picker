# mb-react-color-picker

>

[![NPM](https://img.shields.io/npm/v/mb-react-color-picker.svg)](https://www.npmjs.com/package/mb-react-color-picker) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

#### A React component that enables to pick color through HSV/HEX/RGBA.


## Install

```bash
yarn add mb-react-color-picker
```

## About
```jsx
class ColorPicker extends React.component {
  static propTypes = {
    color: PropTypes.string,
      /*
        color for the color picker, case insensitive
        valid pattern:
          1) hex pattern like '#fff', '#FFFFFF'
          2) rgba pattern like 'rgba(255, 255, 255, 1)'
       */
    onChange: PropTypes.func,
      /*
        get called when a color is picked. The color, formatted to rgba pattern,
        like 'rgba(255, 255, 255, 1)', is passed in as the first and only param.
      */
    onContinouslyChange: PropTypes.func,
      /*
        get called when a color is picked through dragging(hsv), the color is
        passed in as the first and only param. Useful for managing history.
      */
    applyDidMountSideEffect: PropTypes.func,
      /*
        get called in componentDidMount life cycle of the color picker.
      */
    applyWillUnmountSideEffect: PropTypes.func,
      /*
        get called in componentWillUnmount life cycle of the color picker.
      */
    themeColors: PropTypes.array,
      /*
        list of theme colors for quick pick, valid pattern is the same as above.
      */
    customColors: PropTypes.array,
      /*
        list of custom colors for quick pick.
      */
    customColorsHeaderText: PropTypes.string,
      /*
        header text for list of custom colors, defaults to 'Custom colors'.
      */
    onDragStart: PropTypes.func,
      /*
        if a function is passed, it will get called when dragging the color
        picker, a DOM element of the color picker will get passed as first and
        only param. Useful for positioning if you need a non-fixed style.
      */
    onClose: PropTypes.func,
      /*
        if a function is passed, a close button will appear on top right corner
        on the color picker. Clicking on it will let the function get called.
      */
    headerText: PropTypes.string,
      /*
        header text for color picker, defaults to 'Color Picker'.
      */
  }

  render () {
    ...
  }
}
```


## Usage

```jsx
import React, { Component } from 'react'

import ColorPicker from 'mb-react-color-picker'

class Example extends Component {
  state = {
    color: '#996633'
  }

  handleChange = color => this.setState({ color })

  render () {
    const { color } = this.state
    return (
      <ColorPicker
        color={color}
        onChange={this.handleChange}
      />
    )
  }
}
```

Also, you can wrap a custom color picker element, for example, a eyedropper color picker, into the `<ColorPicker>` as its child, to enhance the color picker. The custom color picker will receive `hex`, `alpha`, `handleChange` as props to interchange color with the `<ColorPicker>`. You can check the usage in `/example/src/App.js`


## Demo
[Pick me :hearts:](https://mockingbot.github.io/mb-color-picker/)


## License

MIT © [mockingbot](https://github.com/mockingbot)
