import styled from 'styled-components'

export const StyledRGBInput = styled.label`
  & {
    width: 36px;

    span {
      display: block;
      line-height: 12px;
      margin-top: 4px;
      color: #8d9ea7;
      text-align: center;
    }

    input {
      width: 100%;
      height: 22px;
      padding: 0 4px;
      background: #f6f7f8;
      border: 1px solid #f2f2f3;
      border-radius: 2px;
      color: #415058;
      align-self: stretch;
      line-height: 1;
      overflow: hidden;
      transition: 0.2s ease-out;
      transition-property: border, box-shadow;

      &:hover {
        border-color: #1e98ea;
      }

      &:focus {
        border-color: #1e98ea;
        box-shadow: 0 0 6px 0 rgba(30, 152, 234, 0.5);
      }

      &.invalid {
        border-color: #e84030;
        box-shadow: 0 0 6px 0 rgba(232, 64, 48, 0.5);
      }
    }
  }
`