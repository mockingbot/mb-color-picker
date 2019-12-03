import styled from 'styled-components'

export const StyledHSVPicker = styled.div`
  .s-v-plane {
    position: relative;
    height: 120px;
    margin-bottom: 10px;
    border: 1px solid rgba(0, 0, 0, 0.12);
    border-radius: 2px;
    background-clip: content-box;
    overflow: hidden;

    .pointer {
      position: absolute;
      width: 6px;
      height: 6px;
      margin: calc(-6px / 2);
      box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.5);
      border: 1px solid white;
      border-radius: 50%;
      pointer-events: none;
    }

    .base-hue-layer,
    .s-layer,
    .v-layer {
      position: absolute;
      width: 100%;
      height: 100%;
      pointer-events: none;
    }

    .s-layer {
      -ms-filter: "progid:DXImageTransform.Microsoft.gradient(GradientType=1,startColorstr='#ffffff', endColorstr='#00ffffff')";
      background: -moz-linear-gradient(left, white 0%, rgba(255, 255, 255, 0) 100%);
      background: -webkit-gradient(linear, left top, right top, color-stop(0%, white), color-stop(100%, rgba(255, 255, 255, 0)));
      background: -webkit-linear-gradient(left, white 0%, rgba(255, 255, 255, 0) 100%);
      background: -o-linear-gradient(left, white 0%, rgba(255, 255, 255, 0) 100%);
      background: -ms-linear-gradient(left, white 0%, rgba(255, 255, 255, 0) 100%);
      background: linear-gradient(to right, white 0%, rgba(255, 255, 255, 0) 100%);
      filter: progid:DXImageTransform.Microsoft.gradient(GradientType=1,startColorstr='#ffffff', endColorstr='#00ffffff');
    }

    .v-layer {
      -ms-filter: "progid:DXImageTransform.Microsoft.gradient(GradientType=0,startColorstr='#00000000', endColorstr='#000000')";
      background: -moz-linear-gradient(top, transparent 0%, black 100%);
      background: -webkit-gradient(linear, left top, left bottom, color-stop(0%, transparent), color-stop(100%, black));
      background: -webkit-linear-gradient(top, transparent 0%, black 100%);
      background: -o-linear-gradient(top, transparent 0%, black 100%);
      background: -ms-linear-gradient(top, transparent 0%, black 100%);
      background: linear-gradient(to bottom, transparent 0%, black 100%);
      filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#00000000', endColorstr='#000000',GradientType=0 );
    }
  }

  .row {
    display: flex;
    align-items: center;
  }

  .outside-color-picker-btn {
    width: 24px;
    height: 24px;
    margin-right: 8px;
    cursor: pointer;
    border: 1px solid #8d9ea7;
    border-radius: 2px;
    box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.12);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .h-a-bands {
    flex: 1;
    margin-right: 8px;
  }

  .h-band,
  .a-band {
    position: relative;
    height: 10px;
    border: 1px solid rgba(0, 0, 0, 0.12);
    border-radius: 2px;
    cursor: pointer;
    background-clip: padding-box;

    .rail {
      position: absolute;
      top: 1px;
      bottom: 1px;
      left: calc(5px / 2 + 1px);
      right: calc(5px / 2 + 1px);
    }

    .slider {
      position: absolute;
      top: -3px;
      width: 5px;
      height: 12px;
      margin-left: calc(- 5px / 2);
      background: #f6f7f8;
      box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.5);
      border-radius: 3px;
      z-index: 2;
      pointer-events: none;
    }
  }

  .h-band {
    margin-bottom: 4px;
    background-image: linear-gradient(to left, red, #ff0080, magenta, #8000ff, blue, #0080ff, cyan, #00ff80, lime, #80ff00, yellow, #ff8000, red);
  }

  .a-band {
    background-image:
      linear-gradient(45deg, #ccc 25%, transparent 25%),
      linear-gradient(-45deg, #ccc 25%, transparent 25%),
      linear-gradient(45deg, transparent 75%, #ccc 75%),
      linear-gradient(-45deg, transparent 75%, #ccc 75%);
    background-size: 6px 6px;
    background-position: 0 0, 0 3px, 3px -3px, -3px 0;
  }

  .preview-container {
    width: 24px;
    height: 24px;
    border: 1px solid #dedede;
    border-radius: 2px;
    background-image: linear-gradient(45deg,#ccc 25%,transparent 0),linear-gradient(-45deg,#ccc 25%,transparent 0),linear-gradient(45deg,transparent 75%,#ccc 0),linear-gradient(-45deg,transparent 75%,#ccc 0);
    background-size: 12px 12px;
    background-position: -1px -1px, -1px 5px, 5px -7px, -7px -1px;
  }
`