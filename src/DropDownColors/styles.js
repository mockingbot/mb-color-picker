import styled, { createGlobalStyle } from 'styled-components'

export const StyledDropDownColors = styled.div`
  border-top: 1px solid ${props => props.theme.borderColor};
  padding-bottom: 7px;

  .CoreSelect {
    border: none !important;
    padding: 10px 0 0 !important;
    height: auto;
    background-color: ${props => props.theme.bgColor} !important;

    &.is-open:not(.unstyled) {
      background: none;
      box-shadow: none;
    }

    button {
      border: none;
      padding: 0;
      height: auto;
      background-color: ${props => props.theme.bgColor};

      span {
        color: ${props => props.theme.tc};
      }

      &:focus{
        outline: 0;
      }
    }

    .caret {
      margin: 0 6px;
      color: ${props => props.theme.icon.select};
    }
  }

  .current-palette {
    display: flex;
    flex-wrap: wrap;
    margin: 0;
    padding: 0;
    margin-bottom: 10px;

    &.is-expand {
      overflow: hidden;
      max-height: 112px;
      transition: 0.3s ease-out;
    }
  }

  .current-palette-color-imagback {
    background-image: linear-gradient(45deg, #ccc 26%, transparent 26%), linear-gradient(-45deg, #ccc 26%, transparent 26%), linear-gradient(45deg, transparent 73%, #ccc 73%), linear-gradient(-45deg, transparent 73%, #ccc 73%);
    background-size: 6px 6px;
    border-radius: 2px;
    background-position: 0 0, 0 3px, 3px -3px, -3px 0;
    background-clip: padding-box;
    overflow: hidden;
  }

  .current-palette-color-li {
    height: 100%;

    &.transparent {
      position: relative;
      overflow: hidden;
      background-image: linear-gradient(45deg, #ccc 26%, transparent 26%), linear-gradient(-45deg, #ccc 26%, transparent 26%), linear-gradient(45deg, transparent 73%, #ccc 73%), linear-gradient(-45deg, transparent 73%, #ccc 73%);
      background-size: 6px 6px;
      background-position: 0 0, 0 3px, 3px -3px, -3px 0;
    }
  }

  .current-palette-color {
    list-style: none;
    width: 18px;
    height: 18px;
    cursor: pointer;
    margin-top: 10px;
    position: relative;

    li {
      border-radius: 2px;
      border: 1px solid ${props => props.theme.colorBlock.border};
    }

    &:not(:nth-child(9n)) {
      margin-right: 10px;
    }

    svg {
      position: absolute;
      top: 4px;
      left: 4px;
      width: 10px;

      path {
        fill: ${props => props.activeBorderColor};
      }
    }
  }

  .expand-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    path {
      fill: ${props => props.theme.icon.drop.tc};
    }

    &.is-pack-up {
      transform: rotate(180deg);
    }

    svg:hover path {
      fill: ${props => props.theme.icon.drop.hover};
    }
  }
`

export const GlobalStyledSelect = createGlobalStyle`
  .mb-color-selectMenu {
    background-color: ${props => props.theme.menu.bg} !important;
    color: ${props => props.theme.lightTc} !important;
    box-shadow: ${props => props.theme.menu.shadow} !important;

    .SelectOption:hover {
      background-color: ${props => props.theme.menu.hover.optionBg} !important;
      color: ${props => props.theme.menu.hover.tc} !important;
    }
  }
`
