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
        font-size: 10px;
        position: absolute;
        margin-top: 2px;
        margin-left: 3px;
        color: ${props => props.theme.darkTc};
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
      padding: 3px;
      margin-right: -3px;
      box-sizing: content-box;
      color: ${props => props.theme.darkTc};
      font-size: 12px;
      cursor: pointer;

      &:hover {
        color: ${props => props.theme.icon.close.hover};
      }
    }
  }

  .color-picker-body {
    padding: 0 10px;
  }
`