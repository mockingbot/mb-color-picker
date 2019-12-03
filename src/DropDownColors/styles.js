import styled from 'styled-components'

export const StyledDropDownColors = styled.div`
  border-top: 1px solid #dedee4;
  padding-bottom: 7px;

  .CoreSelect {
    border: none;
    padding: 10px 0 0;
    height: auto;

    &.is-open:not(.unstyled) {
      background: none;
      box-shadow: none;
    }

    button {
      border: none;
      padding: 0;
      height: auto;

      span {
        color: #415058;
      }

      &:focus{
        outline: 0;
      }
    }

    .caret {
      margin: 0 6px;
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

    li {
      border-radius: 2px;
      border: 1px solid rgba(0, 0, 0, 0.08);
    }

    &:not(:nth-child(9n)) {
      margin-right: 10px;
    }
  }

  .expand-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    &.is-pack-up {
      transform: rotate(180deg);
    }

    svg:hover path {
      fill: #5B6B73;
    }
  }
`