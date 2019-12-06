import styled from 'styled-components'

export const StyledColorPicker = styled.div`
  box-sizing: border-box;
  position: absolute;
  width: 262px;
  color: ${props => props.theme.tc};
  background: ${props => props.theme.bgColor};
  border-radius: 4px;
  box-shadow: 0 -2px 20px 0 rgba(39, 54, 78, 0.11);
  font-size: 12px;
  text-align: left;

  * {
    box-sizing: border-box;
  }

  input {
    outline: none;
  }

  .header-text {
    font-size: 12px;
    line-height: 1;
    font-weight: normal;
  }

  .input-section {
    display: flex;
    justify-content: space-between;
    padding-right: 1px;
    margin-top: 10px;
    margin-bottom: 12px;

    .hex-input {

      input {
        padding-left: 11px;
      }

      &::before {
        display: inline-block;
        content: '#';
        font-size: 22px;
        position: absolute;
        width: 14px;
        line-height: 22px;
        text-align: center;
        color: ${props => props.theme.darkTc};
        transform: scale(0.5);
      }
    }
  }

  .color-picker-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 10px 14px;
    cursor: move;

    .icon {
      box-sizing: content-box;
      width: 10px;
      cursor: pointer;

      path {
        fill: ${props => props.theme.darkTc};
      }

      &:hover path {
        fill: ${props => props.theme.icon.close.hover};
      }
    }
  }

  .color-picker-body {
    padding: 0 10px;
  }
`
