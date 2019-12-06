import styled from 'styled-components'

export const StyledRGBInput = styled.label`
  & {
    width: 36px;

    span {
      display: block;
      line-height: 12px;
      margin-top: 4px;
      color: ${props => props.theme.darkTc};
      text-align: center;
    }

    input {
      width: 100%;
      height: 22px;
      padding: 0 4px;
      background: ${props => props.theme.input.bg};
      border: 1px solid ${props => props.theme.input.border};
      border-radius: 2px;
      color: ${props => props.theme.lightTc};
      align-self: stretch;
      line-height: 22px;
      overflow: hidden;
      transition: 0.2s ease-out;
      transition-property: border, box-shadow;

      &:hover {
        border-color: ${props => props.theme.input.hover.border};
      }

      &:focus {
        border-color: ${props => props.theme.input.hover.border};
        box-shadow: 0 0 6px 0 rgba(30, 152, 234, 0.5);
      }

      &.invalid {
        border-color: #e84030;
        box-shadow: 0 0 6px 0 rgba(232, 64, 48, 0.5);
      }
    }
  }
`
